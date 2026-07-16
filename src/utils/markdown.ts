import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectoryEn = join(process.cwd(), "markdown/blogs");
const postsDirectoryTh = join(process.cwd(), "markdown/blogs-th");

function getPostsDir(locale: string) {
  return locale === "th" ? postsDirectoryTh : postsDirectoryEn;
}

function getFallbackPostsDir(locale: string) {
  return locale === "th" ? postsDirectoryEn : postsDirectoryTh;
}

export function getPostSlugs(locale: string = "en") {
  const dir = getPostsDir(locale);
  if (fs.existsSync(dir)) return fs.readdirSync(dir);
  return fs.readdirSync(getFallbackPostsDir(locale));
}

export function getPostBySlug(slug: string, fields: string[] = [], locale: string = "en") {
  const realSlug = slug.replace(/\.mdx$/, "");
  let dir = getPostsDir(locale);
  let fullPath = join(dir, `${realSlug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    fullPath = join(getFallbackPostsDir(locale), `${realSlug}.mdx`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: any = {};

  function processImages(content: string) {
    return content.replace(/!\[.*?\]\((.*?)\)/g, '<img src="$1" alt="" />');
  }

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = processImages(content);
    }
    if (field === "metadata") {
      items[field] = { ...data, coverImage: data.coverImage || null };
    }
    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = [], locale: string = "en") {
  const slugs = getPostSlugs(locale);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, locale))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}
