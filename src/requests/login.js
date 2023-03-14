/**
|--------------------------------------------------
| Import Api url 
|--------------------------------------------------
*/
import { baseUrl } from "../api/url";

/**
|--------------------------------------------------
| Admin user login function with data as variable
|--------------------------------------------------
*/
export const login = async ({ username, password }) => {
    const bodyContent = JSON.stringify({
        username: username,
        password: password,
    });

    const headersList = {
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    };

    const data = await fetch(`${baseUrl}/users/login`, {
        method: "POST",
        body: bodyContent,
        headers: headersList,
    }).then(async (response) => {
        const data = await response.json();
        return { data: data, ok: response.ok };
    });

    return { ...data };
};
