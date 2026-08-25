import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';

function Contact() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();
    const subject = `Portfolio contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const composeUrl = new URL('https://mail.google.com/mail/');
    composeUrl.searchParams.set('view', 'cm');
    composeUrl.searchParams.set('fs', '1');
    composeUrl.searchParams.set('to', email);
    composeUrl.searchParams.set('su', subject);
    composeUrl.searchParams.set('body', body);

    window.location.assign(composeUrl.toString());
  };

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: 2, display: 'block', mb: 1 }}>
          Contact
        </Typography>
        <Typography variant="h3" sx={{ mb: 2, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
          Let's Build Something Amazing Together
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, maxWidth: 600 }}>
          Let's build something amazing together.
        </Typography>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <EmailIcon sx={{ color: 'primary.main', mt: 0.5 }} />
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1 }}>Email</Typography>
                  <Typography variant="body2" component="a" href="mailto:maodoudell@gmail.com" sx={{ display: 'block', color: 'text.primary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                    maodoudell@gmail.com
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <LocationOnIcon sx={{ color: 'primary.main', mt: 0.5 }} />
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1 }}>Location</Typography>
                  <Typography variant="body2" sx={{ color: 'text.primary' }}>Dang Kao, Phnom Penh, Cambodia</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <PhoneIcon sx={{ color: 'primary.main', mt: 0.5 }} />
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1 }}>Phone</Typography>
                  <Typography variant="body2" component="a" href="tel:+855962070072" sx={{ display: 'block', color: 'text.primary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>+855 96 2070072</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <LanguageIcon sx={{ color: 'primary.main', mt: 0.5 }} />
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1 }}>Website</Typography>
                  <Typography variant="body2" component="a" href="https://maodoudell.github.io" target="_blank" rel="noopener noreferrer" sx={{ display: 'block', color: 'text.primary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>maodoudell.github.io</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                <IconButton href="https://github.com/maodoudell" target="_blank" rel="noopener noreferrer" sx={{ border: 1, borderColor: 'divider', '&:hover': { borderColor: 'primary.main' } }} aria-label="GitHub">
                  <GitHubIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, border: 1, borderColor: 'divider', borderRadius: 3 }}>
              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                <TextField name="name" label="Name" placeholder="Your name" variant="outlined" fullWidth size="small" required />
                <TextField name="email" label="Email" placeholder="your@email.com" variant="outlined" fullWidth size="small" type="email" required />
                <TextField name="message" label="Message" placeholder="Tell me about your project..." variant="outlined" fullWidth multiline rows={5} required />
                <Button variant="contained" type="submit" sx={{ alignSelf: 'flex-start', px: 4 }}>
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
