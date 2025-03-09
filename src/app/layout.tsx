import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Contact App',
  description: 'A Next.js 13 Contact page example',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
