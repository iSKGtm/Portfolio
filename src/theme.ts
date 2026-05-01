import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#db1168', // --color-primary
    },
    secondary: {
      main: '#db1168', // --color-secondary
    },
    error: {
      main: '#BE3455', // --color-accent usado como destaque de erro/alerta
    },
    background: {
      default: '#ffffff', // --color-bg-primary
      paper: '#202020',   // Base para o blur
    },
    text: {
      primary: '#000000', // --color-text-primary
      secondary: '#000000', // --color-text-secondary
    },
  },
  typography: {
    fontFamily: 'Inter, Helvetica, Arial, sans-serif',
    h1: { fontFamily: 'Phonk, sans-serif' },
    h2: { fontFamily: 'Phonk, sans-serif' },
    h3: { fontFamily: 'Phonk, sans-serif' },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary,
          textDecoration: 'none',

          '&:hover': {
            color: theme.palette.text.primary,
          },
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          textTransform: 'none',
          fontWeight: 500,
          transition: 'all 0.15s ease',
        },

        contained: ({ theme }) => ({
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.primary.main,
          boxShadow: 'none',

          '&:hover': {
            backgroundColor: '#1f1f1f',
            boxShadow: 'none',
          },

          '&:active': {
            transform: 'scale(0.97)',
          },
        }),

        outlined: ({ theme }) => ({
          borderRadius: '100px',
          border: `1px solid ${theme.palette.primary.main}`,
          color: theme.palette.primary.main,
          backgroundColor: 'transparent',

          '&:hover': {
            backgroundColor: 'rgba(44,44,44,0.05)',
            borderColor: theme.palette.primary.main,
          },
        }),

        text: ({ theme }) => ({
          color: theme.palette.text.primary,

          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.04)',
          },
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: `2px solid ${theme.palette.primary.main}`,
          color: theme.palette.primary.main,
          backgroundColor: 'rgba(32,32,32,0.1)',
          backdropFilter: 'blur(10px)',

          '&:hover': {
            backgroundColor: theme.palette.error.main,
            borderColor: theme.palette.error.main,
            color: theme.palette.text.primary,
          },
        }),
      },
    },
  },
});