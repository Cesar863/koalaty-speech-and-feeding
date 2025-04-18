import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  altText?: string;
}

function ServiceCard(props: ServiceCardProps) {
  const { title, description, imageUrl, altText } = props;

  const theme = useTheme();

  return (
    <Card
      sx={{
        borderRadius: 5,
        bgcolor: theme.palette.background.default,
        border: `${theme.palette.background.paper} solid 1px`,
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: theme.shadows[5],
        },
      }}
    >
      <Stack>
        <CardMedia
          component="img"
          alt={altText || title}
          image={imageUrl}
          sx={{
            aspectRatio: '16 / 9',
            width: '100%',
          }}
        />
        <CardContent sx={{ p: 2 }}>
          <Typography variant="h6" component="div" fontWeight="bold" mb={0.5}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Stack>
    </Card>
  );
}

export default ServiceCard;
