import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MINY Exclusives | Exclusive Music Content & Artist Access',
  description: 'Get exclusive access to behind-the-scenes moments, special previews, and interactive fan experiences with your favorite indie artists.',
  openGraph: {
    title: 'MINY Exclusives | Exclusive Music Content & Artist Access',
    description: 'Get exclusive access to behind-the-scenes moments, special previews, and interactive fan experiences with your favorite indie artists.',
    images: ['https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2000'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MINY Exclusives | Exclusive Music Content & Artist Access',
    description: 'Get exclusive access to behind-the-scenes moments, special previews, and interactive fan experiences with your favorite indie artists.',
    creator: '@minyvinyl',
    images: ['https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2000'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}