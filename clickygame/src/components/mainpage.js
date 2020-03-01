import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Section from "../components/Images";

const styles = {
  card: {
    background: "#e8eaf6"
  },
  heading: {
    background: "#9a74db",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white"
    // padding: "0 20px"
  }
};

function mainpage() {
  return (
    <Container fluid>
      <div className="jumbo">
        <Jumbotron>
          <h1>Clicky Game</h1>
        </Jumbotron>

        <Row>
          <Col size="md-3">
            <button
              imageurl="../assets/images/bird-person.png"
              title="Press me"
              color="#f194ff"
              onClick={() => console.log("Button with adjusted color pressed")}
            />
          </Col>
          <Col size="md-3">
            <Jumbotron>
              <h1>Img2</h1>
            </Jumbotron>
          </Col>
          <Col size="md-3">
            <Jumbotron>
              <h1>Img3</h1>
            </Jumbotron>
          </Col>
          <Col size="md-3">
            <Jumbotron>
              <h1>Img4</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-3">
            <Jumbotron>
              <h1>Img5</h1>
            </Jumbotron>
          </Col>
          <Col size="md-3">
            <Jumbotron>
              <h1>Img6</h1>
            </Jumbotron>
          </Col>
          <Col size="md-3">
            <Jumbotron>
              <h1>Img7</h1>
            </Jumbotron>
          </Col>
          <Col size="md-3">
            <Jumbotron>
              <h1>Img8</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-3">
            <Jumbotron>
              <h1>Img9</h1>
            </Jumbotron>
          </Col>
          <Col size="md-3">
            <Jumbotron>
              <h1>Img10</h1>
            </Jumbotron>
          </Col>
          <Col size="md-3">
            <Jumbotron>
              <h1>Img11</h1>
            </Jumbotron>
          </Col>
          <Col size="md-3">
            <Jumbotron>
              <h1>Img12</h1>
            </Jumbotron>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default mainpage;
