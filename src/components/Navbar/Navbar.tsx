import { ContactDialog } from '@/components/AlertDialog/ContactDialog';
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
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
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
  const [isContactOpen, setContactOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const linkItems = [
    { linkName: 'About', linkSection: '#about' },
    { linkName: 'Contact', isModal: true },
    { linkName: 'Services', linkSection: '#services' },
    // { linkName: 'Resources', linkSection: '#resources' },
  ];

  const MobileDrawerList = (
    <List>
      {linkItems.map((item) => (
        <ListItem key={item.linkName} disablePadding>
          <ListItemButton
            component="a"
            href={item.linkSection ?? '#'}
            sx={{ textAlign: 'right' }}
            onClick={(e) => {
              if (item.isModal) {
                e.preventDefault();
                setContactOpen(true);
              }
              toggleDrawer(false)();
            }}
          >
            <ListItemText
              slotProps={{
                primary: {
                  color: 'white',
                },
              }}
              primary={item.linkName}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar disableGutters={isMobile} sx={{ minHeight: '56px' }}>
          <Grid container width="100%" direction="row" spacing={1}>
            {!isMobile && (
              <Grid size={{ md: 4 }}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  href={'#heroLanding'}
                >
                  <Image
                    src={LogoImage}
                    height={42}
                    width={42}
                    alt="Logo for Koalaty Speech and Feeding."
                  />
                </IconButton>
              </Grid>
            )}

            <Grid size={{ xs: 11, md: 4 }} alignContent={'center'}>
              <Link href={'#heroLanding'} underline="none">
                <Typography
                  variant={isMobile ? 'inherit' : 'h6'}
                  textAlign={isMobile ? 'left' : 'center'}
                  color={theme.palette.background.default}
                  px={1.5}
                >
                  {`Koalaty Speech and Feeding ${
                    isMobile ? '' : 'Therapy Services'
                  }`}
                </Typography>
              </Link>
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
                    slotProps={{
                      paper: {
                        sx: {
                          backgroundColor: '#363636',
                        },
                      },
                    }}
                  >
                    <Box sx={{ width: 200 }} role="presentation">
                      <Stack spacing={1}>
                        <Container sx={{ textAlign: 'center', pt: 1.5 }}>
                          <Image
                            src={LogoImage}
                            height={42}
                            width={42}
                            alt="Logo for Koalaty Speech and Feeding."
                          />
                        </Container>

                        <Divider />
                        {MobileDrawerList}
                      </Stack>
                    </Box>
                  </Drawer>
                  <ContactDialog
                    open={isContactOpen}
                    isMobile={isMobile}
                    onClose={() => setContactOpen(false)}
                  />
                </>
              ) : (
                <List
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    width: '100%',
                    gap: '3px',
                  }}
                >
                  {linkItems.map((item) => (
                    <MenuItem
                      sx={{ p: 0.75 }}
                      key={item.linkName}
                      disableGutters
                      component="a"
                      href={item.linkSection ?? '#'}
                      onClick={(e) => {
                        if (item.isModal) {
                          e.preventDefault();
                          setContactOpen(true);
                        }
                      }}
                    >
                      {item.linkName}
                    </MenuItem>
                  ))}
                </List>
              )}
            </Grid>
          </Grid>
          <ContactDialog
            open={isContactOpen}
            isMobile={isMobile}
            onClose={() => setContactOpen(false)}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
