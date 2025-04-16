import CompanyCard from '@/components/Company/CompanyCard';
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
        px: isMobile ? 0 : 3,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '75%',
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={isMobile ? 0 : 5}
        sx={{
          maxWidth: '1300px',
        }}
      >
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ textAlign: isMobile ? 'center' : 'left' }}
        >
          <Typography variant="h2" component="h2" gutterBottom>
            Koalaty Speech and Feeding
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Slogan goes here
          </Typography>
          <Typography variant="subtitle1" component="p">
            {loremIpsum}
          </Typography>
          <Grid container spacing={2} mt={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box display="flex" alignItems="center">
                <Typography variant="subtitle2">Established</Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                2021
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box display="flex" alignItems="center">
                <Typography variant="subtitle2">Team</Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                Creative Professionals
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box display="flex" alignItems="center">
                <Typography variant="subtitle2">Recognition</Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                Award-winning designs
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box display="flex" alignItems="center">
                <Typography variant="subtitle2">Focus</Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                User-centered approach
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <CompanyCard
            companyName="Koalaty Speech and Feeding"
            tagline="Slogan goes here"
            services={['Articulation', 'Language', 'Fluency', 'Voice']}
            logoSrc="/logo-icon.png"
            logoAlt="Koalaty Speech and Feeding logo"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Company;
