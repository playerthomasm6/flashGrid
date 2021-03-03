import React, {useEffect, useState, useContext }from "react";
import "./styles.css";
import { Link } from "react-router-dom"
import {UserContext} from '../../providers/UserProvider'
import  {signOut } from "../../utils/firebase"

function Nav() {

    // const [signedInUser, setSignedInUser] = useState(!!localStorage.getItem('signedInUser'));
    const user = useContext(UserContext)
    
   
    console.log(user)
    // useEffect(() => {
    //     getUser()
    // }, [signedInUser]);


    function getUser () {
        if (user != null) {
            return(
                <>
                <div className="col">
                    <a className="navbar-brand" href="/projects">
                    {user.email}
                    </a>
                </div>

                <div className="col">
                <div 
                onClick={() => {
                    signOut();
                    // setSignedInUser()
                    // getUser()
                }}
                className="navbar-brand" href="/projects">
                    <Link
                    onClick={() => {alert("you logged out")
                signOut();
                }}
                    
                    className="navbar-brand" to="/">
                    Log Out
                    </Link>
                    
                    
                
                    
                </div>
                </div>
            </>
            )
        } else {
            return(
                <div className="col">
                <a className="navbar-brand" href="/login">
                    Log In
                </a>
            </div>
            )
        }
    }
   
    return (
        <nav className="navbar navbar-expand-lg navbar-dark nav-color">
            <div className="container">
                <a href="/"><img src="flashgrid-logo-white.png" id='logo' alt="flash grid logo in white"></img></a>
                <div className='navcol'>
                    <a className="navbar-brand" href="/">
                        Home
                    </a>
                </div>
                <div className='navcol'>
                    <a className="navbar-brand" href="/about">
                        About
                    </a>
                </div>
                <div className='navcol'>
                    <a className="navbar-brand" href="/projects">
                        My Projects
                    </a>
                </div>
                <div className='navcol'>
                    <a className="navbar-brand" href="/register">
                        Sign Up
                    </a>
                </div>

                
                
                    {getUser()}

                        
                    
                
            </div>
                

         
        </nav>
    );
}

export default Nav;
