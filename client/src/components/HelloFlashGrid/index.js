import React from "react";
import "./styles.css";
import Jumbotron from "../Jumbotron";
import Sidebar from "../Sidebar";
import { Row, Col } from "react-bootstrap";



function HelloFlashGrid() {

    
    return (
        <div className="container-fluid space-out">

<Row>
                <Col lg={8} md={12}>
                    <Jumbotron />
                </Col>

                <Col lg={4} md={12} id='sidebar'>
                <Sidebar/>

                </Col>
            </Row>


        </div>
    );
}

export default HelloFlashGrid;
