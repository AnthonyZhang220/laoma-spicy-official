import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { getReviewData } from '../../../../api/googleReview';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

import './Review.scss';


export default function Review() {
    const [data, setData] = useState({});
    const [number, setNumber] = useState(1);

    useEffect(() => {
        const reviewData = async () => {
            await getReviewData();
        }
        // setData(reviewData.reviews_data[number])
    }, [number]);

    return (
        <Box className="review" sx={{ display: "flex", justifyContent: 'center', alignItem: "center", backgroundColor: "#f2f3f4" }} >
            <Box className="review-flex-container">
                <Card sx={{ maxWidth: 400, maxHeight: 700, borderRadius: "18px", boxShadow: "rgb(0 0 0 / 10%) 0px 10px 50px", }}>
                    <CardHeader
                        avatar={
                            <Avatar alt={data.author_title ? data.author_title : "Jessica Wong"} src={data.author_image ? data.author_image : "https://lh3.googleusercontent.com/a-/AFdZucraph7YVSHQq8cFcKWWFWn5ugrtUCL-PRTi8cfk=w36-h36-p-c0x00000000-rp-mo-ba4-br100"} aria-label="author" />
                        }
                        title={data.author_title ? data.author_title : "Jessica Wong"}
                        subheader={data.review_datetime_utc || null}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={data.review_img_url ? data.review_img_url : "https://lh5.googleusercontent.com/p/AF1QipOFMFcmZwY6R4cF0HWADToKQX3eFyaIF9vrYMg=w300-h450-p-k-no"}
                        alt={data.author_title ? data.author_title : null}
                    />
                    <CardContent>
                        <Stack spacing={1} sx={{ mb: 1 }} direction="row">
                            <Rating
                                name="read-only"
                                value={data.review_rating ? data.review_rating : 5}
                                readOnly
                                precision={0.5}
                            />
                            <Box sx={{ ml: 2 }}>{data.review_rating ? `${data.review_rating / 5}` : `5 / 5`}</Box>
                        </Stack>
                        <Typography variant="body2" color="text.secondary">
                            {data.review_text ? data.review_text : "I have already ordered takeout here so many times and I love this place so much. The chili oil wontons are honestly so marvelous, I love how it’s the right amount of spicy and garlicky. The beef spicy stew is also so good and yummy, and I always appreciate how they give such a generous amount of beef and noodles. There is also the perfect amount of heat and spice in every bite that makes me crave this every week."}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    )
}


