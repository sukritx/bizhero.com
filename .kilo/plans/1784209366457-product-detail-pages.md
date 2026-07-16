# Product Detail Pages — PDF-First Approach

## Principle

**PDFs are the source of truth for individual products.** At build time, scan `public/product-specs/`, derive product info from folder structure and filenames, and generate a page per PDF. Every product page is guaranteed to have a spec download.

---

## Step 1 — Add 4 new categories to `src/data/productsData.ts`

Insert these new `ProductCategory` entries after `metal-working-fluid`:

| `slug` | `title.en` | `icon` |
|---|---|---|
| `agricultural-oil` | Agricultural Oil | `agriculture` |
| `turbine-oil` | Turbine Oil | `turbine` |
| `industrial-circulation-oil` | Industrial Circulation Oil | `circulation` |
| `slideway-oil` | Slideway Oil | `slideway` |

Each needs bilingual `title`, `description`, `applications` (at least 1), and at least an empty `brands: []`. Brands and items will be populated from PDF discovery. Add reasonable descriptions aligned with common PETRONAS product lines.

---

## Step 2 — Create `src/data/productSpecConfig.ts`

Mapping configuration:

```ts
export interface FolderMapping {
  brandName: string;                  // "PETRONAS"
  folderPath: string;                 // relative under product-specs/
  categorySlug: string;               // engine-oil
  filenameRules?: {                   // optional: split mixed folders
    keyword: string;                  // "Brake" → matches "Brake"
    categorySlug: string;             // overrides target category
  }[];
}

export const brandFolderMap: Record<string, string> = {
  "Petronas PDS": "PETRONAS",
  "Valvoline PDS": "Valvoline",
};

export const excludeFolders = new Set([
  "COA", "ISO Valvoline", "เปรียบเทียบแบรนด์"
]);

export const folderMappings: FolderMapping[] = [
  // Brand, folder path pattern (prefix match), category slug
  { brandName: "PETRONAS", folderPath: "Petronas PDS/Urania Series", categorySlug: "engine-oil" },
  { brandName: "PETRONAS", folderPath: "Petronas PDS/GEO-NGV", categorySlug: "engine-oil" },
  { brandName: "PETRONAS", folderPath: "Petronas PDS/Hydraulic", categorySlug: "hydraulic-oil" },
  { brandName: "PETRONAS", folderPath: "Petronas PDS/Gear", categorySlug: "gear-oil" },
  { brandName: "PETRONAS", folderPath: "Petronas PDS/Gear Fleet", categorySlug: "gear-oil" },
  { brandName: "PETRONAS", folderPath: "Petronas PDS/Grease", categorySlug: "grease" },
  { brandName: "PETRONAS", folderPath: "Petronas PDS/Compressor", categorySlug: "compressor-oil" },
  { brandName: "PETRONAS", folderPath: "Petronas PDS/Hot Oil", categorySlug: "heat-transfer-oil" },
  { brandName: "PETRONAS", folderPath: "Petronas PDS/Brake & Coolant", categorySlug: "brake-fluid",
    filenameRules: [
      { keyword: "Brake", categorySlug: "brake-fluid" },
      { keyword: "Coolant", categorySlug: "coolant" },
    ] },
  { brandName: "PETRONAS", folderPath: "Petronas PDS/Akros", categorySlug: "agricultural-oil" },
  { brandName: "PETRONAS", folderPath: "Petronas PDS/BIO Gas", categorySlug: "turbine-oil" },       // biogas engine
  { brandName: "PETRONAS", folderPath: "Petronas PDS/Gas Steam Turbine", categorySlug: "turbine-oil" },
  { brandName: "PETRONAS", folderPath: "Petronas PDS/Circular Series", categorySlug: "industrial-circulation-oil" },
  { brandName: "PETRONAS", folderPath: "Petronas PDS/Slideway", categorySlug: "slideway-oil" },
  { brandName: "PETRONAS", folderPath: "Petronas PDS/อื่นๆ", categorySlug: "transmission-fluid" },
  { brandName: "Valvoline", folderPath: "Valvoline PDS/Engine", categorySlug: "engine-oil" },
  { brandName: "Valvoline", folderPath: "Valvoline PDS/Hydraulic", categorySlug: "hydraulic-oil" },
  { brandName: "Valvoline", folderPath: "Valvoline PDS/Gear Fleet", categorySlug: "gear-oil" },
  { brandName: "Valvoline", folderPath: "Valvoline PDS/Gear Industrial", categorySlug: "gear-oil" },
  { brandName: "Valvoline", folderPath: "Valvoline PDS/Grease", categorySlug: "grease" },
  { brandName: "Valvoline", folderPath: "Valvoline PDS/Brake", categorySlug: "brake-fluid" },
  { brandName: "Valvoline", folderPath: "Valvoline PDS/Coolant", categorySlug: "coolant" },
];
```

