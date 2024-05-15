import styled from "styled-components";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BREAKPOINT } from "@/constants";

export const NavBar = styled(Navbar)``;

export const NavBarBrand = styled(Navbar.Brand)`
  padding: 0.5em;
`;

export const Navigation = styled(Nav)`
  margin-left: 0px;
  display: flex;
  justify-content: end;
  align-items: center;

  @media ${BREAKPOINT.MOBILE} {
    display: none;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1em;

  @media ${BREAKPOINT.MOBILE} {
    justify-content: start;
    gap: 1em;
  }
`;

export const NavBarCollapse = styled(NavBar.Collapse)`
  margin-right: 0px;
`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 1em;
  cursor: pointer;
  display: none;

  @media ${BREAKPOINT.MOBILE} {
    display: block;
  }
`;

export const MenuIcon = styled.img`
  max-width: 2em;
`;

export const Separator = styled.div`
  width: 100%;
  border-bottom: 1px solid #ccc; /* Example border style */
  margin: 1em 0; /* Example margin */
`;

export const SideBarItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SideBarLink = styled.a`
  text-decoration: none;
  background-color: transparent;
  color: rgb(255, 255, 255);
`;

export const SideBarHeader = styled(Offcanvas.Header)`
  background-color: rgb(89, 89, 89);
`;
