import type { Metadata } from 'next';
import Link from 'next/link';
import { formatBlogDate, getBlogPosts, type BlogPostMeta } from '../../lib/blog';

const demoUrl = 'https://calendar.app.google/gLMwF9C1Gw6SED4S6';
const linkedinUrl = 'https://www.linkedin.com/in/sahil-maheshwari/';

export const metadata: Metadata = {
  title: 'Insurance Workflow Notes | Insuveo',
  description: 'Field notes on the operational work around broking, underwriting, renewals, claims, and insurance data collection.',
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
        <Link href="/#agents">Workflows</Link>
        <Link href="/#process">How it works</Link>
        <Link href="/#founder">Founder</Link>
        <Link className="blog-nav-current" href="/blog">Blog</Link>
        <a href={demoUrl}>Share a workflow</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link className="wordmark" href="/">insuveo</Link>
        <p>Notes on the work around insurance decisions.</p>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/">Home</Link>
        <Link href="/#founder">Founder</Link>
        <Link href="/blog">Blog</Link>
        <a href={demoUrl}>Share a workflow</a>
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
        <p className="eyebrow">Insurance workflow notes</p>
        <h1>The work between the client question and the insurance decision.</h1>
        <p className="blog-hero-copy">
          These are notes for brokers, underwriters, claims professionals, operations teams, and anyone who has had to chase a missing document, clarify an answer, compare what changed at renewal, or reconstruct context from a long email thread. We are writing about those workflows because that is where we are building Insuveo.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href={demoUrl}>Tell us what your team keeps chasing</a>
          <a className="button button-secondary" href={linkedinUrl} target="_blank" rel="noreferrer">Message Sahil</a>
        </div>
      </section>

      <section className="blog-section">
        <div className="blog-section-header">
          <div>
            <p className="eyebrow">Latest</p>
            <h2>From recent insurance workflow research</h2>
          </div>
        </div>

        {!featured ? (
          <p className="empty-blog">The first insurance workflow note is being prepared.</p>
        ) : (
          <Link className="featured-post" href={`/blog/${featured.slug}`}>
            <div className="featured-post-copy">
              <div>
                <PostMeta post={featured} />
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
              </div>
              <span className="text-link">Read the note</span>
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
            <h2>More notes from the field</h2>
          </div>
          <div className="post-grid">
            {morePosts.map((post) => (
              <Link className="post-card" href={`/blog/${post.slug}`} key={post.slug}>
                <div>
                  <PostMeta post={post} />
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
                <span className="text-link">Read the note</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="section split muted-section">
        <div>
          <p className="eyebrow">Why I am writing these</p>
          <h2>I want to understand the parts of insurance work that look small from the outside and take hours on the inside.</h2>
        </div>
        <div>
          <p>
            I&apos;m Sahil Maheshwari, the founder of Insuveo. My background is in software and AI, so I am deliberately spending time learning the operational reality from people who actually do the work: brokers, underwriters, claims teams, insurance operations, and corporate risk teams.
          </p>
          <p>
            If a post sounds like a workflow you deal with, or gets something wrong, I would like to hear from you. You do not need to prepare anything. A messy email thread, an awkward handoff, or a process your team complains about is enough context to start.
          </p>
          <a className="text-link" href={linkedinUrl} target="_blank" rel="noreferrer">Send me a note on LinkedIn</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
