import { baseUrl } from "../api/url";

export const pictureReq = async (method, route, body) => {
  let headersList = {
    Accept: "*/*",
  };
  let response = await fetch(`${baseUrl}/picture/${route}`, {
    headers: headersList,
    method,
    body,
  });
  const data = await response.json();
  return { data, ok: response?.ok };
};

export const articleReq = async (method, route, body) => {
  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };
  let response = await fetch(`${baseUrl}/article/${route}`, {
    headers: headersList,
    method: method,
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return { data, ok: response?.ok };
};

export const imgUrl = `${baseUrl}/picture`;
