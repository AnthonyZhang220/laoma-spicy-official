import React from 'react'

export default function Map() {
    return (
        <iframe title="Google Map" width="400" height="400" style={{ border: 0, borderRadius: "18px" }} loading="lazy" allowFullScreen src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ6djjiDNZwokRX2L_gDfCLJM&key=${process.env.REACT_APP_GOOGLE_MAP_API}`}></iframe>
    )
}
