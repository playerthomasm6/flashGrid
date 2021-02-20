import React from "react";
import "./styles.css";
import Jumbotron from "../Jumbotron";
import Sidebar from "../Sidebar";

function HelloFlashGrid() {
    return (
        <div className="container-fluid space-out">

            <div className="row">
                <div className="col-sm-3 side-bar padding">
                  <Sidebar/>
                </div>

                <div className="col-sm-6">
                    <Jumbotron />
                </div>

                <div className="col-sm-3">
                    <h2>What is going on here</h2>
                </div>


            </div>

        </div>
    );
}

export default HelloFlashGrid;
