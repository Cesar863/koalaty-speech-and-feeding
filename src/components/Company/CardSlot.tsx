import type { SvgIconComponent } from '@mui/icons-material';
import { Card, Stack, Typography, useTheme } from '@mui/material';

interface CardSlotProps {
  icon: SvgIconComponent;
  primaryText: string;
  secondaryText: string;
}

function CardSlot(props: CardSlotProps) {
  const { icon, primaryText, secondaryText } = props;

  const theme = useTheme();
  const Icon = icon;

  return (
    <Card
      sx={{
        p: 3,
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        borderRadius: 3,
        bgcolor: theme.palette.background.default,
        border: `${theme.palette.background.paper} solid 1px`,
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: theme.shadows[5],
        },
      }}
    >
      <Stack
        display="flex"
        flexDirection="row"
        alignItems="center"
        mb={2}
        gap={1}
      >
        <Icon sx={{ color: theme.palette.success.main }} />
        <Typography variant="subtitle1">{primaryText}</Typography>
      </Stack>
      <Typography variant="subtitle2" color="textSecondary">
        {secondaryText}
      </Typography>
    </Card>
  );
}

export default CardSlot;
