import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { QueryProvider } from '@/provider/queryProvider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='ko'>
      <QueryProvider>
        <body>{children}</body>
      </QueryProvider>
    </html>
  );
}
