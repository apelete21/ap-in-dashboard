import { baseUrl } from "../api/url";

export async function allJobs() {
  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };
  const response = await fetch(`${baseUrl}/jobs`, {
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
  const response = await fetch(`${baseUrl}/jobs/findone/${title}`, {
    method: "GET",
    headers: headersList,
  });
  const data = await response.json();
  return { data, ok: response.ok };
}

export async function postJob(body) {
  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };
  const response = await fetch(`${baseUrl}/jobs/new`, {
    method: "POST",
    headers: headersList,
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return { data, ok: response.ok };
}


export async function deleteJob(id) {
  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };
  const response = await fetch(`${baseUrl}/jobs/delete/${id}`, {
    method: "POST",
    headers: headersList,
  });

  const data = await response.json();
  return { data, ok: response.ok };
}
