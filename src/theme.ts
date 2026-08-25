import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3b82f6',
      light: '#60a5fa',
      dark: '#2563eb',
    },
    background: {
      default: '#f5f7ff',
      paper: '#ffffff',
    },
    text: {
      primary: '#111827',
      secondary: '#6b7280',
    },
    divider: '#e5e7eb',
  },
  typography: {
    fontFamily: "'Inter', system-ui, 'Segoe UI', Roboto, sans-serif",
    h1: { fontWeight: 700, letterSpacing: '-2px' },
    h2: { fontWeight: 700, letterSpacing: '-0.5px' },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
    '0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -1px rgba(0,0,0,0.04)',
    '0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -2px rgba(0,0,0,0.04)',
    '0 20px 25px -5px rgba(0,0,0,0.08), 0 10px 10px -5px rgba(0,0,0,0.03)',
    '0 25px 50px -12px rgba(0,0,0,0.12)',
    '0 25px 50px -12px rgba(0,0,0,0.12)',
    '0 25px 50px -12px rgba(0,0,0,0.12)',
    '0 25px 50px -12px rgba(0,0,0,0.12)',
    '0 25px 50px -12px rgba(0,0,0,0.12)',
    '0 25px 50px -12px rgba(0,0,0,0.12)',
    '0 25px 50px -12px rgba(0,0,0,0.12)',
    '0 25px 50px -12px rgba(0,0,0,0.12)',
    '0 25px 50px -12px rgba(0,0,0,0.12)',
    '0 25px 50px -12px rgba(0,0,0,0.12)',
    '0 25px 50px -12px rgba(0,0,0,0.12)',
    '0 25px 50px -12px rgba(0,0,0,0.12)',
    '0 25px 50px -12px rgba(0,0,0,0.12)',
    '0 25px 50px -12px rgba(0,0,0,0.12)',
    '0 25px 50px -12px rgba(0,0,0,0.12)',
    '0 25px 50px -12px rgba(0,0,0,0.12)',
    '0 25px 50px -12px rgba(0,0,0,0.12)',
    '0 25px 50px -12px rgba(0,0,0,0.12)',
    '0 25px 50px -12px rgba(0,0,0,0.12)',
    '0 25px 50px -12px rgba(0,0,0,0.12)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 10,
          fontWeight: 600,
          letterSpacing: '0.01em',
        },
        contained: {
          boxShadow: '0 2px 8px rgba(59,130,246,0.35)',
          '&:hover': {
            boxShadow: '0 4px 16px rgba(59,130,246,0.45)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 16,
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
        elevation1: { boxShadow: '0 2px 12px rgba(0,0,0,0.06)' },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 500 },
      },
    },
  },
});

export default theme;
