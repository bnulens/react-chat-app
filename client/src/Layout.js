import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  max-width: 80vw;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <main>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
