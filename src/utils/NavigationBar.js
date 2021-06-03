import React, { useState } from "react";

import { Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

import icon from "../assets/icon.png";

import { auth, getPizzas } from "./Firebase";

const NavigationBar = ({ userName, setUserName }) => {
  const [testState, setTestState] = useState([]);

  const logoutHandler = async () => {
    auth.signOut();
    setUserName("");
  };

  const test = async () => {
    let testData = await getPizzas();

    //console.log(testData);

    testData.forEach((doc) => {
      console.log(doc.data());
    });

    // let temp = [];
    // for (let pizza of testData) {
    //   temp.push(pizza);
    // }
    // console.log(temp);
  };

  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand eventKey="0" as={Link} to="/">
        <img src={icon} width="50px" alt="Home" />
        <h2>Pizzeria Delizioso</h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {userName ? (
            <>
              <Nav.Item>
                <Nav.Link eventKey="1" as={Link} to="/menu">
                  Menu
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="3"
                  onClick={() => {
                    //console.log(auth);
                    test();
                  }}
                >
                  AAAAAAAAA
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="5" as={Link} to="/" onClick={logoutHandler}>
                  Log out
                </Nav.Link>
              </Nav.Item>
            </>
          ) : (
            <>
              <Nav.Item>
                <Nav.Link
                  eventKey="6"
                  onClick={() => {
                    console.log(auth);
                  }}
                >
                  AAAAAAAAA
                </Nav.Link>
              </Nav.Item>
              <Nav.Link as={Link} to="/login">
                Sign in
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
