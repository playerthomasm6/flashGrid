import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, generateUserDocument } from "../../utils/firebase";
import './styles.css'
import { Col, Row, Container } from 'react-bootstrap'

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {displayName});
      
    }
    catch(error){
      setError('Error Signing up with email and password');
    }
      
    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return (
    <div className='outer'>
    <Container className='signup-cont'>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <div className='spacer'></div>
    {/* // <div className="mt-8"> */}
      <h1 className="text-3xl mb-2 text-center font-bold" id='signup-title'>Sign Up</h1>
      {/* <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8"> */}
        {error !== null && (
          <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
            {error}
          </div>
        )}
        <form className="signup-form">
          {/* <label htmlFor="displayName" className="block">
            Display Name:
          </label> */}
          <input
            type="text"
            className="my-1 p-1 w-full input"
            name="displayName"
            value={displayName}
            placeholder="display name"
            id="displayName"
            onChange={event => onChangeHandler(event)}
          />
          {/* <label htmlFor="userEmail" className="block">
            Email:
          </label> */}
          <input
            type="email"
            className="my-1 p-1 w-full input"
            name="userEmail"
            value={email}
            placeholder="email address"
            id="userEmail"
            onChange={event => onChangeHandler(event)}
          />
          {/* <label htmlFor="userPassword" className="block">
            Password:
          </label> */}
          <input
            type="password"
            className="mt-1 mb-3 p-1 w-full input"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={event => onChangeHandler(event)}
          />
          <button
          id='registerSubmit'
          type='submit'
            className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
            onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign up
          </button>
        </form>
        <p className="text-center my-3 bottom-stuff">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:text-blue-600 bottom-stuff link">
            Sign in here
          </Link>{" "}
        </p>
      {/* // </div> */}
    {/* // </div> */}
    </Col>
    <Col md={3}></Col>
    </Row>
    </Container>
    </div>
  );
};

export default SignUp;