import {
  Box,
  Button,
  Grid2 as Grid,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ContactDialog } from '../AlertDialog/ContactDialog';
import PageHeader from '../PageHeader/PageHeader';

function Hero() {
  const [isOpen, setIsOpen] = React.useState(false);

  const title = 'Koalaty Speech and Feeding Therapy Services';
  const subtitle =
    'Providing “koalaty” and child centered speech and feeding therapy services to Lakeland and surrounding areas.';
  const primaryButtonText = 'Contact us';
  const primaryButtonHref = '/';

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const appBarHeight = isMobile ? 56 : 64;

  return (
    <Box
      id="heroLanding"
      sx={{
        width: '100%',
        minHeight: `calc(100vh - ${appBarHeight}px)`,
        backgroundImage: `url('../../hero-background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 0,
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{ px: { xs: 2, md: 6 } }}
      >
        <Grid size={{ xs: 12, md: 8 }}>
          <PageHeader title={title} subtitle={subtitle} />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Stack
            justifyContent="center"
            alignItems="center"
            flexDirection={isMobile ? 'column' : 'row'}
            gap={2}
            width="100%"
          >
            <Link href={primaryButtonHref} passHref>
              <Button
                variant="contained"
                sx={{
                  width: '100%',
                  minWidth: 150,
                }}
                onClick={() => setIsOpen(true)}
              >
                {primaryButtonText}
              </Button>
            </Link>
          </Stack>

          <Stack
            justifyContent="center"
            alignItems="center"
            mt={4}
            width="100%"
          >
            <Image
              src="https://cdn.koalatyspeechandfeeding.com/jay-logo.PNG"
              height={isMobile ? 200 : 400}
              width={isMobile ? 200 : 400}
              alt="Logo for Koalaty Speech and Feeding."
            />
          </Stack>
        </Grid>
      </Grid>

      <ContactDialog
        open={isOpen}
        isMobile={isMobile}
        onClose={() => setIsOpen(false)}
      />
    </Box>
  );
}

export default Hero;
