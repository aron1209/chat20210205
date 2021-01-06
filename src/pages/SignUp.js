import React from "react";
import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { HashLink } from "react-router-hash-link";

const SignUp = () => {
  const { register, handleSubmit, errors } = useForm();
  const signup = (data) => {
    auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit(signup)}>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            id='email'
            placeholder='Email'
            ref={register({ required: true })}></input>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            ref={register({ required: true })}></input>
        </div>
        <button type='submit'>Sign up</button>
      </form>
      <small className='login_or_signup'>
        or
        <HashLink smooth to={"/login"} className='login_or_signup_link'>
          Login
        </HashLink>
        ?
      </small>
    </div>
  );
};

export default SignUp;
