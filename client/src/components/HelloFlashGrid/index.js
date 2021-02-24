import React from "react";
import "./styles.css";
import Jumbotron from "../Jumbotron";
import Sidebar from "../Sidebar";

function HelloFlashGrid() {
    return (
        <div className="container-fluid space-out">

            <div className="row">
                <div className="col-sm-9">
                    <Jumbotron />
                </div>

                <div className="col-sm-3">
                <Sidebar/>
                </div>


            </div>

        </div>
    );
}

export default HelloFlashGrid;
