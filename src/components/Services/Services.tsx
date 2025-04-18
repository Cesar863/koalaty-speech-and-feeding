import ServiceCard from '@/components/Services/ServiceCard';
import {
  Box,
  Grid2 as Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const servicesData = [
    {
      title: 'Articulation Therapy',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl:
        'https://images.pexels.com/photos/265125/pexels-photo-265125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      altText: '',
    },
    {
      title: 'Language Therapy',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl:
        'https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      altText: '',
    },
    {
      title: 'Fluency Therapy',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      imageUrl:
        'https://images.pexels.com/photos/876467/pexels-photo-876467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      altText: '',
    },
    {
      title: 'Voice Therapy',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageUrl:
        'https://images.pexels.com/photos/7718713/pexels-photo-7718713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      altText: '',
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        pl: isMobile ? 0 : theme.spacing(3),
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingY: theme.spacing(8),
        minHeight: isMobile ? '100vh' : '75%',
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{
          textAlign: 'center',
          marginBottom: theme.spacing(4),
        }}
      >
        Services
      </Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={5}
        sx={{ p: 2, maxWidth: '90%' }}
      >
        {servicesData.map((service) => (
          <Grid key={service.title} size={{ xs: 12, md: 6, xl: 3 }}>
            <ServiceCard
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              altText={service.altText}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
export default About;
