const BASE_URL = '/api/routes';

export function getAll() {
  return fetch(BASE_URL).then(res => res.json());
}

export function create(route) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(route),
  }).then((res) => res.json());
}