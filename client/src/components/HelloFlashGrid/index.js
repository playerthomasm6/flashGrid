import React from "react";
import "./styles.css";
import Jumbotron from "../Jumbotron";
import Sidebar from "../Sidebar";
import { Row, Col } from "react-bootstrap";




function HelloFlashGrid() {

    
    return (
        <body>
            
    
                <div id="back" className="container-fluid space-out">

                    <div className="row">

                        <div className="col-sm-8">
                            <Jumbotron />
                        </div>

                        <div className="col-sm-4" id='sidebar'>
                            <Sidebar />
                        </div>

                    </div>
                </div>
            
        </body>
    );
}

export default HelloFlashGrid;
