import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Box, CardActionArea } from '@mui/material';

export default function VideoCard() {
    return (
        <Card sx={{ backgroundColor: 'transparent', backgroundImage: 'none', boxShadow: 'none', borderRadius: 0 }}>
            <CardActionArea sx={{ borderRadius: 3 }}>
                <CardMedia
                    component="img"
                    height="190"
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                    sx={{ borderRadius: 3 }}
                />
            </CardActionArea>
            <CardContent sx={{ display: 'flex' }}>
                <Avatar>A</Avatar>
                <Box sx={{ marginLeft: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6" color="text.secondary">
                        Title
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        Uploader
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        8M views
                    </Typography>

                </Box>
            </CardContent>
        </Card>
    );
}