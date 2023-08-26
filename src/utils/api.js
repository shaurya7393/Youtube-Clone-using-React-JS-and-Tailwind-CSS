const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": '1666624106msh7371fca459e60b1p1b1951jsna796065947f9',
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
};

export const fetchDataFromApi = async (url) => {
    const response = await fetch(`${BASE_URL}/${url}`, options);
    const data = await response.json();
    return data;
};
