import { fetchHostVans } from '../utils/APIs';

export const loader = () => {
  return fetchHostVans();
};

export const Income = () => {
  return <div>Income</div>;
};