Also export filename cleanup patterns:
- Suffixes to strip (regex list): `_PDS_TH_\d{8}`, `_PDS_EN_\d{8}`, `_TDS_TH_\d{8}`, `_TDS_EN_\d{8}`, `_\d{5,6}_PDS_\d{6}`, `_PDS_TH`, `_PDS_EN`, `_TDS_TH`, `_TDS_EN`, `_\w{2,3}_\d{4,8}`, `_Updated \w+ \d{4}`, ` (SDS BI)`, `_SDS_\w+`, `_Rev \d+`, `_\d{8}_\d{6}`
- Brand name prefixes to strip: PETRONAS, Valvoline, Monroe (case-insensitive)
- `\/ prefix stripping: leading numbers like "2. "
- Final cleanup: replace `_` with space, trim, title-case

---

## Step 3 — Create `src/data/productSpecDiscovery.ts`

Server-only module (uses Node.js `fs`, `path` — imported only in server components / `generateStaticParams`).

### Exports

```ts
interface DiscoveredProduct {
  brand: string;
  categorySlug: string;
  productName: string;       // clean display name (from filename)
  productSlug: string;       // brand-prefixed slug
  pdfRelPath: string;        // path relative to public/ e.g. "product-specs/Petronas PDS/..."
  pdfBasename: string;       // just the filename for display
  matchedItemName: string | null; // if matched to productsData item, the item name
}
```

### Logic

```ts
function cleanPdfName(filename: string, brandName: string): string
```

Steps:
1. Strip `.pdf` extension
2. Strip brand name prefix (case-insensitive)
3. Strip leading numbering `^\d+\.?\s*`
4. Apply suffix regex patterns in order until no more match
5. Strip trailing whitespace / punctuation
6. Replace underscores with spaces
7. Title-case (capitalize first letter of each word)
8. Trim

```ts
function getAllDiscoveredProducts(): DiscoveredProduct[]
```

Steps:
1. Only run in Node.js environment (`typeof process === 'object'` guard)
2. Walk `public/product-specs/` recursively
3. For each PDF file path:
   a. Determine brand from parent folder prefix using `brandFolderMap`
   b. Determine subfolder relative path (after brand folder)
   c. Skip if any parent folder name is in `excludeFolders`
   d. Find matching `FolderMapping` by prefix match on folder path
   e. If mapping has `filenameRules`:
      - Check if filename contains keyword → use rule's categorySlug
      - If no keyword match → skip (orphan in mixed folder)
   f. Clean filename using `cleanPdfName`
   g. Generate slug: `slugify(brand + "-" + cleanedName)`
   h. Check for slug collisions within same category → deduplicate (unique by full URL path: categorySlug + productSlug)
4. After collection, try to match each `DiscoveredProduct` to items from `productsData.ts`:
   - For same brand+category, normalize both names (lowercase, strip spaces/special chars)
   - If the item's normalized name is a substring of the PDF's normalized name (or vice versa) → match
   - If matched, store `matchedItemName` from the productsData item

```ts
function getProductsByCategory(categorySlug: string): DiscoveredProduct[]
```

Filter `getAllDiscoveredProducts()` by `categorySlug`.

```ts
function getProductBySlugs(categorySlug: string, productSlug: string): DiscoveredProduct | undefined
```

Lookup from `getAllDiscoveredProducts()`.

### Slug function (shared)

```ts
function slugify(s: string): string
// lowercase → replace [^a-z0-9]+ with - → trim trailing hyphens
```

Brand-prefixed slugs guarantee uniqueness: collision between different brands in same category is impossible (different prefix), and same brand+different category is fine (different URL path).

---

## Step 4 — Create `src/app/[locale]/products/[slug]/[productSlug]/page.tsx`

### `generateStaticParams`

```ts
export async function generateStaticParams() {
  const products = getAllDiscoveredProducts();
  return products.map(p => ({ slug: p.categorySlug, productSlug: p.productSlug }));
}
```

### `generateMetadata`

```ts
export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug, productSlug, locale } = await params;
  const product = getProductBySlugs(slug, productSlug);
  const dict = await getDictionary(locale);
  const category = getProductBySlug(slug);
  const displayName = product?.matchedItemName || product?.productName || "";
  return {
    title: `${displayName} | ${dict.site.name}`,
    description: category ? tl(category.description, locale) : "",
    alternates: {
      canonical: `https://bizhero.com/${locale}/products/${slug}/${productSlug}`,
      languages: {
        th: `https://bizhero.com/th/products/${slug}/${productSlug}`,
        en: `https://bizhero.com/en/products/${slug}/${productSlug}`,
      },
    },
  };
}
```

### Page Component

- Hero section: product name (prefer matchedItemName), brand logo, background
- Category breadcrumb link
- Spec sheet download section: list PDF filename(s) as download links pointing to `/product-specs/...`
- If no product found → `notFound()`
- Follow existing page patterns (same styling as category page, `CallToAction` at bottom)

---

## Step 5 — Update `src/app/[locale]/products/[slug]/page.tsx`

The category page keeps its hero section and category description/applications.

Replace the `brands[].items[]` rendering with:

1. Fetch `getProductsByCategory(slug)` — returns discovered products
2. Group them by `brand`
3. For each brand group, render a card with brand logo + product links
4. Each link → `/${locale}/products/${slug}/${product.productSlug}`
5. Show the `product.matchedItemName || product.productName` as link text
6. Keep existing styling (rounded cards, shadows, etc.)

Fallback: if no discovered products for this category (e.g. a new category with no PDFs yet), show the original `brands[].items[]` as plain text chips.

---

## Step 6 — Validation

1. `npm run build` must succeed with generated static params
2. Each product page loads and shows the PDF download link
3. PDF link downloads the correct file
4. Category page shows links to products that have PDFs
5. Products without PDFs shown as plain text
6. Collision-free slugs: verify no duplicate `{categorySlug, productSlug}` pairs
7. New categories render on products listing page
8. Canonical URLs are correct

---

## Edge Cases

| Case | Handling |
|---|---|
| PDF filename matches no product in `productsData.ts` | Page uses derived name from filename cleanup |
| Same PDF filename matches multiple products | Prefer exact match over substring match |
| PDF has no matching folder mapping | Skipped (orphan PDF) |
| Mixed folder (Brake & Coolant) | Filename keyword routing |
| Product item in `productsData.ts` has NO matching PDF | Not linked from category page (plain text) |
| Multiple PDFs for the same product | Shown as a list of download links |
| `อื่นๆ` folder | Routed to `transmission-fluid` by default |
| Identical brand+item in different categories | URL path `/{categorySlug}/{productSlug}` keeps them separate |
