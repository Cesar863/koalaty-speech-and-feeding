import PageHeader from '@/components/PageHeader/PageHeader';
import { Box } from '@mui/material';

function About() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
      }}
    >
      <PageHeader title="About" subtitle="Lorem Ipsum" />
    </Box>
  );
}

export default About;
