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
  const theme = useTheme();

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const linkItems = ['About', 'Contact', 'Services', 'Resources'];

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
      <AppBar position="fixed">
        <Toolbar disableGutters={isMobile} sx={{ minHeight: '56px' }}>
          <Grid container width="100%" direction="row" spacing={1}>
            {!isMobile && (
              <Grid size={{ md: 4 }}>
                <IconButton size="large" edge="start" color="inherit">
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
                  {linkItems.map((text) => (
                    <MenuItem sx={{ p: 0.75 }} key={text} disableGutters>
                      {text}
                    </MenuItem>
                  ))}
                </List>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
