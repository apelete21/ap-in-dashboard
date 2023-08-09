import { baseUrl } from "../api/url";

export const visits = async (page) => {
  let headersList = {
    Accept: "*/*",
  };
  let response = await fetch(`${baseUrl}/visits/get/${page}`, {
    headers: headersList,
    method: "GET",
  });
  const data = await response.json();
  return { data, ok: response?.ok };
};
