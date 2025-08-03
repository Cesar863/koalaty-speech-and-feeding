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
      <Avatar alt={altText} src={imageUrl} />
      <Typography variant="body2">{text}</Typography>
    </Stack>
  );
}
export default AboutSlot;
