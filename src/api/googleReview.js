const axios = require("axios");
const place_id = "ChIJ6djjiDNZwokRX2L_gDfCLJM";

const options = {
	method: "GET",
	url: "https://google-reviews.p.rapidapi.com/maps/reviews-v3",
	params: { query: place_id },
	headers: {
		"X-RapidAPI-Key": process.env.REACT_APP_REVIEW_API_KEY,
		"X-RapidAPI-Host": "google-reviews.p.rapidapi.com",
	},
};

function getReviewData() {
	const response = axios.request(options);
	return response.data;
}
