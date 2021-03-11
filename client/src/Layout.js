import React from "react";
import styled from "styled-components";

import Navbar from "./components/Navigation/Navbar";

const Container = styled.div`
  margin: 0 auto;
  max-width: 95%;

  @media screen and (min-width: 1080px) {
    max-width: 1080px;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Navbar />
        <main>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
