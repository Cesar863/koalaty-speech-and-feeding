'use client';

import { theme } from '@/theme/theme';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import createEmotionCache from '@mui/material-nextjs/v13-pagesRouter/createCache';
import type React from 'react';

const emotionCache = createEmotionCache();

export default function ClientWrapper({
	children,
}: { children: React.ReactNode }) {
	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</CacheProvider>
	);
}
