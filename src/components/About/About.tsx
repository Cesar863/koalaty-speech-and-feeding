import ItemSlot from '@/components/About/ItemSlot';
import PageHeader from '@/components/PageHeader/PageHeader';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
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

  return (
    <Box
      sx={{
        display: 'flex',
        pl: isMobile ? 0 : 3,
        justifyContent: isMobile ? 'center' : 'flex-start',
        alignItems: 'center',
        minHeight: '100%',
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={5}
        sx={{ p: 2 }}
      >
        <Grid size={{ md: 12 }} display="flex" justifyContent="center">
          <Card
            sx={{
              bgcolor: theme.palette.background.default,
              maxWidth: '350px',
              border: `16px solid ${theme.palette.background.default}`,
              borderRadius: '16px',
            }}
          >
            <CardMedia
              component="img"
              src="../../headshot.JPG"
              sx={{ width: '100%', borderRadius: '16px' }}
              alt="headshot"
            />
          </Card>
        </Grid>
        <Grid size={{ md: 12 }}>
          <PageHeader
            h1Props={{ fontSize: isMobile ? '2rem' : '3rem' }}
            textAlign={isMobile ? 'center' : 'start'}
            title="Charity Bobo"
            subtitle="Owner, Speech Language Pathologist M.A., CCC-SLP"
            description={description}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <ItemSlot icon={EmailIcon} text="janedoe@example.com" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <ItemSlot icon={LocationOnIcon} text="Lakeland, Florida" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <ItemSlot icon={PersonIcon} text="Speech Language Pathologist" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <ItemSlot
            icon={SchoolIcon}
            text="Master's degree, Speech-Language Pathology/Pathologist"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
