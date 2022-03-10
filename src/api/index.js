import axios from "axios";
const URL =
    "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
    try {
        // request
        const {
            data: { data },
        } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                "x-rapidapi-key":
                    "cd4dfc6926msh6ec67bfaac55de3p1f46cbjsn6a498704c5b8",
            },
        });
        return data;
    } catch (error) {
        console.error(error);
    }
};
