'use client';

import ClientWrapper from '@/app/ClientWrapper';
import { Navbar } from '@/components/Navbar/Navbar';
import { Box, CssBaseline } from '@mui/material';
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
          <Navbar />
          <Box height="100vh">{children}</Box>
        </ClientWrapper>
      </body>
    </html>
  );
}
