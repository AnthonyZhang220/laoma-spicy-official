
export default function Map() {
    return (
        <iframe
            style={{
                border: "none",
                borderRadius: "18px",
                boxShadow: "rgb(0 0 0 / 10%) 0px 10px 50px",
                height: "100%",
                marginLeft: 15,
                marginRight: 15,
                flex: "1 1 auto"
            }}
            title="Google Map"
            loading="lazy" allowFullScreen src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ6djjiDNZwokRX2L_gDfCLJM&key=${process.env.REACT_APP_GOOGLE_MAP_API}`}></iframe>
    )
}
