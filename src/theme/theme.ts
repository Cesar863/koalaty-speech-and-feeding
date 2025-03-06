import {createTheme} from "@mui/material/styles";

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
            default: '#E1E1DE',
            paper: '#B4CCA9',
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif',
        ].join(','),
        h1: {
            fontSize: '4rem',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.02em'
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '-0.01em'
        }

    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: '12px 24px',
                    fontSize: '1rem',
                    borderRadius: '8px',
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
      `,
        },
    },
});