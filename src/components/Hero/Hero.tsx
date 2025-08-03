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
    'Providing “koalaty” and child centered speech and feeding therapy services to Lakeland and\n' +
    'surrounding areas.';
  const primaryButtonText = 'Contact us';
  const primaryButtonHref = '/';

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="heroLanding"
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
        spacing={4}
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
            <Link href={primaryButtonHref}>
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
            flexDirection={isMobile ? 'column' : 'row'}
            gap={2}
            width="100%"
            marginTop={2}
          >
            <Image
              src={'https://cdn.koalatyspeechandfeeding.com/jay-logo.PNG'}
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
