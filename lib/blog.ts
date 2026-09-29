import fs from 'node:fs';
import path from 'node:path';

const blogDirectory = path.join(process.cwd(), 'content', 'blog');

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  author: string;
  seoTitle?: string;
  seoDescription?: string;
  updatedAt?: string;
  image?: string;
  imageAlt?: string;
  readingTime: number;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

type Frontmatter = Record<string, string>;

function parseFrontmatter(source: string): { data: Frontmatter; content: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(source);

  if (!match) {
    throw new Error('Blog posts must start with valid frontmatter.');
  }

  const data: Frontmatter = {};

  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(':');
    if (separator === -1) continue;

    const key = line.slice(0, separator).trim();
    let value = line.slice(separator + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    data[key] = value;
  }

  return { data, content: match[2].trim() };
}

function readingTime(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

function loadPost(filename: string): BlogPost {
  const slug = filename.replace(/\.md$/, '');
  const source = fs.readFileSync(path.join(blogDirectory, filename), 'utf8');
  const { data, content } = parseFrontmatter(source);
  const required = ['title', 'excerpt', 'publishedAt', 'category'];

  for (const field of required) {
    if (!data[field]) {
      throw new Error(`${filename} is missing the ${field} frontmatter field.`);
    }
  }

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    publishedAt: data.publishedAt,
    category: data.category,
    author: data.author || 'Insuveo',
    seoTitle: data.seoTitle || undefined,
    seoDescription: data.seoDescription || undefined,
    updatedAt: data.updatedAt || undefined,
    image: data.image || undefined,
    imageAlt: data.imageAlt || undefined,
    readingTime: readingTime(content),
    content,
  };
}

export function getBlogPosts(): BlogPostMeta[] {
  if (!fs.existsSync(blogDirectory)) return [];

  return fs
    .readdirSync(blogDirectory)
    .filter((filename) => filename.endsWith('.md'))
    .map(loadPost)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map(({ content: _content, ...post }) => post);
}

export function getBlogPost(slug: string): BlogPost | undefined {
  if (!/^[a-z0-9-]+$/.test(slug)) return undefined;

  const filename = `${slug}.md`;
  if (!fs.existsSync(path.join(blogDirectory, filename))) return undefined;

  return loadPost(filename);
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
