import React from "react";

import Chat from "../components/Chat";
import Time from "../components/Time";

import { HomeHeading } from "../style/pagestyling/styledHome";

const Home = () => {
  return (
    <>
      <HomeHeading>
        <h1>Welcome to your chat</h1>
        <Time />
      </HomeHeading>
      <Chat />
    </>
  );
};

export default Home;
