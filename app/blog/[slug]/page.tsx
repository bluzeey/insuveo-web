import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BlogPostVisual } from '../../../components/insurance-visuals';
import { Markdown } from '../../../components/markdown';
import { formatBlogDate, getBlogPost, getBlogPosts } from '../../../lib/blog';

const demoUrl = 'https://calendar.app.google/gLMwF9C1Gw6SED4S6';
const linkedinUrl = 'https://www.linkedin.com/in/sahil-maheshwari/';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    keywords: [post.category, 'insurance workflows', 'insurance operations', 'Insuveo'],
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: post.image ? [{ url: post.image, alt: post.imageAlt || post.title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <main className="article-shell">
      <header className="top-nav">
        <Link className="wordmark" href="/">insuveo</Link>
        <nav aria-label="Primary navigation">
          <Link href="/#product">Product</Link>
          <Link href="/#agents">Workflows</Link>
          <Link className="blog-nav-current" href="/blog">Blog</Link>
          <a className="button button-primary nav-cta" href={demoUrl}>Book a demo</a>
        </nav>
      </header>

      <article>
        <header className="article-head">
          <Link className="article-back" href="/blog">All insurance workflow notes</Link>
          <div className="post-meta">
            <span>{post.category}</span>
            <span>{formatBlogDate(post.publishedAt)}</span>
            <span>{post.readingTime} min read</span>
          </div>
          <h1>{post.title}</h1>
          <p className="article-dek">{post.excerpt}</p>
          <p className="post-meta">By {post.author}</p>
          {post.image ? (
            <div className="article-image-wrap">
              <img src={post.image} alt={post.imageAlt || ''} />
            </div>
          ) : (
            <div className="article-default-visual">
              <BlogPostVisual slug={post.slug} category={post.category} />
            </div>
          )}
        </header>

        <div className="article-body">
          <Markdown content={post.content} />
        </div>
      </article>

      <aside className="article-cta">
        <div>
          <h2>Is this workflow familiar?</h2>
          <p>
            Show us where information gets stuck. We&apos;ll map a small, human-reviewed test around the real process.
          </p>
          <a className="text-link" href={linkedinUrl} target="_blank" rel="noreferrer">Message Sahil on LinkedIn</a>
        </div>
        <a className="button button-primary" href={demoUrl}>Book a demo</a>
      </aside>

      <footer className="footer">
        <div>
          <Link className="wordmark" href="/">insuveo</Link>
          <p>Notes on the work around insurance decisions.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <a href={demoUrl}>Book a demo</a>
        </nav>
      </footer>
    </main>
  );
}
