import React from "react";
import "./Nav.css";
import { Col, Row, Container } from "../Grid";
let styles = {
  position: "fixed",
  width: "100%",
  height: "10%",
  paddingTop: "2%",
  textAlign: "left",
  backgroundColor: "#5133a4",
  fontWeight: "bold"
};
function Nav() {
  return (
    <Container fluid>
      <div id="toprow" style={styles}>
        <Row>
          <Col size="md-4">
            <h1>Clicky Game</h1>
          </Col>
          <Col size="md-4">
            <h1>Click an image to begin!</h1>
          </Col>
          <Col size="md-4">
            <h1>Score:</h1>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Nav;
