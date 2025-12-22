import ClientWrapper from '@/app/ClientWrapper';
import { Navbar } from '@/components/Navbar/Navbar';
import type { Metadata } from 'next';
import type React from 'react';

export const metadata: Metadata = {
  title: 'Koalaty Speech and Feeding',
  description: 'Speech and feeding therapy services in Lakeland, FL',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>
          <Navbar />
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
