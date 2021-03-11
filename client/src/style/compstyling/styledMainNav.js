import styled from "styled-components";

export const MainHeader = styled.header`
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-black);
`;

export const MainNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 95%;
  margin: 0 auto;

  @media screen and (min-width: 1080px) {
    max-width: 1080px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
`;
export const NavLink = styled.a`
  color: var(--color-white);
  padding: 24px;
  transition: all ease 0.4s;
  cursor: pointer;

  :hover {
    color: var(--color-danger);
  }
`;
