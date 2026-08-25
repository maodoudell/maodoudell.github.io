import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

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
                background: 'linear-gradient(135deg, #f0f4ff, rgba(59, 130, 246, 0.1))',
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
              Flutter & Backend Developer
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
              I'm a Flutter and Backend Developer with over five years of experience building and maintaining cross-platform mobile applications and two years of experience developing RESTful APIs and backend services with Java Spring Boot.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
              I developed and maintain AIS-LMS, a learning management platform serving more than 5,000 active students, teachers, and parents. My work covers mobile development, microservices, video streaming, system integrations, messaging, testing, and production support.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
              I have published and maintained applications across the Apple App Store and Google Play Store, and I manage Linux hosting, Nginx, CI/CD pipelines, monitoring, and database backups.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              My experience also includes Firebase, PostgreSQL, real-time systems, performance testing with JMeter and Locust, and AI-assisted development workflows.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
