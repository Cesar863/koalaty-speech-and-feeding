import MenuIcon from '@mui/icons-material/Menu';
import {
	AppBar,
	Box,
	Button,
	Divider,
	Drawer,
	Grid2,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Stack,
	Toolbar,
	Typography,
} from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import LogoImage from '../../assets/images/mainLogo.png';

export const DesktopNavbar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Stack
						direction="row"
						sx={{
							justifyContent: 'space-between',
							alignItems: 'center',
							width: '100%',
						}}
						spacing={2}
					>
						<Box>
							<IconButton
								size="large"
								edge="start"
								color="inherit"
								aria-label="menu"
								sx={{ mr: 2 }}
							>
								<Image
									src={LogoImage}
									height={56}
									width={56}
									alt="Logo for Koalaty Speech and Feeding."
								/>
							</IconButton>
						</Box>
						<Typography variant="h6">
							Koalaty Speech and Feeding Therapy Services
						</Typography>
						<Stack direction="row" spacing={1}>
							<Typography variant="h6">Link 1</Typography>
							<Typography variant="h6">Link 1</Typography>
							<Typography variant="h6">Link 1</Typography>
						</Stack>
					</Stack>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export const MobileNavBar = () => {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (open: boolean) => () => {
		setOpen(open);
	};

	const DrawerList = (
		<Box sx={{ width: 215 }} role="presentation" onClick={toggleDrawer(false)}>
			<List>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<Box>
			<AppBar>
				<Toolbar>
					<Grid2
						container
						width="100%"
						direction="row"
						sx={{
							justifyContent: 'space-around',
							textAlign: 'right',
							alignItems: 'center',
						}}
					>
						<Grid2 size={7} sx={{ textAlign: 'right' }}>
							<IconButton size="large" edge="start" color="inherit">
								<Image
									src={LogoImage}
									height={40}
									width={40}
									alt="Logo for Koalaty Speech and Feeding."
								/>
							</IconButton>
						</Grid2>
						<Grid2 size={5} sx={{ textAlign: 'right' }}>
							<Button onClick={toggleDrawer(true)}>
								<MenuIcon />
							</Button>
							<Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
								{DrawerList}
							</Drawer>
						</Grid2>
					</Grid2>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
