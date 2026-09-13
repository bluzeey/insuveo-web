import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Insuveo | Data collection agents for insurance teams',
  description:
    'Describe the information you need, review the plan, and let Insuveo handle the approved follow-up.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
