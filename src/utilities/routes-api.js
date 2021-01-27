const BASE_URL = '/api/routes';

export function getAll() {
  return fetch(BASE_URL).then(res => res.json());
}

