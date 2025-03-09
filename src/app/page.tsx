'use client';
import ClientWrapper from '@/app/ClientWrapper';
import { CssBaseline } from '@mui/material';
import { Navbar } from './Components/Navbar';

export default function Home() {
  return (
    <ClientWrapper>
      <CssBaseline />
      <Navbar />
    </ClientWrapper>
  );
}
