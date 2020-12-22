import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const NewUser: React.FC = () => {
  const {
    register,
    handleSubmit,
    errors
  } = useForm(); // initialize the hook

  type userData = {
    name: string,
    password: string,
    email: string
  }
  // const [error, setError] = useState(false);
  const onSubmit = (userData) => {
    // axios
    //   .post('/newUser', userData)
    //   .then(() => props.setUser(userData.userName))
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
      <label htmlFor="password1">
        <input
          id="password1"
          name="password1"
          ref={register({required: true, minLength: 8, })}
          type="password"
        />
        {errors.password1 && 'Password is required.'}
      </label>
      <br />
      <label htmlFor="password2">
        <input
          id="password2"
          name="password2"
          ref={register({required: true, minLength: 8, })}
          type="password"
        />
        {errors.password2 && 'Password is required.'}
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
export default NewUser;