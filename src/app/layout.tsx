'use client';

import ClientWrapper from '@/app/ClientWrapper';
import { Navbar } from '@/components/Navbar/Navbar';
import { SnackbarProvider } from '@/components/Snackbar/SnackbarContext';
import { CssBaseline } from '@mui/material';
import type React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>
          <CssBaseline />
          <SnackbarProvider>
            <Navbar />
            {children}
          </SnackbarProvider>
        </ClientWrapper>
      </body>
    </html>
  );
}
