import type { Metadata } from 'next';
import Link from 'next/link';
import { formatBlogDate, getBlogPosts, type BlogPostMeta } from '../../lib/blog';

const demoUrl = 'https://calendar.app.google/gLMwF9C1Gw6SED4S6';

export const metadata: Metadata = {
  title: 'Blog | Insuveo',
  description: 'Field notes on insurance workflows, information collection, and carefully bounded automation.',
};

function PostMeta({ post }: { post: BlogPostMeta }) {
  return (
    <div className="post-meta">
      <span>{post.category}</span>
      <span>{formatBlogDate(post.publishedAt)}</span>
      <span>{post.readingTime} min read</span>
    </div>
  );
}

function Header() {
  return (
    <header className="top-nav">
      <Link className="wordmark" href="/">insuveo</Link>
      <nav aria-label="Primary navigation">
        <Link href="/#product">Product</Link>
        <Link href="/#agents">Agents</Link>
        <Link href="/#process">Process</Link>
        <Link className="blog-nav-current" href="/blog">Blog</Link>
        <a href={demoUrl}>Book demo</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link className="wordmark" href="/">insuveo</Link>
        <p>Create agents for getting insurance workflow data.</p>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <a href={demoUrl}>Book demo</a>
      </nav>
    </footer>
  );
}

export default function BlogPage() {
  const posts = getBlogPosts();
  const [featured, ...morePosts] = posts;

  return (
    <main className="blog-shell">
      <Header />
      <section className="blog-hero">
        <p className="eyebrow">Insuveo field notes</p>
        <h1>What we are learning about insurance work.</h1>
        <p className="blog-hero-copy">
          Working ideas on information collection, human approvals, and the operational loops that sit around insurance decisions.
        </p>
      </section>

      <section className="blog-section">
        <div className="blog-section-header">
          <div>
            <p className="eyebrow">Latest</p>
            <h2>Notes from the work</h2>
          </div>
        </div>

        {!featured ? (
          <p className="empty-blog">The first field note is being prepared.</p>
        ) : (
          <Link className="featured-post" href={`/blog/${featured.slug}`}>
            <div className="featured-post-copy">
              <div>
                <PostMeta post={featured} />
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
              </div>
              <span className="text-link">Read field note →</span>
            </div>
            <div className="post-visual" aria-hidden={!featured.image}>
              {featured.image ? (
                <img className="post-image" src={featured.image} alt={featured.imageAlt || ''} />
              ) : (
                <span>Insuveo / {featured.category}</span>
              )}
            </div>
          </Link>
        )}
      </section>

      {morePosts.length > 0 && (
        <section className="blog-section">
          <div className="blog-section-header">
            <h2>More field notes</h2>
          </div>
          <div className="post-grid">
            {morePosts.map((post) => (
              <Link className="post-card" href={`/blog/${post.slug}`} key={post.slug}>
                <div>
                  <PostMeta post={post} />
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
                <span className="text-link">Read →</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
