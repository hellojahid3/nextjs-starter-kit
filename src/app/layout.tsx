import type { Metadata } from 'next';

import { websiteMetadata } from '@/configs/website';
import { cn } from '@/lib/utils';
import { fontMono, fontSans } from './font';
import '@/styles/globals.css';

export const metadata: Metadata = websiteMetadata;

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
