import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";

const SignUp = ({ history }) => {
  const { register, handleSubmit, errors } = useForm();
  const signup = (data) => {
    auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(({ user }) => {
        user.updateProfile({ displayName: data.name });
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit(signup)}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            ref={register({ required: true })}></input>
        </div>
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
        <Link to={"/login"} className='login_or_signup_link'>
          Login
        </Link>
        ?
      </small>
    </div>
  );
};

export default SignUp;
