import {
  Card,
  ListItemText,
  Stack,
  Typography,
  type TypographyProps,
  useMediaQuery,
  useTheme,
} from '@mui/material';

export interface PageHeaderProps {
  bubbleText?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  textAlign?: 'start' | 'center';
  h1Props?: TypographyProps;
}

function PageHeader(props: PageHeaderProps) {
  const {
    bubbleText,
    title,
    subtitle,
    description,
    textAlign = 'center',
    h1Props,
  } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack alignItems={textAlign} gap={isMobile ? 1 : 2}>
      {bubbleText && (
        <Card variant="outlined" sx={{ width: 'fit-content', p: 0.75 }}>
          <ListItemText sx={{ textAlign: textAlign }}>
            <Typography variant="body1">{bubbleText}</Typography>
          </ListItemText>
        </Card>
      )}
      <ListItemText sx={{ textAlign: textAlign }}>
        <Typography variant={isMobile ? 'h2' : 'h1'} {...h1Props}>
          {title}
        </Typography>
      </ListItemText>
      <ListItemText sx={{ textAlign: textAlign }}>
        <Typography variant={isMobile ? 'h5' : 'h4'}>{subtitle}</Typography>
      </ListItemText>
      {description && (
        <ListItemText sx={{ textAlign: textAlign }}>
          <Typography variant="body1">{description}</Typography>
        </ListItemText>
      )}
    </Stack>
  );
}

export default PageHeader;
