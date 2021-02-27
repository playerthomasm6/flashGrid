import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark nav-color">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link className="navbar-brand" to="/">
                            Home
                        </Link>
                    </div>

                    <div className="col">
                        <Link className="navbar-brand" to="/about">
                            About
                        </Link>
                    </div>

                    <div className="col">
                        <Link className="navbar-brand" to="/projects">
                            My Projects
                        </Link>
                    </div>

                    <div className="col">
                        <Link className="navbar-brand" to="/Login">
                            Login
                        </Link>
                    </div>
                </div>

            </div>

         
        </nav>
    );
}

export default Nav;
