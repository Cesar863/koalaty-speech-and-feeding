import { Avatar, Stack, Typography, useTheme } from '@mui/material';

interface AboutSlotProps {
  imageUrl: string;
  text: string;
  altText?: string;
}

function AboutSlot(props: AboutSlotProps) {
  const { imageUrl, text, altText = '' } = props;
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      sx={{
        alignItems: 'center',
        '&:hover': {
          transition: '0.5s',
          bgcolor: theme.palette.secondary.light,
          borderRadius: 3,
        },
        gap: 0.5,
        padding: 0.5,
      }}
    >
      <Avatar alt={altText} src={imageUrl} />
      <Typography variant="body2" align="left" sx={{ pl: 1 }}>
        {text}
      </Typography>
    </Stack>
  );
}
export default AboutSlot;
