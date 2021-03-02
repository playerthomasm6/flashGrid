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
                    <a 
                    onClick={() => {alert("you logged out")}}
                    className="navbar-brand" href="/">
                    Log Out
                    
                </a>
                    
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
                        about
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
