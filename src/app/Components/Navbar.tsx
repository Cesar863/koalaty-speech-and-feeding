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
} from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import LogoImage from '../../assets/images/mainLogo.png';

export const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const toggleDrawer = (open: boolean) => () => {
		setOpen(open);
	};

	useEffect(() => {
		const checkScreenSize = () => setIsMobile(window.innerWidth < 768);

		checkScreenSize();
		window.addEventListener('resize', checkScreenSize);

		return () => window.removeEventListener('resize', checkScreenSize);
	}, []);

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
						{!isMobile ? (
							<Grid2 size={4} alignContent="center">
								<Typography variant="h6" textAlign="center">
									Koalaty Speech and Feeding Therapy Services
								</Typography>
							</Grid2>
						) : (
							<></>
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
										sx={{ background: 'transparent' }}
									>
										<MenuIcon />
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
										<Typography key={text} padding={2}>
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
};
