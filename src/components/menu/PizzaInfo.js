import React, { useEffect, useState } from "react";
import { Form, Container, Row, Col, FormControl, Image } from "react-bootstrap";

import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import Pointer from "./Pointer";

const PizzaInfo = ({ pizza }) => {
  const [selectedPrice, setSelectedPrice] = useState(0);

  // useEffect(() => {
  //   setSelectedPrice(pizza.prices[0]);
  // }, [pizza]);

  return (
    <Container fluid className="menu-pizza">
      <Row style={{ height: "100%" }}>
        <Col xs={3}>
          <Image src={pizza.url} alt="pizza" />
        </Col>
        <Col xs={6}>
          <Row>
            <h1>{pizza.name}</h1>
          </Row>
          <Row>
            <h5>{`Składniki: ${pizza.ingredients.map((i) => ` ${i}`)}`}</h5>
          </Row>
        </Col>
        <Col xs={3} style={{ padding: "1.5rem 0" }}>
          <Row
            style={{ cursor: "pointer" }}
            onClick={() => {
              setSelectedPrice(0);
            }}
          >
            <Col xs={7}>
              <p>Duża 42 cm</p>
            </Col>
            <Col xs={5}>
              <p>{`${pizza.prices[0].toPrecision(4)} zł`}</p>
              <Pointer selected={selectedPrice === 0 ? true : false} />
            </Col>
          </Row>
          <Row
            style={{ cursor: "pointer" }}
            onClick={() => {
              setSelectedPrice(1);
            }}
          >
            <Col xs={7}>
              <p>Średnia 32 cm</p>
            </Col>
            <Col xs={5}>
              <p>{`${pizza.prices[1].toPrecision(4)} zł`}</p>
              <Pointer selected={selectedPrice === 1 ? true : false} />
            </Col>
          </Row>
          <Row
            style={{ cursor: "pointer" }}
            onClick={() => {
              setSelectedPrice(2);
            }}
          >
            <Col xs={7}>
              <p>Mała 24 cm</p>
            </Col>
            <Col xs={5}>
              <p>{`${pizza.prices[2].toPrecision(4)} zł`}</p>
              <Pointer selected={selectedPrice === 2 ? true : false} />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", marginTop: "15px" }}>
            <Button
              variant="outlined"
              onClick={() => {
                console.log(pizza.url);
              }}
            >
              <ShoppingCartIcon style={{ marginRight: "5px" }} />
              <h5>{pizza.prices[selectedPrice].toPrecision(4)} zł</h5>
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PizzaInfo;
