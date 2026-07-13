import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';

function Contact() {
  return (
    <Box component="section" id="contact" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: 2, display: 'block', mb: 1 }}>
          Contact
        </Typography>
        <Typography variant="h3" sx={{ mb: 2, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
          Let's Work Together
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, maxWidth: 600 }}>
          Have a project in mind or want to discuss opportunities? I'd love to hear from you.
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
                  <Typography variant="body2" sx={{ color: 'text.primary' }}>Available for Remote Work</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <WorkIcon sx={{ color: 'primary.main', mt: 0.5 }} />
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1 }}>Status</Typography>
                  <Typography variant="body2" sx={{ color: '#27ca40' }}>Open to Opportunities</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                <IconButton href="#" sx={{ border: 1, borderColor: 'divider', '&:hover': { borderColor: 'primary.main' } }}>
                  <GitHubIcon sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton href="#" sx={{ border: 1, borderColor: 'divider', '&:hover': { borderColor: 'primary.main' } }}>
                  <LinkedInIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, border: 1, borderColor: 'divider', borderRadius: 3 }}>
              <Box component="form" onSubmit={(e: React.FormEvent) => e.preventDefault()} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                <TextField label="Name" placeholder="Your name" variant="outlined" fullWidth size="small" />
                <TextField label="Email" placeholder="your@email.com" variant="outlined" fullWidth size="small" type="email" />
                <TextField label="Message" placeholder="Tell me about your project..." variant="outlined" fullWidth multiline rows={5} />
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
