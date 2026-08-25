import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const experience = [
  { company: 'Mengly J. Quach Education PLC', role: 'Flutter Developer', location: 'Phnom Penh, Cambodia', period: 'Jan 2024 – Present', projects: [
    { name: 'AIS-LMS (Learning Management System)', details: ['Developed the mobile application and RESTful APIs, microservices, video streaming, system integrations, and messaging services.', 'Maintain production systems by delivering features, resolving issues, improving performance, and supporting users.', 'Collaborate with external vendors on integrations, technical requirements, implementation progress, and delivery.', 'Manage Linux hosting, Nginx, CI/CD pipelines, system monitoring, and database backups.', 'Conduct unit, stress, and load testing with Locust and JMeter to improve reliability, performance, and scalability.', 'Use AI-assisted tools for UI implementation, code review, testing, business logic, and code-quality and security analysis.'] },
    { name: 'Queue Management System', details: ['Developed a Flutter desktop application for printing queue tickets.', 'Developed a web application for queue displays and counters.', 'Developed RESTful APIs using Java Spring Boot.'] },
    { name: 'E-Wallet (POS)', details: ['Developed a mobile application for POS terminals.'] },
  ] },
  { company: 'Rizki Digital Connection & Trading', role: 'Flutter Developer', location: 'Phnom Penh, Cambodia', period: 'Jan 2022 – Nov 2023', projects: [
    { name: 'SURSDEI Buyer', details: ['Developed social and food-delivery features including posts, comments, reactions, sharing, short-form video, product browsing, ordering, and real-time order tracking.'] },
    { name: 'SURSDEI Merchant', details: ['Developed product, promotion, category, option, and variant management, order processing, and real-time driver tracking.'] },
    { name: 'SURSDEI Driver', details: ['Developed real-time driving location tracking and order acceptance and rejection workflows.'] },
    { name: 'App Store Operations', details: ['Managed build configuration, testing, submission, deployment, and maintenance across the Apple App Store and Google Play Store.'] },
  ] },
  { company: 'Kravanh Eco', role: 'Flutter Developer', location: 'Phnom Penh, Cambodia', period: 'Jun 2020 – Dec 2021', projects: [
    { name: 'ICE CREAM', details: ['Developed a Flutter and Firebase mobile application that enables customers to find and book nearby ice cream sellers.'] },
    { name: 'SOKLY', details: ['Developed an e-commerce application for browsing and purchasing electronic products and accessories.'] },
    { name: 'Tamneak', details: ['Developed responsive interfaces, Firestore queries, and social features including posts, sharing, reactions, comments, and short-form video.', 'Implemented Firebase Cloud Functions push notifications and integrated Google Analytics and BigQuery for behavior analysis and reporting.'] },
  ] },
];

function Experience() {
  return (
    <Box component="section" id="experience" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'rgba(59,130,246,0.03)', borderTop: 1, borderBottom: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: 2, display: 'block', mb: 1 }}>Career</Typography>
        <Typography variant="h3" sx={{ mb: 5, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>Work Experience</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {experience.map((job) => (
            <Paper key={job.company} elevation={0} sx={{ p: { xs: 2.5, md: 3.5 }, border: 1, borderColor: 'divider', borderRadius: 3, '&:hover': { borderColor: 'primary.main' } }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', sm: 'row' }, gap: 1, mb: 2 }}>
                <Box><Typography variant="h6">{job.role}</Typography><Typography variant="body2" sx={{ color: 'primary.main' }}>{job.company}</Typography><Typography variant="caption" sx={{ color: 'text.secondary' }}>{job.location}</Typography></Box>
                <Chip label={job.period} size="small" sx={{ alignSelf: 'flex-start', bgcolor: 'rgba(59,130,246,0.15)', fontFamily: 'monospace' }} />
              </Box>
              {job.projects.map((project) => (
                <Box key={project.name} sx={{ mb: 2, '&:last-child': { mb: 0 } }}>
                  <Typography variant="subtitle2">{project.name}</Typography>
                  <List dense disablePadding>{project.details.map((detail) => <ListItem key={detail} disablePadding sx={{ py: 0.25, alignItems: 'flex-start' }}><ListItemIcon sx={{ minWidth: 24, mt: 0.2 }}><ArrowRightIcon sx={{ color: 'primary.main', fontSize: 18 }} /></ListItemIcon><ListItemText primary={detail} slotProps={{ primary: { variant: 'body2', sx: { color: 'text.secondary', lineHeight: 1.6 } } }} /></ListItem>)}</List>
                </Box>
              ))}
            </Paper>
          ))}
        </Box>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid size={{ xs: 12, md: 4 }}><Paper elevation={0} sx={{ p: 3, height: '100%', border: 1, borderColor: 'divider', borderRadius: 3 }}><Typography variant="h6" sx={{ mb: 1 }}>Education</Typography><Typography variant="subtitle2">Bachelor’s Degree</Typography><Typography variant="body2" sx={{ color: 'text.secondary' }}>CADT (Cambodia Academy of Digital Technology)</Typography></Paper></Grid>
          <Grid size={{ xs: 12, md: 4 }}><Paper elevation={0} sx={{ p: 3, height: '100%', border: 1, borderColor: 'divider', borderRadius: 3 }}><Typography variant="h6" sx={{ mb: 1 }}>Languages</Typography><Typography variant="body2">Khmer — Native</Typography><Typography variant="body2">English — Intermediate</Typography></Paper></Grid>
          <Grid size={{ xs: 12, md: 4 }}><Paper elevation={0} sx={{ p: 3, height: '100%', border: 1, borderColor: 'divider', borderRadius: 3 }}><Typography variant="h6" sx={{ mb: 1 }}>References</Typography><Typography variant="subtitle2">Samieng Taing</Typography><Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>IT Director at MJQE · Telegram: @Sameing</Typography><Typography variant="subtitle2">Engleangs Sam</Typography><Typography variant="body2" sx={{ color: 'text.secondary' }}>Senior Digital Business Manager at MJQE<br />+855 98 567 346 · engleangs@gmail.com</Typography></Paper></Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Experience;
