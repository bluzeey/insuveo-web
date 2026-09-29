import type { ReactNode } from 'react';
import Link from 'next/link';

export function InfoPageShell({ children }: { children: ReactNode }) {
  return (
    <main className="info-shell">
      <header className="top-nav">
        <Link className="wordmark" href="/">insuveo</Link>
        <nav aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/support">Support</Link>
        </nav>
      </header>
      {children}
      <footer className="footer">
        <div>
          <Link className="wordmark" href="/">insuveo</Link>
          <p>Workflow automation for insurance teams.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/support">Support</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
      </footer>
    </main>
  );
}
