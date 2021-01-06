import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { auth } from "../config/firebase";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../AuthService";
import { HashLink } from "react-router-hash-link";

const Login = ({ history }) => {
  const { register, handleSubmit, errors } = useForm();
  const user = useContext(AuthContext);
  if (user) {
    return <Redirect to={"/"} />;
  }
  const login = (data) => {
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        console.log("err");
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(login)}>
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
        <button type='submit'>Login</button>
      </form>
      <small className='login_or_signup'>
        or
        <HashLink smooth to={"/signup"} className='login_or_signup_link'>
          Sign up
        </HashLink>
        ?
      </small>
    </div>
  );
};

export default Login;
