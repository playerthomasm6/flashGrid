import React from "react";
import "./styles.css";
//import logo from "./public/flashgrid.png";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark nav-color">
            <div className="container">
                <div className="row">
                    <img className="logo" src="flashgrid.png"></img>

                    <div className="col">
                        <a className="navbar-brand" href="/">
                            Home
                        </a>
                    </div>

                    <div className="col">
                        <a className="navbar-brand" href="/about">
                            About
                        </a>
                    </div>

                    <div className="col">
                        <a className="navbar-brand" href="/projects">
                            My Projects
                        </a>
                    </div>

                    <div className="col">
                        <a className="navbar-brand" href="/">
                            Login
                        </a>
                    </div>
                </div>

            </div>

         
        </nav>
    );
}

export default Nav;
