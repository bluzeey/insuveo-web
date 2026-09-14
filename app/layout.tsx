import type { Metadata } from 'next';
import { siteDescription, siteUrl } from '../lib/site';
import './globals.css';

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Insuveo',
  url: siteUrl,
  description: siteDescription,
  publisher: {
    '@type': 'Organization',
    name: 'Insuveo',
    founder: { '@type': 'Person', name: 'Sahil Maheshwari' },
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: 'Insuveo',
  title: {
    default: 'Insuveo | AI Workflow Automation for Insurance Teams',
    template: '%s | Insuveo',
  },
  description: siteDescription,
  keywords: [
    'insurance workflow automation',
    'commercial insurance automation',
    'insurance data collection',
    'underwriting workflow',
    'claims workflow',
    'insurance operations software',
  ],
  authors: [{ name: 'Sahil Maheshwari' }],
  creator: 'Sahil Maheshwari',
  alternates: { canonical: '/' },
  icons: { icon: '/icon.svg' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Insuveo',
    title: 'Insuveo | AI Workflow Automation for Insurance Teams',
    description: siteDescription,
    url: '/',
  },
  twitter: {
    card: 'summary',
    title: 'Insuveo | AI Workflow Automation for Insurance Teams',
    description: siteDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
