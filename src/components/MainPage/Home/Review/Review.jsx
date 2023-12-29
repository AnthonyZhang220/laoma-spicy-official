import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GoogleIcon from '@mui/icons-material/Google';

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import { useMediaQuery } from "@mui/material";
import { getReviews } from '../../../../utils/getGooglePlaceInfo';

import './Review.scss';


export default function Review() {
    const [reviews, setReviews] = useState(null);
    const [loading, setLoading] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');

    useEffect(() => {
        setLoading(true)

        getReviews().then((data) => {
            if (data) {
                setReviews(data)
                setLoading(false);
            }
        })
    }, [])

    return (
        <Box className="review">
            <Box className="review-grid">
                {reviews?.filter((item) => item.rating > 3).map(({ authorAttribution, text, rating, relativePublishTimeDescription, name }) => (
                    <Card sx={{ maxWidth: isMobile ? 350 : 400, maxHeight: isMobile ? 650 : 700, }} key={name} onClick={() => window.location.href = authorAttribution.uri}>
                        <CardHeader
                            avatar={
                                <Avatar variant='rounded' alt={authorAttribution.photoUri} src={authorAttribution.photoUri} aria-label="author" sx={{ width: "4rem", height: "4rem" }} />
                            }
                            action={
                                <IconButton aria-label="Go to Google Map Review" onClick={() => window.location.href = authorAttribution.uri}>
                                    <GoogleIcon />
                                </IconButton>
                            }
                            title={authorAttribution.displayName}
                            titleTypographyProps={{ fontSize: "1.25rem" }}
                            subheader={relativePublishTimeDescription}
                        />
                        <CardContent>
                            <Stack spacing={1} sx={{ mb: 1 }} direction="row">
                                <Rating
                                    name="read-only"
                                    value={rating}
                                    readOnly
                                    precision={0.5}
                                />
                                <Box sx={{ ml: 2 }}>{`${rating} / 5`}</Box>
                            </Stack>
                            <Typography variant="body2" color="text.secondary">
                                {text.text}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    )
}


