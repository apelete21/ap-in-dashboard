import { baseUrl } from "../api/url";

export async function allApplications(jobId) {
  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };
  let response = await fetch(`${baseUrl}/applications/find/${jobId}`, {
    method: "GET",
    headers: headersList,
  });
  const data = await response.json();
  return { data, ok: response.ok };
}
