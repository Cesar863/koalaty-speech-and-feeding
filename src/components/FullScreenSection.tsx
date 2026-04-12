import { Box, useMediaQuery, useTheme } from '@mui/material';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  id?: string;
}

export default function FullScreenSection({ children, id }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const appBarHeight = isMobile ? 56 : 64;

  return (
    <Box
      id={id}
      sx={{
        minHeight: `calc(100vh - ${appBarHeight}px)`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 0,
        py: isMobile ? 7 : 8,
      }}
    >
      {children}
    </Box>
  );
}
