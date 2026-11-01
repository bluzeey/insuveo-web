import type { Metadata } from 'next';
import Link from 'next/link';
import { InfoPageShell } from '../../components/info-page-shell';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Insuveo handles Google sign-in, Gmail and Outlook context, files, and saved assistant data.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <InfoPageShell>
      <section className="info-hero">
        <p className="eyebrow">Insuveo / Privacy</p>
        <h1>Privacy policy.</h1>
        <p className="info-lead">How the Insuveo website and email assistant handle information.</p>
        <p className="info-date">Updated 1 November 2026 · Google sign-in applies from extension version 0.3.4.</p>
      </section>

      <article className="info-content">
        <section>
          <h2>Who this covers</h2>
          <p>Insuveo is operated by Sahil Maheshwari. This policy covers insuveo.com, the Insuveo Chrome extension for Gmail and Outlook, and its backend. Contact <a href="mailto:sahil@granveo.com?subject=Insuveo%20privacy%20request">sahil@granveo.com</a> with privacy questions or data requests.</p>
        </section>
        <section>
          <h2>Google sign-in and your account</h2>
          <p>From version 0.3.4, choose Sign in with Google to use the hosted assistant. Google supplies your verified email address, name and stable Google account identifier so we can identify your Insuveo account and keep its saved data separate from other users. This login requests only basic identity information; it does not grant Gmail mailbox access. Google handles your Google password and verification prompts. Insuveo does not ask you to paste an API key.</p>
          <p>The extension stores its individual sign-in session in Chrome local storage restricted to trusted extension contexts, not Chrome sync storage or the Gmail or Outlook page. The backend stores a hash of the app session, its expiry and revocation state, together with temporary sign-in state and usage counters. App sessions expire after seven days. Sign out revokes the current session when the server is reachable and clears the assistant panel and local session. Other signed-in devices have their own sessions.</p>
        </section>
        <section>
          <h2>Visible email context and selected files</h2>
          <p>The extension runs on Gmail, outlook.office.com and outlook.live.com. From version 0.3.4 it makes no assistant requests or automatic context uploads before sign-in. When you are signed in and open its panel, it captures the information visible in the current mail view and sends it to the Insuveo backend. An open thread may include its subject, participants and email addresses, visible message text, attachment names, page URL and title, and capture time. A list view may include visible sender names, subjects and row previews. Capture sends updated context; questions and Analyze send your request and current context.</p>
          <p>If you choose files, their contents are sent with the relevant request. The current backend extracts previews from text-like files and stores metadata and processed text. PDF and Office files may be recorded as requiring a parser; this release does not promise full extraction of those formats. It does not intentionally keep raw uploaded bytes as a file archive. Mail and files can contain names, contacts, financial or health information, and sensitive insurance information. Use only information you are authorised to process.</p>
        </section>
        <section>
          <h2>Optional mailbox connections</h2>
          <p>Connect Gmail and Connect Microsoft start separate provider consent flows when configured and when you choose them. Gmail requests read-only mail access and basic profile information; Microsoft requests profile and read-only mail access, including permission to retain a connection. The backend stores the connected account details and provider access and refresh tokens under the signed-in Insuveo account. Selected-thread fetching and limited indexing use the mailbox you explicitly choose. Attachment processing fetches a selected attachment only when requested. Provider verification or administrator restrictions may affect availability.</p>
          <p>Connecting a mailbox is optional for working from visible browser context. This release does not send email or create external mail drafts automatically. Suggested replies and approval records remain for your review. Feedback opens an email draft that you review and send yourself.</p>
        </section>
        <section>
          <h2>Storage, retention and access</h2>
          <p>The hosted backend is at https://insuveo-api.granveo.com, on a Hostinger server in Mumbai. It stores account details, connected-mailbox records, captured context, page details, your questions and assistant replies, file metadata and processed text, extracted facts, source records and reviewable workflow actions. Application and database ownership checks restrict normal access to the signed-in account. Imported records without an established account owner are kept private until reviewed.</p>
          <p>There is no automatic deletion schedule for saved business records. Uninstalling or signing out does not delete records already sent to the backend. Operational recovery copies may contain the same data. Contact us to request access or deletion; we will verify your account and identify the relevant records. Never include passwords, session tokens or mailbox credentials in a support message.</p>
        </section>
        <section>
          <h2>Processors and sharing</h2>
          <p>Google processes sign-in, and Google or Microsoft processes optional mailbox connections. Hostinger processes backend storage and hosting. When AI mode is enabled, relevant prompts, selected email context and extracted file text may be sent through OpenRouter to the configured model provider to answer your request. Website hosting providers process ordinary request information. We may disclose information when required by law or to protect the service. We do not sell user data or use it for targeted advertising, creditworthiness or lending.</p>
          <p>Earlier extension versions may expose a configurable backend address and local development settings. Data sent through those versions goes to the configured operator; consult that operator&apos;s practices. Version 0.3.4 uses the fixed HTTPS Insuveo backend and has no user-entered backend address.</p>
        </section>
        <section>
          <h2>Website, security and limited use</h2>
          <p>Website requests can include IP address, browser details, requested pages and access times. Support receives the details you choose to send. Demo booking and LinkedIn links lead to services with their own privacy practices. The backend uses request and assistant limits to manage abuse and provider costs; sign-in IP counters use hashed addresses.</p>
          <p>Hosted assistant requests use HTTPS. Access to operational data is limited to operating, securing and supporting the service. Our use of information received from Google APIs will adhere to the Google API Services User Data Policy, including its Limited Use requirements, and the Chrome Web Store User Data Policy. We use extension data for the stated assistant features and related security and operational functions, not unrelated purposes.</p>
        </section>
        <section>
          <h2>Updates and contact</h2>
          <p>We update this policy as the product changes and disclose material changes in the product or listing when required. For questions, access or deletion requests, email <a href="mailto:sahil@granveo.com?subject=Insuveo%20privacy%20request">sahil@granveo.com</a> or visit <Link href="/support">Support</Link>.</p>
        </section>
      </article>
    </InfoPageShell>
  );
}
