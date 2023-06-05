import { baseUrl } from "../api/url";

export async function allApplications(jobId, length) {
  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };
  let response = await fetch(
    `${baseUrl}/applications/find/${jobId}?length=${length}`,
    {
      method: "GET",
      headers: headersList,
    }
  );
  const data = await response.json();
  return { data, ok: response.ok };
}

export async function deleteOneApplication(appId) {
  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };
  let response = await fetch(`${baseUrl}/applications/delete/${appId}`, {
    method: "GET",
    headers: headersList,
  });
  const data = await response.json();
  return { data, ok: response.ok };
}

export const DownloadFileRoute = `${baseUrl}/applications/file`;
