import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const metrics = [
  { value: '5+', label: 'Years Experience' },
  { value: '30+', label: 'Projects Completed' },
  { value: '10+', label: 'Technologies' },
];

function About() {
  return (
    <Box component="section" id="about" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Paper
              elevation={0}
              sx={{
                width: { xs: 240, md: 300 },
                height: { xs: 280, md: 360 },
                mx: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 4,
                border: 1,
                borderColor: 'divider',
                background: 'linear-gradient(135deg, #1f2028, rgba(59, 130, 246, 0.1))',
              }}
            >
              <Typography sx={{ fontSize: 80 }}>👨‍💻</Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: 2, mb: 1, display: 'block' }}>
              About Me
            </Typography>
            <Typography variant="h3" sx={{ mb: 3, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
              Crafting Digital Experiences with Precision
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
              With a strong foundation in software engineering, I bring ideas to life
              through clean, efficient code. I'm passionate about creating applications
              that not only work flawlessly but also provide exceptional user experiences.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4 }}>
              My approach combines technical expertise with creative problem-solving.
              Whether it's architecting a cloud-native solution or refining a pixel-perfect
              UI, I focus on delivering quality that stands the test of time.
            </Typography>
            <Box sx={{ display: 'flex', gap: { xs: 3, md: 5 }, flexWrap: 'wrap' }}>
              {metrics.map((m) => (
                <Box key={m.label}>
                  <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 600 }}>
                    {m.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {m.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
