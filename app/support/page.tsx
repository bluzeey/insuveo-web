import type { Metadata } from 'next';
import Link from 'next/link';
import { InfoPageShell } from '../../components/info-page-shell';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Get help with Insuveo and the Insuveo Gmail Assistant Chrome extension.',
  alternates: { canonical: '/support' },
};

export default function SupportPage() {
  return (
    <InfoPageShell>
      <section className="info-hero">
        <p className="eyebrow">Insuveo / Support</p>
        <h1>How can we help?</h1>
        <p className="info-lead">Help with the Insuveo Gmail Assistant, feedback, and privacy requests.</p>
        <a className="button button-primary" href="mailto:sahil@granveo.com?subject=Insuveo%20support">Email support</a>
      </section>

      <div className="info-content">
        <section>
          <h2>Contact</h2>
          <p>
            Email <a href="mailto:sahil@granveo.com?subject=Insuveo%20support">sahil@granveo.com</a> with your extension version, what you were trying to do, what happened, and any error text. A screenshot can help, but please remove names, email addresses, and sensitive insurance details first.
          </p>
          <p>For access or deletion requests, use the subject <strong>Insuveo privacy request</strong>. See our <Link href="/privacy">privacy policy</Link>.</p>
        </section>

        <section>
          <h2>Quick checks</h2>
          <ul>
            <li><strong>The panel will not open:</strong> Open Gmail, refresh the tab after installing the extension, then click the Insuveo button again.</li>
            <li><strong>An answer is missing:</strong> Check the backend address in the extension popup. The development build uses a local server by default, which must be running to answer requests.</li>
            <li><strong>A thread looks incomplete:</strong> Open the conversation in Gmail and click Capture. The extension reads content visible in the current view; it does not automatically fetch hidden messages or attachment files.</li>
            <li><strong>A PDF or spreadsheet was uploaded:</strong> This backend version accepts the file but does not yet extract its contents for analysis. Text-like files can supply a preview.</li>
            <li><strong>Connect Gmail is unavailable:</strong> The optional Google connection requires server configuration and is not needed to capture the visible Gmail view.</li>
          </ul>
        </section>

        <section>
          <h2>About the assistant</h2>
          <p>
            Insuveo helps insurance teams work through email context and user-selected files. It can suggest summaries and drafts, but you should check the source information and review any response before relying on it or sending it. It does not make insurance decisions.
          </p>
        </section>
      </div>
    </InfoPageShell>
  );
}
