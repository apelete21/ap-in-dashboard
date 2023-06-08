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

export async function loginMethod(userData, token) {
  if (!token && !userData)
    return { data: null, ok: false, message: "Nothing specified!" };

  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
    authorization: `Bearer ${token ?? token}`,
  };
  try {
    const response = await fetch(`${baseUrl}/users/auth`, {
      method: "POST",
      headers: headersList,
      body: JSON.stringify(userData) || undefined,
    });
    const data = await response.json();
    return { ...data, ok: response.ok };
  } catch (error) {
    return { message: error?.message || "Unknown!", ok: false };
  }
}
