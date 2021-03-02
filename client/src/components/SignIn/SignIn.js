import React, {useState} from "react";
import "./styles.css"
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { FiArrowRightCircle } from 'react-icons/fi';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    
    const signInWithEmailAndPasswordHandler = 
            (event,email, password) => {
                event.preventDefault();
                auth.signInWithEmailAndPassword(email, password).catch(error => {
                  setError("Error signing in with password and email!");
                  console.error("Error signing in with password and email", error);
                });
    };

    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;

        if(name === 'userEmail') {
            setEmail(value);
        }
        else if(name === 'userPassword'){
          setPassword(value);
        }
    };
return (
    <div className="mt-8" id='signin'>
      <h1 className="text-3xl mb-2 text-center font-bold" id='signIn-text'>Sign In</h1>
      {/* <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8"> */}
        {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
        <form className="">
          <input
            type="email"
            className="my-1 p-1 w-full input"
            name="userEmail"
            value = {email}
            placeholder="Your Email"
            id="userEmail"
            onChange = {(event) => onChangeHandler(event)}
          />
          <input
            type="password"
            className="mt-1 mb-3 p-1 w-full input"
            name="userPassword"
            value = {password}
            placeholder="Your Password"
            id="userPassword"
            onChange = {(event) => onChangeHandler(event)}
          />
          <button type="button" class="btn btn-light btn-lg btn-block" id='signInBtn' onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>Sign In <FiArrowRightCircle/></button>
        <br></br>
        </form>
        <p className="text-center my-3 sign-or-pass" >
          Don't have an account?{" "}
          <Link to="signUp" className="sign-or-pass noAccBtn">
            Sign up here
          </Link>{" "}
          <br />{" "}
          <Link to = "passwordReset" className="sign-or-pass noAccBtn">
            Forgot Password?
          </Link>
        </p>
      </div>
    // </div>
);

}

export default SignIn;