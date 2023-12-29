import axios from "axios";

const placeId = "ChIJ6djjiDNZwokRX2L_gDfCLJM"

export const getReviews = async () => {
    try {
        const { data } = await axios.get(`https://places.googleapis.com/v1/places/${placeId}?fields=reviews&key=${process.env.REACT_APP_GOOGLE_API_KEY}`);
        return data.reviews;
    } catch (error) {
        console.log(error)
    }
}

export const getPhotos = async () => {
    try {
        const { data } = await axios.get(`https://places.googleapis.com/v1/places/${placeId}?fields=photos&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)

        console.log(data)
        return data.photos;
    } catch (error) {
        console.log(error)
    }
}