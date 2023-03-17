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
export const login = async (loginData) => {
    const bodyContent = JSON.stringify(loginData);

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

/**
|--------------------------------------------------
| Function pour demande d'authentication de l'utilisateur
|--------------------------------------------------
*/

export async function AuthUser(token) {
    if(!token) return
    try {
        const response = await fetch(`${baseUrl}/users/auth`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
    }
}
