import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <a className="navbar-brand" href="/">
                            Home
                        </a>
                    </div>

                    <div className="col">
                        <a className="navbar-brand" href="/">
                            About
                        </a>
                    </div>

                    <div className="col">
                        <a className="navbar-brand" href="/">
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
