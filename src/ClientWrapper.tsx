import { Box, CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import type React from 'react';
import { SnackbarProvider } from '@/components/Snackbar/SnackbarContext';
import { theme } from '@/theme/theme';

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          html: { scrollBehavior: 'smooth' },
          '.anchor-section': { scrollMarginTop: '72px' },
        }}
      />
      <SnackbarProvider>
        <Box
          sx={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: -1,
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: 200,
              height: 200,
              background: theme.glowColors.yellow,
              borderRadius: '50%',
              filter: 'blur(150px)',
              top: 100,
              left: 50,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              width: 200,
              height: 200,
              background: theme.glowColors.green,
              borderRadius: '50%',
              filter: 'blur(150px)',
              bottom: 100,
              left: 50,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              width: 100,
              height: 100,
              background: theme.glowColors.yellow,
              borderRadius: '50%',
              filter: 'blur(150px)',
              bottom: 100,
              right: 100,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              width: 200,
              height: 200,
              background: theme.glowColors.green,
              borderRadius: '50%',
              filter: 'blur(150px)',
              top: 100,
              right: 100,
            }}
          />
        </Box>
        {children}
      </SnackbarProvider>
    </ThemeProvider>
  );
}
