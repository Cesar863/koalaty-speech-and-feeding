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
import React from 'react';
import {
  formFields,
  isEveryErrorCleared,
  isEveryFieldFilled,
  phoneNumberMask,
  validateField,
} from './dialogUtils';

export interface SimpleDialogProps extends DialogProps {
  isMobile: boolean;
  onClose: () => void;
}

export const ContactDialog = (props: SimpleDialogProps) => {
  const { onClose, isMobile, open } = props;

  const [isFormValid, setIsFormValid] = React.useState(false);
  const [formValues, setFormValues] = React.useState(formFields);
  const [formErrors, setFormErrors] = React.useState(formFields);

  React.useEffect(() => {
    setIsFormValid(
      isEveryErrorCleared(formErrors) && isEveryFieldFilled(formValues),
    );
  }, [formErrors, formValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    validateField(name, value, setFormErrors);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = phoneNumberMask(e.target.value);
    setFormValues((prev) => ({ ...prev, phoneNumber: formattedPhone }));
  };

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
              <TextField
                fullWidth
                required
                label="Name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!formErrors.name}
                helperText={formErrors.name}
              />
              <TextField
                fullWidth
                required
                label="Phone Number"
                name="phoneNumber"
                value={formValues.phoneNumber}
                onChange={handlePhoneChange}
                onBlur={handleBlur}
                error={!!formErrors.phoneNumber}
                helperText={formErrors.phoneNumber}
              />
              <TextField
                fullWidth
                required
                label="Email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!formErrors.email}
                helperText={formErrors.email}
              />
              <TextField
                fullWidth
                required
                label="What Services are you inquiring about?"
                name="body"
                multiline
                minRows={4}
                value={formValues.body}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!formErrors.body}
                helperText={formErrors.body}
              />
            </Stack>
          </DialogContent>
        </Container>
        <Container>
          <Divider />
          <Box sx={{ justifyContent: 'center', display: 'flex' }}>
            <Divider />
            <Button onClick={onClose} fullWidth disabled={!isFormValid}>
              Submit
            </Button>
          </Box>
        </Container>
      </Box>
    </Dialog>
  );
};
