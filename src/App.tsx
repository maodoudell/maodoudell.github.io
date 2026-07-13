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

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <AppBar
          position="sticky"
          sx={{
            bgcolor: 'rgba(10, 10, 15, 0.9)',
            backdropFilter: 'blur(10px)',
            borderBottom: 1,
            borderColor: 'divider',
            boxShadow: 'none',
          }}
        >
          <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', px: { xs: 2, md: 3 } }}>
            <Typography variant="h6" sx={{ fontWeight: 600, flexGrow: { xs: 1, md: 0 } }}>
              Mao Doudell
            </Typography>
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 3, mx: 'auto' }}>
                {navItems.map((item) => (
                  <Button key={item.label} href={item.href} sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}
            {!isMobile && (
              <Button variant="contained" href="#contact" size="small">
                Contact Me
              </Button>
            )}
            {isMobile && (
              <IconButton edge="end" onClick={handleDrawerToggle} sx={{ color: 'text.primary' }} aria-label="open menu">
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>

        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ display: { md: 'none' }, '& .MuiDrawer-paper': { bgcolor: 'background.default', borderLeft: 1, borderColor: 'divider', width: 280 } }}
        >
          <Box sx={{ pt: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, mb: 1 }}>
              <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.primary' }}>
                <CloseIcon />
              </IconButton>
            </Box>
            <List>
              {navItems.map((item) => (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton component="a" href={item.href} onClick={handleDrawerToggle} sx={{ px: 3, py: 1.5 }}>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Box sx={{ px: 3, mt: 2 }}>
              <Button variant="contained" fullWidth href="#contact" onClick={handleDrawerToggle}>
                Contact Me
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
