import React from 'react'
import { Box } from '@mui/material'
import Time from '../Time/Time'
import Map from '../Map/Map'
import Typography from '@mui/material'

export default function Info() {
    return (
        <Box className="info" sx={{ flexGrow: 1, pt: "100px", pb: "100px", backgroundColor: "#eaddad" }}>
            <Box className="info-flex-container" sx={{ display: "flex", margin: "0 auto", maxWidth: "1400px" }}>
                <Box>
                    <Box>
                        <Time />
                    </Box>
                    <Box>
                        <Map />
                    </Box>
                </Box>

            </Box>

        </Box>
    )
}
