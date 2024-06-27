"use client";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState, useEffect } from "react";
import {
  NavBar,
  NavBarBrand,
  Navigation,
  Container,
  MenuButton,
  MenuIcon,
  Separator,
  SideBarItem,
  SideBarLink,
  SideBarHeader,
} from "./styled";

const Topbar = () => {
  const [show, setShow] = useState(false);

  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <NavBar
      bg="dark"
      data-bs-theme="dark"
      className="justify-content-md-center"
    >
      <Container>
        <MenuButton onClick={handleShow}>
          <MenuIcon src="menu.svg" alt="Menu" />
        </MenuButton>
        <NavBarBrand>Mamao</NavBarBrand>
        <Navigation>
          <Navigation.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Navigation.Item>
          <Navigation.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Navigation.Item>
          <Navigation.Item>
            <Nav.Link href="/login">Login</Nav.Link>
          </Navigation.Item>
        </Navigation>
        <Offcanvas show={show} onHide={handleClose} className="offcanvas-dark">
          <SideBarHeader closeButton className="text-white">
            <Offcanvas.Title>選單</Offcanvas.Title>
          </SideBarHeader>
          <Offcanvas.Body className="bg-dark text-white">
            <SideBarItem>
              <SideBarLink href="/">Home</SideBarLink>
            </SideBarItem>
            <Separator />
            <SideBarItem>
              <SideBarLink href="/about">About</SideBarLink>
            </SideBarItem>
            <Separator />
            <SideBarItem>
              <SideBarLink href="/register">Login</SideBarLink>
            </SideBarItem>
            <Separator />
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </NavBar>
  );
};

export default Topbar;
