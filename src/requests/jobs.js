import { baseUrl } from "../api/url";

export async function allJobs() {
  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };
  let response = await fetch(`${baseUrl}/jobs`, {
    method: "GET",
    headers: headersList,
  });
  const data = await response.json();
  return { data, ok: response.ok };
}

export async function getOneJob(title) {
  if (!title) return new Error("title not exists!");
  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };
  let response = await fetch(`${baseUrl}/jobs/${title}`, {
    method: "GET",
    headers: headersList,
  });
  const data = await response.json();
  return { data, ok: response.ok };
}
