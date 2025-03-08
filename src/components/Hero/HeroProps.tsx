'use client';

import {
    Box,
    Button,
    Card,
    Grid2 as Grid,
    ListItemText,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import Link from "next/link";

interface HeroPageProps {
    bubbleText: string;
    title: string;
    subtitle: string;
    imageUrl: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    primaryHref: string,
    secondaryHref: string,
}

function HeroProps(props: HeroPageProps) {
    const {
        bubbleText,
        title,
        subtitle,
        primaryButtonText,
        secondaryButtonText,
        primaryHref,
        secondaryHref
    } = props;

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '100vh',
                backgroundImage: `url('../../hero-background.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Grid container justifyContent="center" alignItems="center" spacing={isMobile ? 3 : 5} sx={{padding: isMobile ? 2 : 5}}>
                <Grid size={{xs: 12, sm: 10, md: 8}}>
                    <Stack alignItems="center" gap={isMobile ? 2 : 3}>
                        <Card variant="outlined" sx={{ width: 'fit-content', p: 1 }}>
                            <ListItemText sx={{textAlign: 'center', fontSize: isMobile ? '0.9rem' : '1rem'}}>{bubbleText}</ListItemText>
                        </Card>
                        <ListItemText sx={{ textAlign: 'center' }}>
                            <Typography variant={isMobile ? 'h2' : 'h1'} fontWeight={700}>{title}</Typography>
                        </ListItemText>
                        <ListItemText sx={{ textAlign: 'center' }}>
                            <Typography variant={isMobile ? 'h6' : 'h5'} fontWeight={500}>{subtitle}</Typography>
                        </ListItemText>
                    </Stack>
                </Grid>
                <Grid size={{ xs: 12, sm: 10, md: 8 }} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Stack justifyContent='center' flexDirection={isMobile ? 'column' : 'row'} gap={3} width='100%'>
                        <Link href={primaryHref}>
                            <Button
                                variant="contained"
                                sx={{
                                    width: '100%',
                                    bgcolor: theme.palette.background.paper,
                                    color: theme.palette.primary.contrastText,
                                    fontWeight: 700,
                                    '&:hover': {
                                        bgcolor: theme.palette.secondary.light,
                                    },
                                }}
                            >
                                {primaryButtonText}
                            </Button>
                        </Link>
                        <Link href={secondaryHref}>
                            <Button
                                variant="outlined"
                                sx={{
                                    width: '100%',
                                    border: `1px solid #b4b4b4`,
                                    bgcolor: 'transparent',
                                    color: theme.palette.primary.main,
                                    fontWeight: 700,
                                }}
                            >
                                {secondaryButtonText}
                            </Button>
                        </Link>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}

export default HeroProps;