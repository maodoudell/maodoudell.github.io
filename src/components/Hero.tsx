import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function Hero() {
  return (
    <Box component="section" id="home" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 500, mb: 1 }}>
              Hello, I'm
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, mb: 0.5 }}>
              Mao Doudell
            </Typography>
            <Typography variant="h4" sx={{ color: 'text.secondary', fontWeight: 400, mb: 3 }}>
              Full Stack Developer
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4, maxWidth: 500 }}>
              Specializing in robust full-stack architectures, high-performance
              distributed systems, and elegant user interfaces. I turn complex
              problems into scalable digital realities.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button variant="contained" size="large" href="#projects">
                View Projects
              </Button>
              <Button variant="outlined" size="large" href="#contact">
                Get In Touch →
              </Button>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                bgcolor: 'background.paper',
                border: 1,
                borderColor: 'divider',
                borderRadius: 3,
                overflow: 'hidden',
                maxWidth: 480,
                mx: 'auto',
              }}
            >
              <Box sx={{ display: 'flex', gap: 1, px: 2, py: 1.5, bgcolor: 'rgba(0,0,0,0.3)', alignItems: 'center' }}>
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ff5f56' }} />
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ffbd2e' }} />
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#27ca40' }} />
                <Typography variant="caption" sx={{ ml: 'auto', color: 'text.secondary', fontFamily: 'monospace' }}>
                  portfolio.ts
                </Typography>
              </Box>
              <Box sx={{ p: 2.5 }}>
                <Typography
                  component="pre"
                  sx={{ fontFamily: 'monospace', fontSize: 14, lineHeight: 1.7, color: 'text.primary', m: 0, whiteSpace: 'pre-wrap' }}
                >
{`const developer = {
  name: "Mao Doudell",
  role: "Full Stack Developer",
  skills: [
    "React", "TypeScript",
    "Node.js", "AWS"
  ],
  passion: "Building scalable apps",
  available: true
};`}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;
