import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const stringHash = require('string-hash');

export default function Login() {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  // const [error, setError] = useState(false);
  const onSubmit = (data) => {
    // eslint-disable-next-line no-param-reassign
    data.password = stringHash(`${data.password + data.userName}`);
    axios
      .post('/newUser', data)
      .then(() => props.setUser(data.userName))
      .catch(() => setError(true));
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
      <label htmlFor="password1">
        <input
          id="password1"
          name="password1"
          ref={register}
          type="password"
        />
        {errors.password && 'Password is required.'}
      </label>
      <br />
      <label htmlFor="password2">
        <input
          id="password2"
          name="password2"
          ref={register}
          type="password"
        />
        {errors.password && 'Password is required.'}
      </label>
      <br />
      <button type="button">
        <Link href="/">
          <a>Back</a>
        </Link>
      </button>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}
