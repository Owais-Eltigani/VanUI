import { redirect } from 'react-router-dom';

export const auth = async (url = '') => {
  // const loggedIn = false;

  // console.log(url);

  const Lc = localStorage.getItem('user');

  const user = Lc ? JSON.parse(Lc) : null;

  if (user === null) {
    // const res = redirect('/login');

    // res.body = true;
    // res.ok = true;
    // res.url = '/login';
    // throw res;
    throw redirect(`/login?message=You must Log in&url=${url}`);
  }
};
