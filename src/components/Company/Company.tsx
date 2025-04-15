import CompanyCard from '@/components/Company/CompanyCard';
import { Box, Grid2 as Grid, useMediaQuery, useTheme } from '@mui/material';

function Company() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        display: 'flex',
        pl: isMobile ? 0 : 3,
        justifyContent: 'center',
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
        <CompanyCard
          companyName="Koalaty Speech and Feeding Therapy Services"
          tagline="Slogan goes here"
          services={['Articulation', 'Language', 'Fluency', 'Voice']}
          logoSrc="/logo-icon.png"
          logoAlt="Designify Studio Logo"
        />
      </Grid>
    </Box>
  );
}

export default Company;
