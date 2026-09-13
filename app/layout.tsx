import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Insuveo | AI agents for insurance workflow data',
  description:
    'Insuveo turns plain-English insurance workflow requests into bounded data-collection agents.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
