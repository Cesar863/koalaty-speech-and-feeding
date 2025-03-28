import type { SvgIconComponent } from '@mui/icons-material';
import { Avatar, Stack, Typography, useTheme } from '@mui/material';

interface ItemSlotProps {
  icon: SvgIconComponent;
  text: string;
}

function ItemSlot(props: ItemSlotProps) {
  const { icon, text } = props;
  const Icon = icon;
  const theme = useTheme();

  return (
    <Stack direction="row" alignItems="center" gap={2}>
      <Avatar sx={{ bgcolor: theme.palette.background.paper }}>
        <Icon color="action" />
      </Avatar>
      <Typography>{text}</Typography>
    </Stack>
  );
}
export default ItemSlot;
