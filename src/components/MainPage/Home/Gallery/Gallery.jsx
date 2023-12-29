import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMediaQuery } from '@mui/material';
import { getPhotos } from '../../../../utils/getGooglePlaceInfo';

export default function Gallery() {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)

        getPhotos().then((data) => {
            if (data) {
                data.forEach((obj) => {
                    axios.get(`https://places.googleapis.com/v1/${obj.name}/media?maxHeightPx=500&maxWidthPx=500&key=${process.env.REACT_APP_GOOGLE_API_KEY}`).then((imageSrc) => {
                        console.log("imageSrc", imageSrc.request.responseURL)
                        setImages((prev) => [...prev, imageSrc.request.responseURL])
                    })
                })
                setLoading(false);
            }
        })
    }, [])
    useEffect(() => {
        console.log(images)
    }, [images])

    return (
        <ImageList variant='masonry' cols={isMobile ? 2 : 4} rowHeight="auto" gap={2}>
            {images?.map((image) => (
                <ImageListItem key={image}>
                    <img
                        src={image}
                        srcSet={image}
                        alt={image}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}
