const business_id_or_alias = "laoma-spicy-new-york-2";
const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
    }
}


async function getReviewsFromYelp() {
    try {
        const response = await fetch(`https://api.yelp.com/v3/businesses/${business_id_or_alias}/reviews?limit=20&sort_by=yelp_sort`, options)
        const data = response.json();
        return { data, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export default getReviewsFromYelp;