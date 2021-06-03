import React from "react";

import { Button, Col, Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

const MessageAuth = ({ userName }) => {
  return (
    <Container fluid className="text-center">
      <Row className="d-flex justify-content-center mb-3">
        <h1>Pizzeria Delizioso</h1>
      </Row>
      <Row className="d-flex justify-content-center mb-3">
        <h4>
          Welcome <b>{userName}</b>! Let's go and check the menu! Or maybe
          compose your own perfect pizza?
        </h4>
      </Row>
      <Row>
        <Col sm={6} className="my-1">
          <Button
            as={Link}
            to="/menu"
            variant="outline-secondary"
            className="w-75"
          >
            Menu
          </Button>
        </Col>
        <Col sm={6} className="my-1">
          <Button
            as={Link}
            to="/compose"
            variant="outline-secondary"
            className="w-75"
          >
            Compose
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default MessageAuth;
