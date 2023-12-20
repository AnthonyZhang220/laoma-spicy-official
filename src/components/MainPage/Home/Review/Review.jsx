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
import { Box, Tooltip } from '@mui/material';
import { useMediaQuery } from "@mui/material";
import { ReactComponent as YelpLogo } from "./yelp.svg"
import getReviewsFromYelp from '../../../../utils/getReviewsFromYelp';

import './Review.scss';


export default function Review() {
    const [reviews, setReviews] = useState(null);
    const isTablet = useMediaQuery('(max-width:1000px)');
    const isMobile = useMediaQuery('(max-width:600px)');
    const { data, error } = getReviewsFromYelp();


    useEffect(() => {
        setReviews(data)
    }, [data])

    return (
        <Box className="review" sx={{ display: "flex", justifyContent: 'center', alignItem: "center", backgroundColor: "#f2f3f4", m: 1, p: 1 }} >
            <Box className="review-flex-container">
                {reviews?.map(({ id, url, text, rating, time_created, user }) => (
                    <Card sx={{ maxWidth: isMobile ? 350 : 400, maxHeight: isMobile ? 650 : 700, borderRadius: "18px", boxShadow: "rgb(0 0 0 / 10%) 0px 10px 50px", }} key={id}>
                        <CardHeader
                            avatar={
                                <Avatar alt={user.name} src={user.profile_url} aria-label="author" />
                            }
                            action={
                                <IconButton aria-label="Go to Yelp" onClick={() => window.location.href(url)}>
                                    <YelpLogo />
                                </IconButton>
                            }
                            title={user.name}
                            subheader={time_created}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={user.image_url}
                            alt={user.image_url}
                        />
                        <CardContent>
                            <Stack spacing={1} sx={{ mb: 1 }} direction="row">
                                <Rating
                                    name="read-only"
                                    value={rating}
                                    readOnly
                                    precision={0.5}
                                />
                                <Box sx={{ ml: 2 }}>{`${rating / 5}`}</Box>
                            </Stack>
                            <Typography variant="body2" color="text.secondary">
                                {text}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
                <Box sx={{ display: "flex", m: 1, p: 1, justifyContent: "center", alignItems: "center", }}>
                    <Box
                        component="a"
                        href='https://www.instagram.com/laomaspicy/' target="_blank" rel='noreferrer'
                        className="skill-icon-item" sx={{
                            backgroundColor: "#ffffff",
                            borderRadius: "50%",
                            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px;',
                            m: 1,
                            p: 2,
                        }}>
                        <Tooltip title={"Instagram"}>
                            <img src="./images/icons/instagram.png" style={{ display: "block" }} alt="instagram" height="50px" width="50px" />
                        </Tooltip>
                    </Box>
                    <Box textAlign="center"
                        component="a"
                        href='https://www.facebook.com/laomaspicy/' target="_blank" rel='noreferrer'
                        className="skill-icon-item" sx={{
                            backgroundColor: "#ffffff",
                            borderRadius: "50%",
                            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px;',
                            m: 1,
                            p: 2,
                        }}>
                        <Tooltip title={"Facebook"}>
                            <img src="./images/icons/facebook.png" alt="facebook" height="50px" width="50px" style={{ display: "block" }} />
                        </Tooltip>
                    </Box>
                    <Box
                        component="a"
                        href='https://www.yelp.com/biz/laoma-spicy-new-york-2' target="_blank" rel='noreferrer'
                        className="skill-icon-item" sx={{
                            backgroundColor: "#ffffff",
                            borderRadius: "50%",
                            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px;',
                            m: 1,
                            p: 2,
                        }}>
                        <Tooltip title={"Yelp"}>
                            <img src="./images/icons/yelp.png" alt="yelp" height="50px" width="50px" style={{ display: "block" }} />
                        </Tooltip>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}


