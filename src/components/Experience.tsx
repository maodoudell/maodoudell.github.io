import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';

const experiences = [
  { role: 'Senior Full Stack Developer', company: 'Tech Company', period: '2022 – Present', description: 'Leading development of microservices architecture serving 100K+ users. Implementing CI/CD pipelines and mentoring junior developers.', highlights: ['Microservices', 'Team Lead', 'AWS'] },
  { role: 'Full Stack Developer', company: 'Digital Agency', period: '2020 – 2022', description: 'Built responsive web applications for clients across various industries. Improved application performance by 40% through code optimization.', highlights: ['React', 'Node.js', 'Performance'] },
  { role: 'Frontend Developer', company: 'Startup Inc.', period: '2018 – 2020', description: 'Developed user interfaces for a SaaS platform. Collaborated with UX designers to implement pixel-perfect designs with accessibility in mind.', highlights: ['UI/UX', 'Accessibility', 'SaaS'] },
];

function Experience() {
  return (
    <Box component="section" id="experience" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'rgba(59,130,246,0.03)', borderTop: 1, borderBottom: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: 2, display: 'block', mb: 1 }}>
          Career
        </Typography>
        <Typography variant="h3" sx={{ mb: 5, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
          Work Experience
        </Typography>
        <Box sx={{ position: 'relative', pl: { xs: 3, md: 4 }, '&::before': { content: '""', position: 'absolute', left: { xs: '7px', md: '7px' }, top: 8, bottom: 8, width: 2, bgcolor: 'divider' } }}>
          {experiences.map((exp) => (
            <Box key={exp.role + exp.company} sx={{ position: 'relative', pb: 5, '&:last-child': { pb: 0 } }}>
              <Box sx={{ position: 'absolute', left: { xs: -24, md: -32 }, top: 8, width: 16, height: 16, borderRadius: '50%', bgcolor: 'primary.main', border: '3px solid', borderColor: 'background.default', boxShadow: '0 0 0 2px #3b82f6' }} />
              <Paper elevation={0} sx={{ p: 3, border: 1, borderColor: 'divider', borderRadius: 3, transition: 'border-color 0.3s', '&:hover': { borderColor: 'primary.main' } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, flexDirection: { xs: 'column', sm: 'row' }, gap: 1, mb: 1.5 }}>
                  <Box>
                    <Typography variant="h6" sx={{ fontSize: '1rem' }}>{exp.role}</Typography>
                    <Typography variant="body2" sx={{ color: 'primary.main' }}>{exp.company}</Typography>
                  </Box>
                  <Chip label={exp.period} size="small" sx={{ bgcolor: 'rgba(59,130,246,0.15)', color: 'text.secondary', fontFamily: 'monospace', fontSize: 12 }} />
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 2 }}>
                  {exp.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {exp.highlights.map((h) => (
                    <Chip key={h} label={h} size="small" variant="outlined" sx={{ borderColor: 'divider', color: 'text.secondary', fontSize: 12 }} />
                  ))}
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Experience;
