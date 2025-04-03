import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Grid2 as Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import LogoImage from '../../assets/images/mainLogo.png';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const linkItems = ['About', 'Contact us', 'Services', 'Resources'];

  const MobileDrawerList = (
    <List>
      {linkItems.map((text) => (
        <ListItem key={text} disablePadding>
          <ListItemButton sx={{ textAlign: 'right' }}>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar disableGutters={isMobile}>
          <Grid container width="100%" direction="row" spacing={1}>
            {!isMobile && (
              <Grid size={{ md: 4 }}>
                <IconButton size="large" edge="start" color="inherit">
                  <Image
                    src={LogoImage}
                    height={56}
                    width={56}
                    alt="Logo for Koalaty Speech and Feeding."
                  />
                </IconButton>
              </Grid>
            )}

            <Grid size={{ xs: 11, md: 4 }} alignContent={'center'}>
              <Typography
                variant={isMobile ? 'inherit' : 'h6'}
                textAlign={isMobile ? 'left' : 'center'}
                color="white"
                px={2}
              >
                {`Koalaty Speech and Feeding ${
                  isMobile ? '' : 'Therapy Services'
                }`}
              </Typography>
            </Grid>

            <Grid
              size={{ xs: 1, md: 4 }}
              textAlign="right"
              alignItems="center"
              flexGrow={1}
              display="flex"
              justifyContent="flex-end"
            >
              {isMobile ? (
                <>
                  <Button
                    onClick={toggleDrawer(true)}
                    sx={{
                      background: 'transparent',
                      color: theme.palette.background.default,
                    }}
                  >
                    <MenuIcon sx={{ color: 'white' }} />
                  </Button>
                  <Drawer
                    anchor="right"
                    open={open}
                    onClose={toggleDrawer(false)}
                  >
                    <Box sx={{ width: 150 }} role="presentation">
                      <Stack spacing={1}>
                        <Container sx={{ textAlign: 'center', pt: 2 }}>
                          <Image
                            src={LogoImage}
                            height={56}
                            width={56}
                            alt="Logo for Koalaty Speech and Feeding."
                          />
                        </Container>

                        <Divider />
                        {MobileDrawerList}
                      </Stack>
                    </Box>
                  </Drawer>
                </>
              ) : (
                <Stack direction="row" width="100%" justifyContent="flex-end">
                  {linkItems.map((text) => (
                    <Typography
                      key={text}
                      padding={2}
                      color={theme.palette.background.default}
                    >
                      {text}
                    </Typography>
                  ))}
                </Stack>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
