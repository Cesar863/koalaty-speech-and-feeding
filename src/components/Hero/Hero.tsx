import {
  Box,
  Button,
  Grid2 as Grid,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { ContactDialog } from '../AlertDialog/ContactDialog';
import PageHeader from '../PageHeader/PageHeader';

function Hero() {
  const [isOpen, setIsOpen] = React.useState(false);

  const bubbleText = 'Introducing Something Amazing';
  const title = 'Lorem ipsum odor amet';
  const subtitle =
    'Lorem ipsum odor amet, consectetuer adipiscing elit. Curabitur eget nulla tortor hac consequat sit pulvinar.';
  const primaryButtonText = 'Learn More';
  const secondaryButtonText = 'Contact Us';
  const primaryButtonHref = '/';
  const secondaryButtonHref = '/';

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
        spacing={4}
      >
        <Grid size={{ xs: 12, md: 8 }}>
          <PageHeader
            bubbleText={bubbleText}
            title={title}
            subtitle={subtitle}
          />
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
              >
                {primaryButtonText}
              </Button>
            </Link>
            <Link href={secondaryButtonHref}>
              <Button
                variant="outlined"
                sx={{
                  width: '100%',
                  minWidth: 150,
                }}
                onClick={() => setIsOpen(true)}
              >
                {secondaryButtonText}
              </Button>
            </Link>
          </Stack>
        </Grid>
      </Grid>
      {isOpen && (
        <ContactDialog
          open={isOpen}
          isMobile={isMobile}
          onClose={() => setIsOpen(false)}
        />
      )}
    </Box>
  );
}

export default Hero;
