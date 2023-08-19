import { baseUrl } from "../api/url";

export const exportEmails = baseUrl + "/newsletters/export"

export const getNewsletters = async () => {
    const headersList = {
        Accept: "*/*",
    };

    const response = await fetch(`${baseUrl}/newsletters`, {
        method: "GET",
        headers: headersList,
    });

    const data = await response.json();
    return data;
};

export const deleteManyEmails = async ( items ) => {
    const headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json",
    };

    const bodyContent = JSON.stringify(items);

    const response = await fetch(`${baseUrl}/newsletters/del`, {
        method: "POST",
        body: bodyContent,
        headers: headersList,
    });
    const data = await response.json();
    return data;
};
