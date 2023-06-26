import { Credentials } from './types';

export const fetchVans = async (id: string | undefined = undefined) => {
  const URL = id ? `/api/vans/${id}` : '/api/vans';
  const res = await fetch(URL);
  const { vans } = await res.json();
  return vans;
};

export const fetchHostVans = async (id: string | undefined = undefined) => {
  const URL = id ? `/api/host/vans/${id}` : '/api/host/vans';
  const res = await fetch(URL);
  const { vans } = await res.json();
  return vans;
};

export async function loginUser(creds: Credentials) {
  const res = await fetch('/api/login', {
    method: 'post',
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
