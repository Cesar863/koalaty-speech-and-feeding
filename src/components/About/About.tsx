import AboutSlot from '@/components/About/AboutSlot';
import PageHeader from '@/components/PageHeader/PageHeader';
import {
  Box,
  Card,
  CardMedia,
  Grid2 as Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material';

function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const description =
    'Charity is a certified speech language pathologist from the Florida department of health. She holds an undergraduate degree in Communication Sciences and Disorders from University of Florida and a Master’s degree in communication sciences and disorders from the University of Central Florida. She also has a Certificate of Clinical Competence (CCC) from the American Speech Language and Hearing Association (ASHA). Prior to starting Koalaty Speech and Feeding Therapy Services LLC, Charity gained experience from her time in a private practice setting, private school settings, and outpatient hospital setting. She always makes sure she puts the needs of her patients first and ensures she is always conducting therapy sessions using evidence based practice.';

  const aboutData = [
    {
      imageUrl: 'https://cdn.koalatyspeechandfeeding.com/florida-health.png',
      text: 'Speech Language Pathologist',
      altText: '',
    },
    {
      imageUrl: 'https://cdn.koalatyspeechandfeeding.com/sos.webp',
      text: 'SOS Trained Provider',
      altText: '',
    },
    {
      imageUrl: 'https://cdn.koalatyspeechandfeeding.com/asha-logo.png',
      text: 'ASHA Member',
      altText: '',
    },
    {
      imageUrl: 'https://cdn.koalatyspeechandfeeding.com/cpr.jpg',
      text: 'American Heart Association CPR and AED Training',
      altText: '',
    },
    {
      imageUrl: 'https://cdn.koalatyspeechandfeeding.com/simon-says.png',
      text: 'Simon Says: Myofunctional Therapy Trained',
      altText: '',
    },
    {
      imageUrl: 'https://cdn.koalatyspeechandfeeding.com/soffi.jpeg',
      text: 'Soffi Trained',
      altText: '',
    },
    {
      imageUrl: 'https://cdn.koalatyspeechandfeeding.com/piomi.png',
      text: 'PIOMI',
      altText: '',
    },
    {
      imageUrl: 'https://cdn.koalatyspeechandfeeding.com/vital-stim.jpg',
      text: 'Vital Stim Certified',
      altText: '',
    },
  ];
  return (
    <Box
      id="about"
      className="anchor-section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80%',
        padding: 2,
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="flex-start"
        spacing={isMobile ? 3 : 5}
        sx={{
          maxWidth: 'xl',
          width: '100%',
        }}
      >
        <Grid
          size={{ xs: 12, sm: 6, md: 4 }}
          display="flex"
          justifyContent="center"
        >
          <Card
            sx={{
              bgcolor: theme.palette.background.default,
              width: '100%',
              maxWidth: isMobile ? 'none' : '350px',
              border: `16px solid ${theme.palette.background.default}`,
              borderRadius: '16px',
            }}
          >
            <CardMedia
              component="img"
              src="../../headshot.JPG"
              sx={{
                height: isMobile ? '400px' : '100%',
                width: '100%',
                borderRadius: '16px',
                objectFit: 'cover',
              }}
              alt="headshot"
            />
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <PageHeader
            h1Props={{ fontSize: isMobile ? '2rem' : '3rem' }}
            textAlign="start"
            title="Charity Bobo"
            subtitle="Owner, Speech Language Pathologist M.A., CCC-SLP"
            description={description}
          />
          <Grid container spacing={3} mt={3}>
            {aboutData.map((data) => (
              <Grid key={data.text} size={{ xs: 12, md: 6 }} mb={2}>
                <AboutSlot
                  imageUrl={data.imageUrl}
                  text={data.text}
                  altText={data.altText}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
