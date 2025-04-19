'use client';

import { theme } from '@/theme/theme';
import { CacheProvider } from '@emotion/react';
import { Box, GlobalStyles, ThemeProvider } from '@mui/material';
import createEmotionCache from '@mui/material-nextjs/v13-pagesRouter/createCache';
import type React from 'react';

const emotionCache = createEmotionCache();

export default function ClientWrapper({
  children,
}: { children: React.ReactNode }) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={{
            html: {
              scrollBehavior: 'smooth',
            },
            '.anchor-section': {
              scrollMarginTop: '72px',
            },
          }}
        />
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
      </ThemeProvider>
    </CacheProvider>
  );
}
