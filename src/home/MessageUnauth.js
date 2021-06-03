import React from "react";

import { Link } from "react-router-dom";

import { Button, Col, Container, Row } from "react-bootstrap";

const MessageUnauth = () => {
  return (
    <Container fluid className="text-center">
      <Row className="d-flex justify-content-center mb-3">
        <h1>Pizzeria Delizioso</h1>
      </Row>
      <Row className="d-flex justify-content-center mb-3">
        <h4>
          Before you try our delicious pizza, sign in to your account or create
          a new one!
        </h4>
      </Row>
      <Row>
        <Col sm={6} className="my-1">
          <Button
            as={Link}
            to="/login"
            variant="outline-secondary"
            className="w-75"
          >
            Login
          </Button>
        </Col>
        <Col sm={6} className="my-1">
          <Button
            as={Link}
            to="/register"
            variant="outline-secondary"
            className="w-75"
          >
            Register
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default MessageUnauth;
