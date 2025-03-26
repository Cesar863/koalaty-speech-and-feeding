import { createTheme } from '@mui/material/styles';

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
      light: '#B7BEB2',
      dark: '#7F877B',
      contrastText: '#000000',
    },
    background: {
      default: '##eef3ec',
      paper: '#B4CCA9',
    },
  },
  typography: {
    h1: {
      fontSize: '5rem',
      letterSpacing: '0.05em',
      fontWeight: 700,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    subtitle2: {
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
          fontSize: '1rem',
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
