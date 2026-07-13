import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import FolderIcon from '@mui/icons-material/Folder';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const projects = [
  { title: 'E-Commerce Platform', description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.', tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'], link: '#' },
  { title: 'Task Management App', description: 'A collaborative project management tool with real-time updates, drag-and-drop boards, and team notifications.', tags: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'], link: '#' },
  { title: 'Analytics Dashboard', description: 'An interactive data visualization dashboard with custom charts, export functionality, and automated reports.', tags: ['React', 'D3.js', 'Python', 'AWS'], link: '#' },
  { title: 'Social Media API', description: 'A scalable REST API powering a social platform with authentication, media uploads, and feed algorithms.', tags: ['Node.js', 'Express', 'Redis', 'Docker'], link: '#' },
];

function Projects() {
  return (
    <Box component="section" id="projects" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: 2, display: 'block', mb: 1 }}>
          Portfolio
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 5 }}>
          <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
            Featured Projects
          </Typography>
          <Link href="#" underline="none" sx={{ color: 'primary.main', display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 0.5, '&:hover': { gap: 1 }, transition: 'gap 0.3s' }}>
            View All →
          </Link>
        </Box>
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid size={{ xs: 12, sm: 6 }} key={project.title}>
              <Card elevation={0} sx={{ height: '100%', border: 1, borderColor: 'divider', transition: 'border-color 0.3s, transform 0.2s', '&:hover': { borderColor: 'primary.main', transform: 'translateY(-4px)' } }}>
                <CardActionArea href={project.link} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                  <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2.5 }}>
                      <FolderIcon sx={{ color: 'primary.main', fontSize: 28 }} />
                      <OpenInNewIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1.5 }}>{project.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 2.5, flexGrow: 1 }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.tags.map((tag) => (
                        <Chip key={tag} label={tag} size="small" sx={{ bgcolor: 'rgba(59,130,246,0.15)', color: 'primary.main', fontFamily: 'monospace', fontSize: 12 }} />
                      ))}
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
