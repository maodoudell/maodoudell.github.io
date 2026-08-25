import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const skillCategories = [
  {
    title: 'Mobile Development',
    icon: '📱',
    skills: ['Flutter', 'Dart', 'React', 'TypeScript'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Java', 'Spring Boot', 'Python', 'Laravel'],
  },
  {
    title: 'Monitoring & Security',
    icon: '🛡️',
    skills: ['Grafana', 'Fail2ban', 'API Gateway'],
  },
  {
    title: 'Database',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MySQL', 'MariaDB', 'Firestore', 'Redis'],
  },
  {
    title: 'Infrastructure',
    icon: '☁️',
    skills: ['Linux', 'Nginx', 'CI/CD', 'Deployment', 'Monitoring', 'Database Backup'],
  },
  {
    title: 'Messaging',
    icon: '📡',
    skills: ['Kafka', 'Debezium', 'Firebase Cloud Messaging', 'ActiveMQ', 'MQTT', 'WebSocket'],
  },
  {
    title: 'Testing & AI',
    icon: '🧪',
    skills: ['Unit Testing', 'JMeter', 'Locust', 'Load Testing', 'Stress Testing', 'Codex', 'Antigravity', 'Kiro', 'LLM Integration'],
  },
];

function Skills() {
  return (
    <Box component="section" id="skills" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'rgba(59,130,246,0.03)', borderTop: 1, borderBottom: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: 2, display: 'block', mb: 1 }}>
          Skills & Technologies
        </Typography>
        <Typography variant="h3" sx={{ mb: 5, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
          My Technical Toolkit
        </Typography>
        <Grid container spacing={3}>
          {skillCategories.map((category) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={category.title}>
              <Card elevation={0} sx={{ height: '100%', border: 1, borderColor: 'divider', transition: 'border-color 0.3s, transform 0.2s', '&:hover': { borderColor: 'primary.main', transform: 'translateY(-4px)' } }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography sx={{ fontSize: 32, mb: 1 }}>{category.icon}</Typography>
                  <Typography variant="h6" sx={{ mb: 1 }}>{category.title}</Typography>
                  <List dense disablePadding>
                    {category.skills.map((skill) => (
                      <ListItem key={skill} disablePadding sx={{ py: 0.3 }}>
                        <ListItemIcon sx={{ minWidth: 24 }}>
                          <ArrowRightIcon sx={{ color: 'primary.main', fontSize: 18 }} />
                        </ListItemIcon>
                        <ListItemText primary={skill} slotProps={{ primary: { variant: 'body2', sx: { color: 'text.secondary' } } }} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Skills;
