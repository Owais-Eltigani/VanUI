import { fetchHostVans } from '../utils/APIs';
import { auth } from '../utils/auth';

export const loader = async () => {
  await auth();
  // return fetchHostVans();
};

export const Income = () => {
  return <div>Income</div>;
};
