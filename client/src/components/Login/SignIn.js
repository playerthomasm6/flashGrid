import React, {useState, useEffect} from "react";
import "./styles.css"
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { FiArrowRightCircle } from 'react-icons/fi';
import { Col, Row, Container } from 'react-bootstrap'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const history = useHistory()

    // useEffect(() => {
    //   console.log(`user is signed in as ${email}`);
    //   localStorage.setItem('signedInUser', email);
    // }, [email]);
    
    const signInWithEmailAndPasswordHandler = 
            (event,email, password) => {
                event.preventDefault();
                auth.signInWithEmailAndPassword(email, password).then(() => history.push('/projects'))
                .then(() => {
                  console.log(`User ${email} is signed in`);
                  localStorage.setItem('signedInUser', email);
                })
                .catch(error => {
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
  <Container>
  <div className='spacer'></div>
  <br></br>
  <br></br>
    <div className="mt-8" id='signin'>
      <h1 className="text-3xl mb-2 text-center font-bold" id='signIn-text'>Sign In</h1>
      {/* <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8"> */}
        {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
        <form className="">
          <input
            type="email"
            className="input my-1 p-1 w-full"
            name="userEmail"
            value = {email}
            placeholder="Your Email"
            id="userEmail"
            onChange = {(event) => onChangeHandler(event)}
          />
          <input
            type="password"
            className="input mt-1 mb-3 p-1 w-full"
            name="userPassword"
            value = {password}
            placeholder="Your Password"
            id="userPassword"
            onChange = {(event) => onChangeHandler(event)}
          />
          <button type="button" class="btn btn-light btn-lg btn-block" id='signInBtn' onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}} className="text-blue-500 hover:text-blue-600">Sign In <FiArrowRightCircle/></button>
        <br></br>
        </form>
        <p className="text-center my-3 sign-or-pass" id='dontMessage'>
          Don't have an account?{" "}
          <Link to="signUp" className="sign-or-pass noAccBtn">
            Sign up 
          </Link>{" "}
          <br />{" "}
          <Link to = "passwordReset" className="sign-or-pass noAccBtn">
            Forgot Password?
          </Link>
        </p>
      </div>
    </Container>
);

}

export default SignIn;