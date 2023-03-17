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
  if (!loginData) return;

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
    return { data, ok: response.ok };
  });

  return { ...data };
};

/**
|--------------------------------------------------
| Function pour demande d'authentication de l'utilisateur
|--------------------------------------------------
*/

export async function AuthUser(token, id) {
  if (!id || !token) return;

  const headersList = {
    Accept: "*/*",
    authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let bodyContent = JSON.stringify({
    user: id,
  });

  let response = await fetch(`${baseUrl}/users/auth`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  }).then(async (response) => {
    const data = await response.json();
    return { ...data, ok: response.ok };
  });
  return response;
}

export async function getOneUser(id) {
  if (!id) return;
  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };
  let response = await fetch(`${baseUrl}/users/find/${id}`, {
    method: "GET",
    headers: headersList,
  });
  return await response.json();
}
