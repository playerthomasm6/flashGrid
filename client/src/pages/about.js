import React from 'react';
import Nav from "../components/Navbar/index";
import Jumbotron from "../components/Jumbotron2/index";
// import Wrapper from "../components/Wrapper/index";
// import Card from '../components/Card/Card';
import CardSection from '../components/CardSection/CardSection';

function about() {
    return (
        <div>
            <Nav />
            <Jumbotron />
            {/* <Wrapper /> */}
            <CardSection/>
        </div>
        
    )
}

export default about
