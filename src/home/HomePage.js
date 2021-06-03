import React from "react";

import HomePageJumbo from "./HomePageJumbo";
import MessageAuth from "./MessageAuth";
import MessageUnauth from "./MessageUnauth";
import { auth } from "../utils/Firebase";

const HomePage = ({ userName }) => {
  return (
    <HomePageJumbo>
      {auth.currentUser ? (
        <MessageAuth userName={userName} />
      ) : (
        <MessageUnauth />
      )}
    </HomePageJumbo>
  );
};

export default HomePage;
