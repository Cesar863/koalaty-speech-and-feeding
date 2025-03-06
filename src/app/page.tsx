'use client';
import ClientWrapper from '@/app/ClientWrapper';
import { CssBaseline } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { DesktopNavbar, MobileNavBar } from './Components/Navbar';

export default function Home() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkScreenSize = () => setIsMobile(window.innerWidth < 768);

		checkScreenSize();
		window.addEventListener('resize', checkScreenSize);

		return () => window.removeEventListener('resize', checkScreenSize);
	}, []);
	return (
		<ClientWrapper>
			<CssBaseline />
			{isMobile ? <MobileNavBar /> : <DesktopNavbar />}
		</ClientWrapper>
	);
}
