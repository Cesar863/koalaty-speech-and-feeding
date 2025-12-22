import { Container, Typography } from '@mui/material';
import Link from 'next/link';

function Footer() {
  return (
    <Container
      sx={{
        p: 2,
        width: '100%',
        textAlign: 'center',
      }}
    >
      <Typography textAlign={'center'} sx={{ mt: 2 }}>
        <Link href="/privacy-policy">Privacy Policy</Link> |{' '}
        <Link href="/terms-and-conditions">Terms and Conditions</Link>.
      </Typography>
    </Container>
  );
}

export default Footer;
