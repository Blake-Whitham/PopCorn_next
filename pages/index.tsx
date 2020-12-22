import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import stringHash from 'string-hash';

export default function Login() {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const [error, setError] = useState(false);
  const onSubmit = (data) => {
    // eslint-disable-next-line no-param-reassign
    data.password = stringHash(`${data.password + data.userName}`);
    // axios
    //   .post('/check', data)
    //   .then(() => \\setUser(data.userName))
    //   .catch(() => setError(true));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="userNameInput">
        <input
          id="userNameInput"
          name="userName"
          ref={register({ required: true })}
          type="text"
        />

      </label>
      <br />
      <label htmlFor="passwordInput">
        <input
          id="passwordInput"
          name="password"
          ref={register}
          type="password"
        />
        {errors.password && 'Password is required.'}
      </label>
      <br />
      {/* <button type="button"> */}
        <Link href="/newUser">
          <a>New User</a>
        </Link>
      {/* </button> */}
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}
