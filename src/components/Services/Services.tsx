import ServiceCard from '@/components/Services/ServiceCard';
import {
  Box,
  Grid2 as Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

function Services() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const servicesData = [
    {
      title: 'AAC',
      description: (
        <ul>
          <li>
            <Typography variant="body2" color="text.secondary">
              {
                'Conducting trials with AAC devices to determine which one best fits your child’s needs.'
              }
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="text.secondary">
              {
                'Working closely with an AAC representative to order your child’s device.'
              }
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="text.secondary">
              {
                'Conducting Treatment with the device to assist with carryover in the home and surrounding environments.'
              }
            </Typography>
          </li>
        </ul>
      ),
      imageUrl: 'https://cdn.koalatyspeechandfeeding.com/aac.jpg',
      altText: '',
    },
    {
      title: 'Feeding Therapy',
      description: (
        <ul>
          <li>
            <Typography variant="body2" color="text.secondary">
              {
                'Working with picky eaters to assist with broadening their repertoire of foods.'
              }
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="text.secondary">
              {
                'Building oral motor skills to assist your child with consuming unfamiliar or difficult foods.'
              }
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="text.secondary">
              {
                'Assistance in infant feeding including bottle feeding and introduction of those first foods.'
              }
            </Typography>
          </li>
        </ul>
      ),
      imageUrl: 'https://cdn.koalatyspeechandfeeding.com/feeding.jpg',
      altText: '',
    },
    {
      title: 'Articulation Therapy',
      description: (
        <ul>
          <li>
            <Typography variant="body2" color="text.secondary">
              {
                'Conducting formal evaluations to determine what speech sound errors your child is experiencing.'
              }
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="text.secondary">
              {
                'Working closely with the family in speech sessions to ensure functional targets are presented in each session.'
              }
            </Typography>
          </li>
        </ul>
      ),
      imageUrl: 'https://cdn.koalatyspeechandfeeding.com/articulation.png',
      altText: '',
    },
    {
      title: 'Fluency/Stuttering',
      description: (
        <ul>
          <li>
            <Typography variant="body2" color="text.secondary">
              {
                'Conducting formal evaluations to determine the presence of a fluency disorder.'
              }
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="text.secondary">
              {
                "Working closely with families to ensure that fluency strategies are generalized into the child's surrounding environment (School, Home, Community)."
              }
            </Typography>
          </li>
        </ul>
      ),
      imageUrl: 'https://cdn.koalatyspeechandfeeding.com/fluency.png',
      altText: '',
    },
    {
      title: 'Language Therapy',
      description: (
        <ul>
          <li>
            <Typography variant="body2" color="text.secondary">
              {
                "Conducting formal evaluations to determine your child's strengths and weaknesses in academic and social language contexts."
              }
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="text.secondary">
              {
                'Working closely with families to ensure language strategies are carried out in the Home, School, and Social environments.'
              }
            </Typography>
          </li>
        </ul>
      ),
      imageUrl: 'https://cdn.koalatyspeechandfeeding.com/language.jpg',
      altText: '',
    },
    {
      title: 'In-person visits at home, school or daycare',
      description: (
        <ul>
          <li>
            <Typography variant="body2" color="text.secondary">
              {'VPK SIS Provider'}
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="text.secondary">
              {'Step Up for Students approved provider'}
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="text.secondary">
              {'Private Pay'}
            </Typography>
          </li>
        </ul>
      ),
      imageUrl: 'https://cdn.koalatyspeechandfeeding.com/inperson.jpg',
      altText: '',
    },
    {
      title: 'Speech, Language and Feeding Screenings',
      description: (
        <ul>
          <li>
            <Typography variant="body2" color="text.secondary">
              {
                'Contact us today to schedule an in person or over the phone screening to determine if your child needs a formal evaluation.'
              }
            </Typography>
          </li>
        </ul>
      ),
      imageUrl: 'https://cdn.koalatyspeechandfeeding.com/screenings.jpg',
      altText: '',
    },
  ];

  return (
    <Box
      id="services"
      className="anchor-section"
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
        variant="h2"
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
        sx={{ p: 2, maxWidth: isMobile ? '90%' : '70%' }}
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
export default Services;
