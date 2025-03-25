import PageHeader from '@/components/PageHeader/PageHeader';
import { Box, useMediaQuery, useTheme } from '@mui/material';

function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
      <PageHeader
        h1Props={{ fontSize: '3rem' }}
        textAlign={isMobile ? 'center' : 'start'}
        title="Charity Bobo"
        subtitle="Speech Language Pathologist"
        description="Lorem ipsum odor amet, consectetuer adipiscing elit. Curabitur eget nulla tortor hac consequat sit pulvinar."
      />
    </Box>
  );
}

export default About;
