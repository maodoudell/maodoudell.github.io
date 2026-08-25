import { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import theme from './theme';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 20 });

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Subtle gradient background for the whole page */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(160deg, #f0f4ff 0%, #fafafa 50%, #f5f3ff 100%)',
        }}
      >
        {/* Navbar */}
        <AppBar
          position="sticky"
          elevation={scrolled ? 2 : 0}
          sx={{
            bgcolor: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.75)',
            backdropFilter: 'blur(16px)',
            borderBottom: scrolled ? 0 : 1,
            borderColor: 'divider',
            boxShadow: scrolled
              ? '0 4px 20px rgba(0,0,0,0.08)'
              : 'none',
            color: 'text.primary',
            transition: 'all 0.3s ease',
          }}
        >
          <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', px: { xs: 2, md: 3 } }}>
            {/* Logo / Name */}
            <Box sx={{ flexGrow: { xs: 1, md: 0 }, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 34,
                  height: 34,
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(59,130,246,0.4)',
                }}
              >
                <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: 14, lineHeight: 1 }}>M</Typography>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: '-0.3px' }}>
                Mao Doudell
              </Typography>
            </Box>

            {/* Desktop nav links */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 0.5, mx: 'auto' }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    href={item.href}
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 500,
                      px: 1.5,
                      borderRadius: 2,
                      '&:hover': {
                        color: 'primary.main',
                        bgcolor: 'rgba(59,130,246,0.06)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* CTA button */}
            {!isMobile && (
              <Button
                variant="contained"
                href="#contact"
                size="small"
                sx={{
                  background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                  px: 2.5,
                  borderRadius: 3,
                }}
              >
                Hire Me
              </Button>
            )}

            {isMobile && (
              <IconButton edge="end" onClick={handleDrawerToggle} sx={{ color: 'text.primary' }} aria-label="open menu">
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { md: 'none' },
            '& .MuiDrawer-paper': {
              bgcolor: 'background.paper',
              borderLeft: '1px solid',
              borderColor: 'divider',
              width: 280,
              boxShadow: '-8px 0 32px rgba(0,0,0,0.1)',
            },
          }}
        >
          <Box sx={{ pt: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 3, mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>Menu</Typography>
              <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.primary' }}>
                <CloseIcon />
              </IconButton>
            </Box>
            <List sx={{ px: 1 }}>
              {navItems.map((item) => (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton
                    component="a"
                    href={item.href}
                    onClick={handleDrawerToggle}
                    sx={{
                      px: 2,
                      py: 1.2,
                      borderRadius: 2,
                      mx: 1,
                      '&:hover': { bgcolor: 'rgba(59,130,246,0.07)', color: 'primary.main' },
                    }}
                  >
                    <ListItemText primary={item.label} slotProps={{ primary: { sx: { fontWeight: 500 } } }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Box sx={{ px: 3, mt: 3 }}>
              <Button
                variant="contained"
                fullWidth
                href="#contact"
                onClick={handleDrawerToggle}
                sx={{
                  background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                  py: 1.2,
                  borderRadius: 3,
                }}
              >
                Hire Me
              </Button>
            </Box>
          </Box>
        </Drawer>

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
