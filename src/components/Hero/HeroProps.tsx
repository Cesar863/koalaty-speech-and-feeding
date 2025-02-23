import {
    Avatar,
    Button,
    List,
    ListItemAvatar,
    ListItemText,
    Stack,
    Typography
} from "@mui/material";

interface HeroPageProps {
    title: string,
    subtitle: string,
    imageUrl: string,
    primaryButtonText: string,
    secondaryButtonText: string,
}

function HeroProps(props: HeroPageProps){
    const {
        title,
        subtitle,
        imageUrl,
        primaryButtonText,
        secondaryButtonText
    } = props

    return(
        <Stack direction='column' justifyContent='center' alignItems='center'>
            <List>
                <ListItemAvatar sx={{ display:'flex', justifyContent: 'center'}}>
                    <Avatar
                        sx={{
                            height: '800px',
                            width: '800px'
                        }}
                        alt='company logo'
                        src={imageUrl}
                    />
                </ListItemAvatar>
                <ListItemText sx={{textAlign: 'center'}}>
                    <Typography>
                        {title}
                    </Typography>
                </ListItemText>
                <ListItemText sx={{textAlign: 'center'}}>
                    <Typography>
                        {subtitle}
                    </Typography>
                </ListItemText>
            </List>
            <Stack flexDirection='row' gap={1}>
                <Button>
                    {primaryButtonText}
                </Button>
                <Button>
                    {secondaryButtonText}
                </Button>
            </Stack>
        </Stack>
    )
}

export default HeroProps

