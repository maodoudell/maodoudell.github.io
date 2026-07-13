import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

function Footer() {
  return (
    <Box component="footer" sx={{ mt: 'auto', borderTop: 1, borderColor: 'divider', pt: 6, pb: 4, px: 2 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, flexDirection: { xs: 'column', sm: 'row' }, gap: 3, mb: 4 }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>Mao Doudell</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
              Building digital experiences with passion and precision.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {navLinks.map((item) => (
              <Link key={item.label} href={item.href} underline="none" sx={{ color: 'text.secondary', fontSize: 14, '&:hover': { color: 'primary.main' } }}>
                {item.label}
              </Link>
            ))}
          </Box>
        </Box>
        <Divider sx={{ mb: 3 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' }, gap: 1 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © {new Date().getFullYear()} Mao Doudell. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary', opacity: 0.7 }}>
            Designed & Built with React + TypeScript
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
