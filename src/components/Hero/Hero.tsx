import {
  Box,
  Button,
  Grid2 as Grid,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Link from 'next/link';
import PageHeader from '../PageHeader/PageHeader';

function Hero() {
  const bubbleText = 'Introducing Something Amazing';
  const title = 'Lorem ipsum odor amet';
  const subtitle =
    'Lorem ipsum odor amet, consectetuer adipiscing elit. Curabitur eget nulla tortor hac consequat sit pulvinar.';
  const primaryButtonText = 'Learn More';
  const secondaryButtonText = 'Contact Us';
  const primaryButtonHref = '/';
  const secondaryButtonHref = '/';

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
        backgroundImage: `url('../../hero-background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        spacing={5}
        sx={{ p: 5 }}
      >
        <Grid size={{ xs: 12, sm: 10, md: 8 }}>
          <PageHeader
            bubbleText={bubbleText}
            title={title}
            subtitle={subtitle}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 10, md: 8 }}>
          <Stack
            justifyContent="center"
            alignItems="center"
            flexDirection={isMobile ? 'column' : 'row'}
            gap={3}
            width="100%"
          >
            <Link href={primaryButtonHref}>
              <Button
                variant="contained"
                sx={{
                  width: '100%',
                  py: 2,
                  minWidth: 200,
                  px: 3,
                }}
              >
                {primaryButtonText}
              </Button>
            </Link>
            <Link href={secondaryButtonHref}>
              <Button
                variant="outlined"
                sx={{
                  width: '100%',
                  py: 2,
                  minWidth: 200,
                  px: 3,
                }}
              >
                {secondaryButtonText}
              </Button>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;
