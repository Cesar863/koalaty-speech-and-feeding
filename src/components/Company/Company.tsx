import CardSlot from '@/components/Company/CardSlot';
import CompanyCard from '@/components/Company/CompanyCard';
import PageHeader from '@/components/PageHeader/PageHeader';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import { Box, Grid2 as Grid, useMediaQuery, useTheme } from '@mui/material';

function Company() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const description =
    'Koalaty speech and feeding therapy services provides speech, language and feeding services tailored to your family and child’s needs. We focus on child led interactions through play or daily routine interactions to best assist your child to communicate or feel comfortable trying new foods. We also make it a priority that the family also feels comfortable and guided through therapy. We can provide services in the community or in home.';
  const companyData = [
    {
      icon: BusinessCenterIcon,
      primaryText: 'Established',
      secondaryText: '2024',
    },
    {
      icon: GroupsIcon,
      primaryText: 'Team',
      secondaryText: 'Sample text',
    },
    {
      icon: EmojiEventsIcon,
      primaryText: 'Accolades',
      secondaryText: 'Sample text',
    },
    {
      icon: ContentPasteIcon,
      primaryText: 'Focus',
      secondaryText: 'Sample text',
    },
  ];

  return (
    <Box
      id="company"
      className="anchor-section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80%',
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
            description={description}
          />
          <Grid container spacing={3} mt={3}>
            {companyData.map((data) => (
              <Grid key={data.primaryText} size={{ xs: 12, md: 6 }} mb={2}>
                <CardSlot
                  icon={data.icon}
                  primaryText={data.primaryText}
                  secondaryText={data.secondaryText}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Company;
