import React from "react";
import "./styles.css";


function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark nav-color">
            <div className="container">
                <a href=""><img src="flashgrid-logo-white.png"></img></a>
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
                    <a className="navbar-brand" href="/login">
                        Log In
                    </a>
                </div>
                <div className="col">
                    <a className="navbar-brand" href="/register">
                        Sign In
                    </a>
                </div>
            </div>
                

         
        </nav>
    );
}

export default Nav;
