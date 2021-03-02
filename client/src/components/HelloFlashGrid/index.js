import React from "react";
import "./styles.css";
import Jumbotron from "../Jumbotron";
import Sidebar from "../Sidebar";

function HelloFlashGrid() {
    return (
        <div className="container-fluid space-out">

<div className="row">
                <div className="col-sm-8">
                    <Jumbotron />
                </div>

                <div className="col-sm-4">
                <Sidebar/>
                </div>
            </div>

        </div>
    );
}

export default HelloFlashGrid;
