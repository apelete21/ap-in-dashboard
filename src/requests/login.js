/**
|--------------------------------------------------
| Import Api url 
|--------------------------------------------------
*/
import { baseUrl } from "../api/url";

/**
|--------------------------------------------------
| Admin user login function with data as variable
| Function pour demande d'authentication de l'utilisateur
|--------------------------------------------------
*/

export async function UserLogin(data, token) {
  if (!token) return { data: null, ok: false };

  const headersList = {
    Accept: "*/*",
    authorization: `Bearer ${token || null}`,
    "Content-Type": "application/json",
  };

  const response = await fetch(`${baseUrl}/users/login`, {
    method: "POST",
    headers: headersList,
    body: JSON.stringify(data) || undefined,
  })
    .then(async (response) => {
      const data = await response.json();
      return { data, ok: response.ok };
    })
    .catch((error) => {
      return { ...error, ok: false };
    });
  return response;
}
