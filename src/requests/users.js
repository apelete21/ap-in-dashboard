import { baseUrl } from "../api/url";

export const usersReqs = async (body, route) => {
  const token = localStorage.getItem("user");
  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
    authorization: `Bearer ${token ?? token}`,
  };

  try {
    const response = await fetch(`${baseUrl}/users/${route}`, {
      method: "POST",
      headers: headersList,
      body: JSON.stringify(body ?? body),
    });
    const data = await response.json();

    return {...data, ok: response?.ok};
  } catch (error) {
    return { message: error?.message };
  }
};
