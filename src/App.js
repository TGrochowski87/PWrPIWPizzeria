import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import HomePage from "./home/HomePage";
import useSessionStorageState from "./utils/SessionStorageState";
import NavigationBar from "./utils/NavigationBar";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import MenuPage from "./components/menu/MenuPage";
import { auth } from "./utils/Firebase";

import "./styles/App.scss";

function App() {
  const [logoutShow, setLogoutShow] = useState(false);
  const [userName, setUserName] = useSessionStorageState("", "userName");

  return (
    <div className="App">
      <Router>
        <NavigationBar userName={userName} setUserName={setUserName} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <HomePage {...props} userName={userName} />}
          />
          <Route
            path="/login"
            render={(props) => (
              <Login
                {...props}
                setUserName={setUserName}
                setLogoutShow={setLogoutShow}
              />
            )}
          />
          <Route path="/register" component={Register} />
          <Route
            path="/menu"
            render={(props) =>
              auth.currentUser ? (
                <MenuPage {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
