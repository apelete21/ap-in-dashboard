import { baseUrl } from "../api/url";

export const getNewsletters = async () => {
    const headersList = {
        Accept: "*/*",
    };

    const response = await fetch(`${baseUrl}/newsletters`, {
        method: "GET",
        headers: headersList,
    });

    const data = await response.json();
    console.log(data);
    return data;
};