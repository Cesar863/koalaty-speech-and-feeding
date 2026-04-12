import { Alert, Snackbar } from '@mui/material';

export interface SnackbarAlertProps {
  open: boolean;
  severity: 'success' | 'error' | 'info' | 'warning';
  message: string;
  onClose: () => void;
  autoHideDuration?: number;
}

export const SnackbarAlert = ({
  open,
  severity,
  message,
  onClose,
  autoHideDuration = 4000,
}: SnackbarAlertProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        elevation={6}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
