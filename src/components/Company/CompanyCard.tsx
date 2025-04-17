import {
  Box,
  Card,
  CardMedia,
  Chip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';

interface CompanyCardProps {
  companyName: string;
  tagline: string;
  services: Array<string>;
  logoSrc: string;
  logoAlt?: string;
}

function CompanyCard(props: CompanyCardProps) {
  const { companyName, tagline, services, logoSrc, logoAlt } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Card
      sx={{
        borderRadius: 5,
        bgcolor: theme.palette.background.default,
        border: `${theme.palette.background.paper} solid 1px`,
        boxShadow: theme.shadows[2],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: isMobile ? 'none' : '410px',

        gap: 1,
        p: 5,
      }}
    >
      <CardMedia
        sx={{
          p: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src={logoSrc}
          alt={logoAlt || companyName}
          width={150}
          height={150}
        />
      </CardMedia>
      <Typography variant="h5" component="div" fontWeight="bold" mb={1}>
        {companyName}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" mb={2}>
        {tagline}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        {services.map((service) => (
          <Chip
            key={service}
            label={service}
            variant="outlined"
            sx={{
              boxShadow: 1,
              borderColor: theme.palette.secondary.light,
              fontSize: theme.typography.caption.fontSize,
            }}
          />
        ))}
      </Box>
    </Card>
  );
}

export default CompanyCard;
