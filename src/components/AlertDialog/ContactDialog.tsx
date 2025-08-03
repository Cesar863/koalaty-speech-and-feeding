import { useSnackbar } from '@/components/Snackbar/SnackbarContext';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  CircularProgress,
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
  apiResponse,
  formFields,
  isEveryErrorCleared,
  isEveryFieldFilled,
  nameRegex,
  phoneNumberMask,
  validateField,
} from './dialogUtils';

export interface SimpleDialogProps extends DialogProps {
  isMobile: boolean;
  onClose: () => void;
}

export const ContactDialog = (props: SimpleDialogProps) => {
  const { onClose, isMobile, open } = props;
  const { showSnackbar } = useSnackbar();

  const [isFormValid, setIsFormValid] = React.useState(false);
  const [formValues, setFormValues] = React.useState(formFields);
  const [formErrors, setFormErrors] = React.useState(formFields);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useEffect(() => {
    setIsFormValid(
      isEveryErrorCleared(formErrors) && isEveryFieldFilled(formValues),
    );
  }, [formErrors, formValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'phoneNumber') {
      const formattedPhone = phoneNumberMask(e.target.value);
      return setFormValues((prev) => ({
        ...prev,
        phoneNumber: formattedPhone,
      }));
    }
    if (name === 'name') {
      const formattedName = nameRegex(e.target.value);
      return setFormValues((prev) => ({ ...prev, name: formattedName }));
    }
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    validateField(name, value, setFormErrors);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await apiResponse(
        'https://j4iwz3yhu8.execute-api.us-east-1.amazonaws.com/contact',
        'POST',
        formValues,
      );

      await response.json();
      showSnackbar('Message sent successfully!', 'success');
      onClose();
      setFormValues(formFields);
      setFormErrors(formFields);
    } catch {
      showSnackbar('Failed to send message. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
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
                onChange={handleChange}
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
                helperText={
                  formErrors.body
                    ? formErrors.body
                    : `${formValues.body.length}/300`
                }
                slotProps={{
                  htmlInput: {
                    maxLength: 300,
                  },
                }}
              />
            </Stack>
          </DialogContent>
        </Container>
        <Container>
          <Divider />
          <Box sx={{ justifyContent: 'center', display: 'flex' }}>
            <Divider />
            <Button
              onClick={handleSubmit}
              fullWidth
              disabled={!isFormValid || isSubmitting}
              startIcon={isSubmitting ? <CircularProgress size={20} /> : null}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </Button>
          </Box>
        </Container>
      </Box>
    </Dialog>
  );
};
