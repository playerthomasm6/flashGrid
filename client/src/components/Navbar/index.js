import React, {useEffect, useState, useContext }from "react";
import "./styles.css";
import { Link } from "react-router-dom"
import {UserContext} from '../../providers/UserProvider'
import  {signOut } from "../../utils/firebase"

function Nav() {

    const signedInUser = localStorage.getItem('signedInUser');
    // const user = useContext(UserContext)

    
    
   
    console.log(signedInUser)
    // useEffect(() => {
    //     getUser()
    // }, [signedInUser]);


    function getUser () {
        if (signedInUser != null) {
            return(
                <>
                

                <div className="col navcol"
                    onClick={() => {signOut(); localStorage.clear()}}>

                    <Link
                        onClick={() => {alert("you logged out"); signOut();}}                   
                        className="navbar-brand" to="/">Log Out
                    </Link> 
                </div>

                <div className="col navcol">
                    <Link className="navbar-brand" to="/projects">
                    <p>{signedInUser}</p>
                    </Link>
                </div>
                
            </>
            )
        } else {
            return(
                <div className="col navcol">
                <Link className="navbar-brand" to="/login">
                    <div>Log In</div>
                </Link>
                </div>
            )
        }
    }
   
    return (
        <nav className="navbar navbar-expand-lg navbar-dark nav-color">
            <div className="container-fluid">
            <div className='navcol'>
            <a href="/"><img src="flashgrid-logo-white.png" id='logo' alt="flash grid logo in white"></img></a>
                </div>
                
                
                <div className='col navcol'>
                    <Link className="navbar-brand" to="/">
                        <div className="font-resize">Home</div>
                    </Link>
                </div>
                <div className='col navcol'>
                    <Link className="navbar-brand" to="/about">
                        <div className="font-resize">About</div>
                    </Link>
                </div>
                <div className='col navcol'>
                    <Link className="navbar-brand" to="/projects">
                        <div className="font-resize">My Projects</div>
                    </Link>
                </div>
                <div className='col navcol'>
                    <Link className="navbar-brand" onTouchCancel="/register">
                        <div className="font-resize">Sign Up</div>
                    </Link>
                </div>

                
                
                    {getUser()}

                        
                    
                
            </div>
                

         
        </nav>
    );
}

export default Nav;
