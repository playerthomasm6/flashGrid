import React, {useEffect, useState}from "react";
import "./styles.css";

function Nav() {

    const [signedInUser, setSignedInUser] = useState();

    useEffect(() => {
        setSignedInUser(localStorage.getItem('signedInUser'))
    }, []);

    useEffect(() => {
        getUser()
    }, [signedInUser]);


    function getUser () {
        if (signedInUser != null) {
            return(
                <>
                <div className="col">
                    <a className="navbar-brand" href="/projects">
                    {signedInUser}
                    </a>
                </div>

                <div className="col">
                <div 
                onClick={() => {
                    localStorage.clear();
                    setSignedInUser()
                    getUser()
                }}
                className="navbar-brand" href="/projects">
                    Log Out
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
                <a href="/"><img src="flashgrid-logo-white.png" alt="flash grid logo in white"></img></a>
                <div className="col">
                    <a className="navbar-brand" href="/">
                        Home
                    </a>
                </div>
                <div className="col">
                    <a className="navbar-brand" href="/about">
                        about
                    </a>
                </div>
                <div className="col">
                    <a className="navbar-brand" href="/projects">
                        My Projects
                    </a>
                </div>
                
                <div className="col">
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
