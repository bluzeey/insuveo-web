# Insuveo Web

Next.js marketing site for Insuveo.

## Development

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm build
pnpm start
```

## Publishing a blog post

The blog is file-based. Add a Markdown file to `content/blog` using a lowercase,
hyphenated filename; that filename becomes the URL at `/blog/[slug]`.

```md
---
title: "A clear, specific title"
excerpt: "One sentence shown on the blog index."
publishedAt: "2026-09-13"
category: "Field notes"
author: "Insuveo"
seoTitle: "Concise search title for this article"
seoDescription: "A specific summary written for search results."
updatedAt: "2026-09-15"
image: "/blog/example.webp"
imageAlt: "Plain-language description of the image"
---

Post content in Markdown.
```

`seoTitle`, `seoDescription`, `updatedAt`, `image`, and `imageAlt` are optional.
The SEO fields let the visible article title and excerpt stay natural while the
search snippet remains concise. Images may be original artwork, licensed assets,
or AI-generated visuals. Store them under `public/blog` and use a descriptive
filename based on the post slug. Before publishing, follow
`docs/editorial-policy.md`.
