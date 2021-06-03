import React, { useState } from "react";

import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";

//import useFetch from "use-http";
import { auth } from "../../utils/Firebase";

const Login = ({ setUserName, setLogoutShow }) => {
  const history = useHistory();

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [wrongInput, setWrongInput] = useState(false);

  // const { post, response } = useFetch(
  //   `https://webhomebudget.azurewebsites.net/api/login`
  // );

  const submitHandler = async (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(emailInput, passwordInput)
      .then((u) => {
        console.log("Zalogowano");
        console.log(u);
        setUserName(u.user.displayName);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
    // await post("", {
    //   email: emailInput,
    //   password: passwordInput,
    // }).then((res) => {
    //   if (response.ok) {
    //     sessionStorage.setItem("userToken", res.result.access_Token);
    //     setUserName(res.result.userName);
    //     sessionStorage.setItem("isAuthenticated", true);

    //     history.push("/");
    //   } else {
    //     console.log("wrong");
    //     setWrongInput(true);
    //   }
    // });
  };

  return (
    <>
      <Container className="my-5 w-50 login-space">
        <Row>
          <Col>
            <Form style={{ marginTop: "1rem" }} onSubmit={submitHandler}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className={wrongInput ? "wrong-input" : ""}
                  type="email"
                  placeholder="Email"
                  value={emailInput}
                  onChange={(event) => setEmailInput(event.target.value)}
                  onFocus={() => {
                    setWrongInput(false);
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className={wrongInput ? "wrong-input" : ""}
                  type="password"
                  placeholder="Password"
                  value={passwordInput}
                  onChange={(event) => setPasswordInput(event.target.value)}
                  onFocus={() => {
                    setWrongInput(false);
                  }}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Sign in
              </Button>
              <Button variant="link" href="/register">
                Register new account
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
