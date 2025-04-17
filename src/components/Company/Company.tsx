import CompanyCard from '@/components/Company/CompanyCard';
import PageHeader from '@/components/PageHeader/PageHeader';
import {
  Box,
  Grid2 as Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

function Company() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const loremIpsum =
    'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: isMobile ? '100vh' : '75%',
        padding: 3,
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={isMobile ? 3 : 5}
        sx={{
          maxWidth: 'xl',
          width: '100%',
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        <Grid
          size={{
            xs: 12,
            sm: 6,
            md: 4,
          }}
          display="flex"
          justifyContent="center"
          order={isMobile ? 0 : 1}
        >
          <CompanyCard
            companyName="Koalaty Speech and Feeding"
            tagline="Slogan goes here"
            services={['Articulation', 'Language', 'Fluency', 'Voice']}
            logoSrc="/logo-icon.png"
            logoAlt="Koalaty Speech and Feeding logo"
          />
        </Grid>
        <Grid
          size={{
            xs: 12,
            md: 8,
          }}
          sx={{ textAlign: isMobile ? 'center' : 'left' }}
          order={isMobile ? 1 : 0}
        >
          <PageHeader
            h1Props={{ fontSize: isMobile ? '2rem' : '3rem' }}
            textAlign="start"
            title="Koalaty Speech and Feeding"
            subtitle="Slogan goes here"
            description={loremIpsum}
          />
          <Grid container spacing={3} mt={3}>
            <Grid size={{ xs: 12, md: 6 }} mb={2}>
              <Box display="flex" alignItems="center">
                <Typography variant="subtitle2">Established</Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                2021
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} mb={2}>
              <Box display="flex" alignItems="center">
                <Typography variant="subtitle2">Team</Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                Creative Professionals
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} mb={2}>
              <Box display="flex" alignItems="center">
                <Typography variant="subtitle2">Recognition</Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                Award-winning designs
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} mb={2}>
              <Box display="flex" alignItems="center">
                <Typography variant="subtitle2">Focus</Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                User-centered approach
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Company;
