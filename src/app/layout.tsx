'use client';

import ClientWrapper from '@/app/ClientWrapper';
import { Navbar } from '@/components/Navbar/Navbar';
import { Box, CssBaseline, useMediaQuery, useTheme } from '@mui/material';
import type React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <html lang="en">
      <body>
        <ClientWrapper>
          <CssBaseline />
          <Navbar />
          <Box height={isMobile ? 'calc(100vh - 64px)' : 'calc(100vh - 80px)'}>
            {children}
          </Box>
        </ClientWrapper>
      </body>
    </html>
  );
}
