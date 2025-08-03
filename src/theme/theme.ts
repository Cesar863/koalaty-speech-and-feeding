import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    glowColors: {
      yellow: string;
      green: string;
    };
  }
  interface ThemeOptions {
    glowColors: {
      yellow: string;
      green: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#363636',
      light: '#505050',
      dark: '#202020',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#9AA399',
      light: '#CAD1C3',
      dark: '#7F877B',
      contrastText: '#000000',
    },
    background: {
      default: '#F1F4F1',
      paper: '#B4CCA9',
    },
  },
  glowColors: {
    yellow: '#FFFA77',
    green: '#399E5A',
  },
  typography: {
    h1: {
      fontSize: '3.75rem',
      letterSpacing: '0.05em',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '0.75rem',
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            backgroundColor: '#71786D',
            '&:hover': {
              backgroundColor: '#7F877B',
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            border: '1px solid #b4b4b4',
            backgroundColor: 'transparent',
            color: '#363636',
          },
        },
      ],
      styleOverrides: {
        root: {
          padding: '12px 24px',
          borderRadius: '8px',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        color: '#363636',
      },
    },
  },
});
