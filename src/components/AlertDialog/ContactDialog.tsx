import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  type DialogProps,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

export interface SimpleDialogProps extends DialogProps {
  isMobile: boolean;
  onClose: () => void;
}

export const ContactDialog = (props: SimpleDialogProps) => {
  const { onClose, isMobile, open } = props;

  return (
    <Dialog open={open} fullScreen={isMobile} fullWidth maxWidth="sm">
      <Box
        sx={{
          justifyContent: 'space-between',
          display: 'flex',
          flexDirection: 'column',
          backgroundImage: `url('../../hero-background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: isMobile ? '100%' : 'auto',
        }}
      >
        <Container>
          <DialogTitle>
            <Stack
              direction="row"
              sx={{ width: '100%', justifyContent: 'space-between' }}
            >
              <Typography variant="h6">Contact Us</Typography>
              <IconButton onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Stack>
          </DialogTitle>
          <Divider />
          <DialogContent>
            <Stack spacing={2}>
              <TextField fullWidth required label="Name" />
              <TextField fullWidth required label="Phone Number" />
              <TextField fullWidth required label="Email" />
              <TextField
                fullWidth
                required
                label="What Services are you inquiring about?"
                multiline
                minRows={4}
              />
            </Stack>
          </DialogContent>
        </Container>
        <Container>
          <Divider />
          <Box sx={{ justifyContent: 'center', display: 'flex' }}>
            <Divider />
            <Button onClick={onClose} fullWidth>
              Submit
            </Button>
          </Box>
        </Container>
      </Box>
    </Dialog>
  );
};
