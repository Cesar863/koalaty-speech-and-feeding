'use client';

import {
    Card,
    ListItemText,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';

export interface PageHeaderProps {
    bubbleText?: string;
    title: string;
    subtitle: string;
}

function PageHeader(props: PageHeaderProps) {
    const {
        bubbleText,
        title,
        subtitle,
    } = props;

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Stack alignItems="center" gap={isMobile ? 2 : 3}>
            {bubbleText && (
                <Card variant="outlined" sx={{ width: 'fit-content', p: 1 }}>
                    <ListItemText sx={{ textAlign: 'center' }}>
                        <Typography variant={isMobile ? 'subtitle2' : 'subtitle1'}>{bubbleText}</Typography>
                    </ListItemText>
                </Card>
            )}
            <ListItemText sx={{ textAlign: 'center' }}>
                <Typography variant={isMobile ? 'h2' : 'h1'}>{title}</Typography>
            </ListItemText>
            <ListItemText sx={{ textAlign: 'center' }}>
                <Typography variant={isMobile ? 'h6' : 'h5'}>{subtitle}</Typography>
            </ListItemText>
        </Stack>
    );
}

export default PageHeader;