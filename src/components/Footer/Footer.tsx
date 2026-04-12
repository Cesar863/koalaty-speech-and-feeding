import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Container
      sx={{
        p: 2,
        width: '100%',
        textAlign: 'center',
      }}
    >
      <Typography sx={{ textAlign: 'center', mt: 2 }}>
        <Link to="/privacy-policy">Privacy Policy</Link> |{' '}
        <Link to="/terms-and-conditions">Terms and Conditions</Link>.
      </Typography>
    </Container>
  );
}

export default Footer;
