import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const projects = [
  {
    title: 'AIS Learning Management System',
    description: 'A production learning platform serving more than 5,000 active students, teachers, and parents.',
    features: [
      'Student Learning Portal',
      'Teacher Dashboard',
      'Parent Monitoring',
      'Assignment Management',
      'Classroom Management',
      'Analytics Dashboard',
      'Microservices & Messaging',
      'Video Streaming',
    ],
    tags: ['Flutter', 'Spring Boot', 'PostgreSQL', 'Redis', 'MQTT'],
  },
  {
    title: 'SURSDEI Applications',
    description: 'A connected suite of Buyer, Merchant, and Driver applications for social commerce and food delivery.',
    features: ['Social Posts & Short Video', 'Product & Promotion Management', 'Order Processing', 'Real-Time Order & Driver Tracking'],
    tags: ['Flutter', 'Firebase', 'Real-Time Tracking'],
  },
  {
    title: 'Queue Management System',
    description: 'A queue platform covering ticket printing, public displays, service counters, and backend APIs.',
    features: ['Flutter Desktop Ticketing', 'Web Queue Display', 'Counter Application', 'RESTful APIs'],
    tags: ['Flutter', 'Web', 'Spring Boot'],
  },
  {
    title: 'Tamneak, ICE CREAM & SOKLY',
    description: 'Flutter applications spanning social media, seller discovery and booking, and e-commerce.',
    features: ['Social & Short-Video Features', 'Nearby Seller Booking', 'Electronics E-Commerce', 'Analytics & Push Notifications'],
    tags: ['Flutter', 'Firebase', 'Firestore', 'BigQuery'],
  },
];

function Projects() {
  return (
    <Box component="section" id="projects" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: 2, display: 'block', mb: 1 }}>
          Portfolio
        </Typography>
        <Typography variant="h3" sx={{ mb: 5, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
          Featured Projects
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid size={{ xs: 12, sm: 6 }} key={project.title}>
              <Card elevation={0} sx={{ height: '100%', border: 1, borderColor: 'divider', transition: 'border-color 0.3s, transform 0.2s', '&:hover': { borderColor: 'primary.main', transform: 'translateY(-4px)' } }}>
                <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <FolderIcon sx={{ color: 'primary.main', fontSize: 28 }} />
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1.5 }}>{project.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 2 }}>
                    {project.description}
                  </Typography>
                  {project.features.length > 0 && (
                    <Box sx={{ mb: 2, flexGrow: 1 }}>
                      <Typography variant="caption" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1, display: 'block', mb: 0.5 }}>
                        Features
                      </Typography>
                      <List dense disablePadding>
                        {project.features.map((feature) => (
                          <ListItem key={feature} disablePadding sx={{ py: 0.2 }}>
                            <ListItemIcon sx={{ minWidth: 20 }}>
                              <ArrowRightIcon sx={{ color: 'primary.main', fontSize: 16 }} />
                            </ListItemIcon>
                            <ListItemText primary={feature} slotProps={{ primary: { variant: 'body2', sx: { color: 'text.secondary', fontSize: 13 } } }} />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  )}
                  {project.tags.length > 0 && (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
                      {project.tags.map((tag) => (
                        <Chip key={tag} label={tag} size="small" sx={{ bgcolor: 'rgba(59,130,246,0.15)', color: 'primary.main', fontFamily: 'monospace', fontSize: 12 }} />
                      ))}
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
