/**
|--------------------------------------------------
| Import api url
|--------------------------------------------------
*/
import { baseUrl } from "../api/url";

/**
|--------------------------------------------------
| Function to get all quotes requests
|--------------------------------------------------
*/

export const getQuotes = async () => {
    const headersList = {
        Accept: "*/*",
    };

    let response = await fetch(`${baseUrl}/quotes`, {
        method: "GET",
        headers: headersList,
    });

    let data = await response.json();
    return data;
};

/**
|--------------------------------------------------
| function to get one quote details
|--------------------------------------------------
*/
export const getOneQuote = async (id) => {
    const headersList = {
        Accept: "*/*",
    };

    const response = await fetch(`${baseUrl}/quotes/get/${id}`, {
        method: "GET",
        headers: headersList,
    });

    let data = await response.json();
    return data;
};

export const deleteOneQuote = async (id) => {
    const headersList = {
        Accept: "*/*",
    };

    const response = await fetch(`${baseUrl}/quotes/delete/${id}`, {
        method: "POST",
        headers: headersList,
    });

    let data = await response.json();
    return data;
}