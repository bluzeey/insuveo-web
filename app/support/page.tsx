import type { Metadata } from 'next';
import Link from 'next/link';
import { InfoPageShell } from '../../components/info-page-shell';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Get help with Insuveo Google sign-in, Gmail and Outlook, feedback and privacy requests.',
  alternates: { canonical: '/support' },
};

export default function SupportPage() {
  return (
    <InfoPageShell>
      <section className="info-hero">
        <p className="eyebrow">Insuveo / Support</p>
        <h1>How can we help?</h1>
        <p className="info-lead">Help with Insuveo for Gmail and Outlook, feedback and privacy requests.</p>
        <a className="button button-primary" href="mailto:sahil@granveo.com?subject=Insuveo%20support">Email support</a>
      </section>
      <div className="info-content">
        <section>
          <h2>Contact</h2>
          <p>Email <a href="mailto:sahil@granveo.com?subject=Insuveo%20support">sahil@granveo.com</a> with your extension version, what you tried, and the error. Remove names, email addresses and sensitive insurance information from screenshots. Do not send passwords, API keys, session tokens or mailbox credentials.</p>
          <p>For access or deletion requests use the subject <strong>Insuveo privacy request</strong>. See our <Link href="/privacy">privacy policy</Link>.</p>
        </section>
        <section>
          <h2>Quick checks for version 0.3.4</h2>
          <ul>
            <li><strong>Sign-in is required:</strong> Open the Insuveo popup and choose Sign in with Google. No API key or backend address is needed. Sign-in sessions expire after seven days.</li>
            <li><strong>The panel will not open:</strong> Open Gmail, outlook.office.com or outlook.live.com, refresh after the Store update, then choose Open panel.</li>
            <li><strong>A request is unavailable:</strong> Check that you are signed in. If a daily assistant limit is reached, try again after it resets. Contact support if a server or connection error persists.</li>
            <li><strong>A thread looks incomplete:</strong> Open the conversation and choose Capture for visible context. Connect the optional mailbox and select its account before fetching the full thread. Hidden messages and attachment bytes are not fetched automatically.</li>
            <li><strong>Mailbox connection is unavailable:</strong> Google or Microsoft consent, provider verification and organisation rules apply separately from basic Insuveo sign-in. Visible browser context does not require that optional connection.</li>
            <li><strong>A PDF or Office document is incomplete:</strong> This release may retain its metadata while a full parser is unavailable. Text-like files can supply a preview.</li>
            <li><strong>Old records are missing after migration:</strong> Contact support so we can verify ownership. Migrated data is not automatically assigned to the first person who signs in.</li>
          </ul>
        </section>
        <section>
          <h2>Earlier Store versions</h2>
          <p>Check your installed version. Google sign-in becomes available with 0.3.4 after Store review and publication. Earlier versions may still show old server settings; changing those settings alone does not add sign-in.</p>
        </section>
        <section>
          <h2>About the assistant</h2>
          <p>Insuveo helps insurance teams work through email context and selected files. Check source information and review suggested replies before using or sending them. It does not make insurance decisions or automatically send email.</p>
        </section>
      </div>
    </InfoPageShell>
  );
}
