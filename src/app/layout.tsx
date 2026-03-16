import type { Metadata, Viewport } from 'next';

import { websiteMetadata } from '@/configs/website';
import { cn } from '@/lib/utils';
import { fontMono, fontSans } from './font';
import '@/styles/globals.css';

export const metadata: Metadata = websiteMetadata;
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(fontSans.variable, fontMono.variable, 'antialiased')}>
        {children}
      </body>
    </html>
  );
}
