import { SnackbarAlert } from '@/components/Snackbar/Snackbar';
import type React from 'react';
import { createContext, useContext, useState } from 'react';

type SnackbarSeverity = 'success' | 'error' | 'info' | 'warning';

interface SnackbarContextProps {
  showSnackbar: (message: string, severity?: SnackbarSeverity) => void;
}

const SnackbarContext = createContext<SnackbarContextProps | undefined>(
  undefined,
);

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};

export const SnackbarProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<SnackbarSeverity>('success');

  const showSnackbar = (msg: string, sev: SnackbarSeverity = 'success') => {
    setMessage(msg);
    setSeverity(sev);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <SnackbarAlert
        open={open}
        severity={severity}
        message={message}
        onClose={handleClose}
      />
    </SnackbarContext.Provider>
  );
};
