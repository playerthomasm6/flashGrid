import React from "react";
import "./Card.css";
import { Container, Row, Col } from "react-bootstrap";
const Card = (props) => {
  const { Icon, Title, Content } = props
  return (
    <>
      <Container>
        <Row id='cardRow'>
          <Col>
            <div className="card" id='serviceCard'>
              <br></br>
            <h2 className="cardCon">{Icon}</h2>
              <br></br>
              <h3 className="boxHeader">
              {Title}​</h3>
              <br></br>
              <p>{Content}
              </p>
              <br></br>
              
              <br></br>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Card;
