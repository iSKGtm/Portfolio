import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2C2C2C', // --color-primary
    },
    secondary: {
      main: '#4B1E4D', // --color-secondary
    },
    error: {
      main: '#BE3455', // --color-accent usado como destaque de erro/alerta
    },
    background: {
      default: '#000000', // --color-bg-primary
      paper: '#202020',   // Base para o blur
    },
    text: {
      primary: '#ffffff', // --color-text-primary
      secondary: '#000000', // --color-text-secondary
    },
  },
  typography: {
    fontFamily: 'SF, Helvetica, Arial, sans-serif',
    h1: { fontFamily: 'Phonk, sans-serif' },
    h2: { fontFamily: 'Phonk, sans-serif' },
    h3: { fontFamily: 'Phonk, sans-serif' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          textTransform: 'none',
          color: '#ffffff',
          backgroundColor: '#20202040', 
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: 'inset 0 5px 10px -3px #ffffff30',
          transition: 'all 0.1s ease',

          '&:hover': {
            backgroundColor: 'rgba(75, 30, 77, 0.4)',
            color: '#ffffff',
          },
          '&:active': {
            scale: '0.950',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          border: '2px solid white',
          color: 'white',
          backgroundColor: '#20202040',
          backdropFilter: 'blur(10px)',
          '&:hover': {
            backgroundColor: '#BE3455',
            borderColor: '#BE3455',
          },
        },
      },
    },
  },
});