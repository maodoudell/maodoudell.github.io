import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3b82f6',
      light: '#60a5fa',
      dark: '#2563eb',
    },
    background: {
      default: '#0a0a0f',
      paper: '#1f2028',
    },
    text: {
      primary: '#f3f4f6',
      secondary: '#9ca3af',
    },
    divider: '#2e303a',
  },
  typography: {
    fontFamily: "system-ui, 'Segoe UI', Roboto, sans-serif",
    h1: { fontWeight: 500, letterSpacing: '-2px' },
    h2: { fontWeight: 500, letterSpacing: '-0.5px' },
    h3: { fontWeight: 500 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', borderRadius: 8, fontWeight: 500 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { backgroundImage: 'none', borderRadius: 12 },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
  },
});

export default theme;
