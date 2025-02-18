'use client';

import { ThemeProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '@mui/material-nextjs/v13-pagesRouter/createCache'; // Or v14
import { theme } from '@/theme/theme';
import React from "react";

const emotionCache = createEmotionCache();

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </CacheProvider>
    );
}