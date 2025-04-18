import type { SvgIconComponent } from '@mui/icons-material';
import { Avatar, Stack, Typography, useTheme } from '@mui/material';

interface AboutSlotProps {
  icon: SvgIconComponent;
  text: string;
}

function AboutSlot(props: AboutSlotProps) {
  const { icon, text } = props;
  const Icon = icon;
  const theme = useTheme();

  return (
    <Stack
      p={0.5}
      direction="row"
      alignItems="center"
      gap={2}
      sx={{
        '&:hover': {
          transition: '0.5s',
          bgcolor: theme.palette.secondary.light,
          borderRadius: 3,
        },
      }}
    >
      <Avatar sx={{ bgcolor: theme.palette.background.paper }}>
        <Icon color="action" />
      </Avatar>
      <Typography variant="body2">{text}</Typography>
    </Stack>
  );
}
export default AboutSlot;
