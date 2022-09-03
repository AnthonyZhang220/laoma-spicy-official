import React, { useEffect, useState } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMediaQuery } from '@mui/material';
import { imageData } from './imageData';
import { getInstaImages } from '../../../../api/instaApi';

export default function Gallery() {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [images, setImages] = useState({});

    useEffect(() => {
        async function getImages() {
            const images = await getInstaImages();

            setImages(images)
        }

        getImages();

        return;
    }, [])


    return (
        <ImageList sx={{ width: "100%", height: 500 }} cols={isMobile ? 3 : 5} rowHeight="auto">
            {images.edges?.map((node, index) => (
                <ImageListItem key={index}>
                    <img
                        src={`${node.node.thumbnail_src}`}
                        srcSet={`${node.node.thumbnail_src}`}
                        alt="1"
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}
