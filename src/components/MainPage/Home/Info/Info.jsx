import React from 'react'
import { Box } from '@mui/material'
import Map from '../Map/Map'
import Review from '../Review/Review'
import Time from '../Time/Time'
import "./Info.scss"

export default function Info() {
    return (
        <Box className="info">
            <Box className="info-container">
                <Box className="info-grid-layout">
                    <Box className="review-grid">
                        <Review />
                    </Box>
                    <Box className="map-grid" >
                        <Box>
                            <Map />
                        </Box>
                        <Box>
                            <Time />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
