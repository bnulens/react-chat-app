import React from "react";
import Time from "../Time";

import NavItem from "./NavItem";

import {
  MainHeader,
  MainNav,
  NavList,
} from "../../style/compstyling/styledMainNav";

const Navbar = () => {
  return (
    <MainHeader>
      <MainNav>
        <NavList>
          <NavItem link="/">Home</NavItem>
          <NavItem link="/abc">ABC</NavItem>
          <NavItem link="/xyz">XYZ</NavItem>
        </NavList>
        <Time />
      </MainNav>
    </MainHeader>
  );
};

export default Navbar;
