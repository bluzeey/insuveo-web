import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
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
    title: `${post.title} | Insuveo`,
    description: post.excerpt,
    openGraph: post.image ? { images: [{ url: post.image, alt: post.imageAlt || post.title }] } : undefined,
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
          <a href={demoUrl}>Share a workflow</a>
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
          {post.image && (
            <div className="article-image-wrap">
              <img src={post.image} alt={post.imageAlt || ''} />
            </div>
          )}
        </header>

        <div className="article-body">
          <Markdown content={post.content} />
        </div>
      </article>

      <aside className="article-cta">
        <div>
          <h2>Does your team deal with a version of this?</h2>
          <p>
            I&apos;d rather hear the real workflow than pitch you a generic demo. Show me where the request starts, who gets chased, what usually comes back incomplete, and where your team loses time. If Insuveo can help, we can map a small test around it.
          </p>
          <a className="text-link" href={linkedinUrl} target="_blank" rel="noreferrer">Or just message Sahil on LinkedIn</a>
        </div>
        <a className="button button-primary" href={demoUrl}>Talk through the workflow</a>
      </aside>

      <footer className="footer">
        <div>
          <Link className="wordmark" href="/">insuveo</Link>
          <p>Notes on the work around insurance decisions.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <a href={demoUrl}>Share a workflow</a>
        </nav>
      </footer>
    </main>
  );
}
