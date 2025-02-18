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
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#B4CCA9',
                    color: '#FFFFFF',
                    '&:hover': {
                        backgroundColor: '#A0B398',
                    },
                },
            },
        },
    },
});