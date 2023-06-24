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
