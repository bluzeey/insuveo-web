import type { Metadata } from 'next';
import Link from 'next/link';
import { InfoPageShell } from '../../components/info-page-shell';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Insuveo handles data on its website and in the Insuveo Gmail Assistant extension.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <InfoPageShell>
      <section className="info-hero">
        <p className="eyebrow">Insuveo / Privacy</p>
        <h1>Privacy policy.</h1>
        <p className="info-lead">How the Insuveo website and Gmail Assistant handle information.</p>
        <p className="info-date">Effective 29 September 2026</p>
      </section>

      <article className="info-content">
        <section>
          <h2>Who this covers</h2>
          <p>
            Insuveo is operated by Sahil Maheshwari. This policy covers insuveo.com, the Insuveo Gmail Assistant Chrome extension, and the Insuveo backend used by that extension. You can reach us at <a href="mailto:sahil@granveo.com?subject=Insuveo%20privacy%20request">sahil@granveo.com</a>.
          </p>
        </section>

        <section>
          <h2>What the Gmail Assistant handles</h2>
          <p>
            The extension runs on Gmail pages. When you open its panel, it captures information visible in the current Gmail view and sends it to the backend address configured in the extension. An open thread may include its subject, participants and email addresses, visible message text, attachment names, page URL and title, and capture time. In a list view, it may include visible sender names, subjects, and row previews. Clicking Capture can send updated context. Asking a question or clicking Analyze sends the current context and your request to the configured backend.
          </p>
          <p>
            If you select files in the assistant, their contents are sent with your chat or analysis request. The current backend extracts short previews from text-like files. PDF and spreadsheet uploads currently provide file metadata to the assistant, but their contents are not parsed by this backend version. The extension does not automatically download Gmail attachments or send an email on your behalf. Feedback opens a Gmail draft that you review and send yourself.
          </p>
          <p>
            Gmail content and files can include names, contact details, financial or health information, and other sensitive insurance information. Only use the assistant with information you are authorised to process.
          </p>
        </section>

        <section>
          <h2>Optional Gmail connection</h2>
          <p>
            The Connect Gmail button starts a separate Google authorisation flow only when that feature is configured and you choose to use it. The requested scope includes read-only Gmail access and basic Google account profile information. If connected, the backend receives and stores your account details and access and refresh tokens. The current assistant primarily works from the Gmail content visible in the browser; this connection is optional for that feature.
          </p>
        </section>

        <section>
          <h2>How information is used and stored</h2>
          <p>
            We use the information to show the assistant, retain captured context for the service, answer questions, analyse the current view, troubleshoot problems, and respond to support requests. The extension saves its backend address and endpoint settings in Chrome sync storage. The current backend stores captured Gmail context, page details, your questions and assistant responses, and, where processed, file names, metadata, and text previews. It does not intentionally store raw uploaded file bytes as a file archive.
          </p>
          <p>
            There is currently no automatic deletion schedule for backend records. Uninstalling the extension does not delete records already sent to a backend. Contact us to request access or deletion; we will work with you to identify the relevant records and handle the request. If you configure a backend other than Insuveo&apos;s, that operator controls its own storage and retention.
          </p>
        </section>

        <section>
          <h2>Processors and sharing</h2>
          <p>
            Requests go to the backend address shown in the extension settings. When the Insuveo backend has its AI mode enabled, relevant prompts, Gmail context, and extracted file text may be sent through OpenRouter to the selected model provider to generate a response. Hosting providers process data needed to operate the website and backend. We may also disclose information if required by law or needed to protect the service. We do not sell user data or use it for targeted advertising, creditworthiness, or lending.
          </p>
          <p>
            If you choose a custom backend address, your data is sent to that address, and its operator&apos;s practices may differ from this policy. The default local development address uses HTTP on your own computer; use an HTTPS endpoint for any remote deployment or real customer data.
          </p>
        </section>

        <section>
          <h2>Website and support</h2>
          <p>
            Our website receives ordinary request information through its hosting provider, such as IP address, browser details, requested pages, and access times. If you email support, we receive the message and any details you choose to share. Demo booking and LinkedIn links take you to third-party services governed by their own privacy practices. Please avoid sending policyholder or client records in a support message unless we have agreed on a secure method.
          </p>
        </section>

        <section>
          <h2>Security and limited use</h2>
          <p>
            Hosted service requests should use HTTPS. Access to operational data is limited to operating, securing, and supporting the service. The use of information received from Google APIs will adhere to the Chrome Web Store User Data Policy, including the Limited Use requirements. We use extension data only to provide or improve the assistant&apos;s stated purpose and related security and operational functions; we do not transfer it for unrelated purposes.
          </p>
        </section>

        <section>
          <h2>Updates and contact</h2>
          <p>
            We may update this policy as the product changes. We will update the effective date and disclose material changes in the product or listing when required. For privacy questions or data requests, email <a href="mailto:sahil@granveo.com?subject=Insuveo%20privacy%20request">sahil@granveo.com</a>, or see <Link href="/support">Support</Link>.
          </p>
        </section>
      </article>
    </InfoPageShell>
  );
}
