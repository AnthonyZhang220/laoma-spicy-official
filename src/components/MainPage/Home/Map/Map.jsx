import React from 'react'
import { useMediaQuery } from "@mui/material";

export default function Map() {
    const isMobile = useMediaQuery('(max-width:795px)');
    return (
        <iframe
            style={{
                border: "none",
                borderRadius: "18px",
                boxShadow: "rgb(0 0 0 / 10%) 0px 10px 50px",
                flexGrow: 0.75,
                height: isMobile ? "400px" : null,
                marginLeft: 15,
                marginRight: 15,
            }}
            title="Google Map"
            loading="lazy" allowFullScreen src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ6djjiDNZwokRX2L_gDfCLJM&key=${process.env.REACT_APP_GOOGLE_MAP_API}`}></iframe>
    )
}
