"use client";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
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
import ListGroup from "react-bootstrap/ListGroup";

const Topbar = () => {
  const [show, setShow] = useState(false);

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
        <Navigation variant="underline" defaultActiveKey="/home">
          <Navigation.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Navigation.Item>
          <Navigation.Item>
            <Nav.Link eventKey="/about">About</Nav.Link>
          </Navigation.Item>
          <Navigation.Item>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
          </Navigation.Item>
        </Navigation>
        <Offcanvas show={show} onHide={handleClose} className="offcanvas-dark">
          <SideBarHeader closeButton className="text-white">
            <Offcanvas.Title>選單</Offcanvas.Title>
          </SideBarHeader>
          <Offcanvas.Body className="bg-dark text-white">
            <SideBarItem>
              <SideBarLink href="/home">Home</SideBarLink>
            </SideBarItem>
            <Separator />
            <SideBarItem>
              <SideBarLink href="/about">About</SideBarLink>
            </SideBarItem>
            <Separator />
            <SideBarItem>
              <SideBarLink href="/pricing">Pricing</SideBarLink>
            </SideBarItem>
            <Separator />
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </NavBar>
  );
};

export default Topbar;
