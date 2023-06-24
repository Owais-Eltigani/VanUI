import { useNavigate } from 'react-router-dom';

export const auth = async () => {
  //   const navigate = useNavigate();
  try {
    const loggedIn = false;
    if (!loggedIn) {
      //   throw Error('Not logged in');
      // redirect to login page
      //   useNavigate('/login');
    }
  } catch (err) {
    console.log(err);
  }
};
