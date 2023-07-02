import {
  useSearchParams,
  Form,
  redirect,
  useActionData,
  useNavigation,
} from 'react-router-dom';
import { loginUser } from '../utils/APIs';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const password = formData.get('password');
  const email = formData.get('email');

  const url = new URL(request.url);

  const directTo = url.searchParams.get('url');

  try {
    const user = await loginUser({ email, password });

    localStorage.setItem('user', JSON.stringify(user));

    return directTo ? redirect(directTo) : redirect('/host');
  } catch (error) {
    localStorage.removeItem('user');
    return error.message;
  }
};

export function Login() {
  // const [loginFormData, setLoginFormData] = React.useState<Credentials>({
  //   email: '',
  //   password: '',
  // });

  // const [status, setStatus] = useState('idle');
  // const [error, setError] = useState<Error | null>(null);

  const err: Error | unknown = useActionData();

  const navigation = useNavigation();

  const [message, setMessage] = useSearchParams();
  const label = message.get('message');

  const mes = (
    <div className="mb-4 p-3 bg-red-500/70 w-[500px] text-white">{label}</div>
  );

  // function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   setStatus('pending');
  //   setError(null);

  // const res = loginUser(loginFormData);
  // res
  //   .then(data => {
  //     console.log(data);
  //   })
  //   .catch(err => {
  //     setError(err);
  //   })
  //   .finally(() => {
  //     setStatus('idle');
  //   });
  // const authinticate = async () => {
  //   try {
  //     const { user } = await loginUser(loginFormData);
  //     console.log(user);
  //   } catch (error) {
  //     setError(error);
  //   }
  //   setStatus('idle');
  // };

  // authinticate();
  // }

  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   const { name, value } = e.target;
  //   setLoginFormData(prev => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // }

  return (
    <div className="login-container">
      <h1 className="text-4xl pb-6">Sign in to your account</h1>
      {label && mes}
      <p className="pb-6">{err && err}</p>
      <Form
        className="login-form"
        method="post"
        replace
        // onSubmit={handleSubmit}
      >
        <input
          name="email"
          type="email"
          placeholder="Email address"
          // value={loginFormData.email}
          // onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          // value={loginFormData.password}
          // onChange={handleChange}
        />
        <button
          disabled={navigation.state == 'submitting'}
          className={`${
            navigation.state === 'submitting' ? 'bg-gray-400' : 'bg-blue-500'
          }}`}>
          {navigation.state == 'submitting' ? 'Loading...' : 'Sign in'}
        </button>
      </Form>
    </div>
  );
}

/* 

import React, { useState } from 'react';

export const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    name: '',
    rememberMe: false,
    status: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, checked, type } = e.target;
    setLoginInfo(oldValue => ({
      ...oldValue,
      [name]: type == 'checkbox' ? checked : value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(loginInfo);
  }

  return (
    <form onSubmit={handleSubmit}>
      username
      <input
        type="text"
        name="name"
        value={loginInfo.name}
        onChange={handleChange}
      />
      <br />
      <br />
      email
      <input
        type="email"
        name="email"
        value={loginInfo.email}
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        type="checkbox"
        name="rememberMe"
        id="checkbox"
        checked={loginInfo.rememberMe}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Remember me</label>
      <br />
      <br />
      <input
        type="radio"
        name="status"
        id="married"
        value={'married'}
        onChange={handleChange}
        checked={loginInfo.status == 'married'}
      />
      <label htmlFor="married"> Married</label>
      <input
        type="radio"
        name="status"
        id="single"
        value={'single'}
        onChange={handleChange}
        checked={loginInfo.status == 'single'}
      />
      <label htmlFor="single"> Single</label>
      <br />
      <br />
      <button>Log in</button>
    </form>
  );
};


*/
