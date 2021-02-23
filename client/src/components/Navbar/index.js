import React from "react";
import "./styles.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark nav-color">
            <div className="container" id="main_menu">
                <div class="logo_area">
                    <a href=""><img src="flashgrid.png"></img></a>
                </div>
                <div className="row" id="inner_main_menu">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Log In</a></li>
                        <li><a href="">My Projects</a></li>
                    </ul>
                </div>

            </div>

         
        </nav>
    );
}

export default Nav;
