const axios = require("axios");

const userId = "46563394440";

const options = {
	method: "GET",
	url: "https://instagram130.p.rapidapi.com/account-medias",
	params: { userid: userId, first: "40" },
	headers: {
		"X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
		"X-RapidAPI-Host": "instagram130.p.rapidapi.com",
	},
};

export async function getInstaImages() {
	const response = await axios.request(options);

	return response.data;
}
