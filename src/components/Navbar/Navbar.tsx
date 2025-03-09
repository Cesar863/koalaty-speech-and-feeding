import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  Grid2,
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

function Navbar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const linkItems = ['Inbox', 'Starred', 'Send email', 'Drafts'];

  const MobileDrawerList = (
    <List>
      {linkItems.map((text) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid2
            container
            width="100%"
            direction="row"
            textAlign={isMobile ? 'right' : 'left'}
            spacing={1}
          >
            <Grid2 size={{ xs: 7, md: 4 }}>
              <IconButton size="large" edge="start" color="inherit">
                <Image
                  src={LogoImage}
                  height={isMobile ? 40 : 56}
                  width={isMobile ? 40 : 56}
                  alt="Logo for Koalaty Speech and Feeding."
                />
              </IconButton>
            </Grid2>
            {!isMobile && (
              <Grid2 size={4} alignContent="center">
                <Typography
                  variant="h6"
                  textAlign="center"
                  color="white"
                  px={2}
                >
                  Koalaty Speech and Feeding Therapy Services
                </Typography>
              </Grid2>
            )}
            <Grid2
              size={{ xs: 5, md: 4 }}
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
                    sx={{ background: 'transparent', color: 'white' }}
                  >
                    <MenuIcon sx={{ color: 'white' }} />
                  </Button>
                  <Drawer
                    anchor="right"
                    open={open}
                    onClose={toggleDrawer(false)}
                  >
                    <Box sx={{ width: 215 }} role="presentation">
                      {MobileDrawerList}
                    </Box>
                  </Drawer>
                </>
              ) : (
                <Stack direction="row" width="100%" justifyContent="flex-end">
                  {linkItems.map((text) => (
                    <Typography key={text} padding={2} color="white">
                      {text}
                    </Typography>
                  ))}
                </Stack>
              )}
            </Grid2>
          </Grid2>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
