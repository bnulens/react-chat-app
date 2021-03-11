import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledlListItem = styled.li`
  display: block;
`;
const StyledNavLink = styled(NavLink)`
  margin: 0 16px;
  color: var(--color-white);
`;

const NavItem = ({ link, clicked, children }) => {
  return (
    <StyledlListItem>
      <StyledNavLink to={link} onClick={clicked}>
        {children}
      </StyledNavLink>
    </StyledlListItem>
  );
};

export default NavItem;
