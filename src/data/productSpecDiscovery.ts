import fs from "fs";
import path from "path";
import { brandFolderMap, excludeFolders, folderMappings, suffixPatterns, brandPrefixes } from "./productSpecConfig";
import { productCategories } from "./productsData";

export interface DiscoveredProduct {
  brand: string;
  categorySlug: string;
  productName: string;
  productSlug: string;
  pdfRelPath: string;
  pdfBasename: string;
  matchedItemName: string | null;
}

const specBase = path.join(process.cwd(), "public", "product-specs");

function getBrandFolder(pdfRelPath: string): string | null {
  const first = pdfRelPath.split(path.sep)[0];
  return brandFolderMap[first] || null;
}

function cleanPdfName(filename: string, brandName: string): string {
  let name = filename.replace(/\.pdf$/i, "");

  name = name.replace(/^\d+\.?\s*/, "");

  const brandEscaped = brandPrefixes.map((b) => b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  const brandRe = new RegExp(`^(?:${brandEscaped})\\s*`, "i");
  name = name.replace(brandRe, "");

  for (const pattern of suffixPatterns) {
    name = name.replace(pattern, "");
  }

  name = name.replace(/[\s_]+/g, " ").trim();
  name = name.replace(/[-\s]+$/, "").trim();
  name = name.replace(/_/g, " ");
  name = name.replace(/\s+/g, " ").trim();

  name = name.replace(/\b\w/g, (c) => c.toUpperCase());

  return name.trim();
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeForMatch(s: string): string {
  return s.toLowerCase().replace(/[\s\-_]+/g, "").replace(/[^a-z0-9]/g, "");
}

let cachedProducts: DiscoveredProduct[] | null = null;

export function getAllDiscoveredProducts(): DiscoveredProduct[] {
  if (cachedProducts) return cachedProducts;

  const isNode =
    typeof process !== "undefined" &&
    process.versions != null &&
    process.versions.node != null;

  if (!isNode) {
    cachedProducts = [];
    return cachedProducts;
  }

  const products: DiscoveredProduct[] = [];
  const seen = new Set<string>();

  const pdfs = walkPdfFiles(specBase);

  for (const absPath of pdfs) {
    const relPath = path.relative(specBase, absPath);
    const brand = getBrandFolder(relPath);
    if (!brand) continue;

    const pathParts = relPath.split(path.sep);
    const brandFolderName = pathParts[0];
    const subPath = pathParts.slice(1).join(path.sep);

    const parentFolders = pathParts.slice(1, -1);
    const hasExcluded = parentFolders.some((p) => excludeFolders.has(p));
    if (hasExcluded) continue;

    let mapping = findMapping(relPath);
    if (!mapping) continue;

    let categorySlug = mapping.categorySlug;

    if (mapping.filenameRules && mapping.filenameRules.length > 0) {
      const basename = path.basename(absPath);
      const matchedRule = mapping.filenameRules.find((rule) =>
        basename.toLowerCase().includes(rule.keyword.toLowerCase())
      );
      if (!matchedRule) continue;
      categorySlug = matchedRule.categorySlug;
    }

    const cleanName = cleanPdfName(path.basename(absPath), brand);
    if (!cleanName) continue;

    const prodSlug = slugify(brand + "-" + cleanName);
    const dedupKey = `${categorySlug}/${prodSlug}`;

    if (seen.has(dedupKey)) continue;
    seen.add(dedupKey);

    const matchedItem = matchToItem(brand, categorySlug, cleanName);

    products.push({
      brand,
      categorySlug,
      productName: cleanName,
      productSlug: prodSlug,
      pdfRelPath: `product-specs/${relPath.replace(/\\/g, "/")}`,
      pdfBasename: path.basename(absPath),
      matchedItemName: matchedItem || null,
    });
  }

  cachedProducts = products;
  return products;
}

function walkPdfFiles(dir: string): string[] {
  const results: string[] = [];
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const absPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkPdfFiles(absPath));
    } else if (entry.isFile() && /\.pdf$/i.test(entry.name)) {
      results.push(absPath);
    }
  }
  return results;
}

function findMapping(relPath: string): (typeof folderMappings)[number] | undefined {
  const sorted = [...folderMappings].sort((a, b) => b.folderPath.length - a.folderPath.length);
  const normalized = relPath.replace(/\\/g, "/");
  return sorted.find((m) => normalized.startsWith(m.folderPath));
}

function matchToItem(brand: string, categorySlug: string, cleanName: string): string | null {
  const category = productCategories.find((c) => c.slug === categorySlug);
  if (!category) return null;

  const brandEntry = category.brands.find((b) => b.name === brand);
  if (!brandEntry) return null;

  const normClean = normalizeForMatch(cleanName);

  let bestMatch: string | null = null;

  for (const item of brandEntry.items) {
    const normItem = normalizeForMatch(item);
    if (normClean === normItem) return item;
    if (normItem.length > 0 && normClean.length > 0) {
      if (normClean.includes(normItem) || normItem.includes(normClean)) {
        if (!bestMatch || normItem.length > normalizeForMatch(bestMatch).length) {
          bestMatch = item;
        }
      }
    }
  }

  return bestMatch;
}

export function getProductsByCategory(categorySlug: string): DiscoveredProduct[] {
  return getAllDiscoveredProducts().filter((p) => p.categorySlug === categorySlug);
}

export function getProductBySlugs(categorySlug: string, productSlug: string): DiscoveredProduct | undefined {
  return getAllDiscoveredProducts().find(
    (p) => p.categorySlug === categorySlug && p.productSlug === productSlug
  );
}

export function clearCache(): void {
  cachedProducts = null;
}
