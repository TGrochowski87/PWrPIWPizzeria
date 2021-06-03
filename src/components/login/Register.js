import { SignalCellularNoSimOutlined } from "@material-ui/icons";
import React, { useState } from "react";

import { Form, Button, Container, Row, Col } from "react-bootstrap";

import { useHistory } from "react-router";

//import useFetch from "use-http";
import { auth } from "../../utils/Firebase";

const Register = () => {
  const history = useHistory();

  const [usernameInput, setUsernameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  // const { post, response } = useFetch(
  //   "https://webhomebudget.azurewebsites.net/api/register"
  // );

  const submitHandler = async (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(emailInput, passwordInput)
      .then(() => {
        auth
          .signInWithEmailAndPassword(emailInput, passwordInput)
          .then((loggedUser) => {
            loggedUser.user.updateProfile({
              displayName: usernameInput,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });

    //const fd = new FormData();

    // const data = {
    //   password: passwordInput,
    //   email: emailInput,
    //   name: usernameInput,
    // };
    // fd.append("user", JSON.stringify(data));

    // await post("", fd);

    // if (response.ok) {
    //   history.push("/login");
    // }
  };

  return (
    <>
      <Container className="my-5 w-50 login-space">
        <Row>
          <Col>
            <Form style={{ marginTop: "1rem" }} onSubmit={submitHandler}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="login"
                  placeholder="Username"
                  value={usernameInput}
                  onChange={(event) => setUsernameInput(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={emailInput}
                  onChange={(event) => setEmailInput(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={passwordInput}
                  onChange={(event) => setPasswordInput(event.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Sign up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
