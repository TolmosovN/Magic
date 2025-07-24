//okok

import React from "react";
import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";
import { FaUser, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/">MTG Market</Navbar.Brand>

        <Form inline>
          <FormControl type="text" placeholder="Поиск" />
        </Form>

        <Nav>
          <Nav.Link href="/profile">
            <FaUser />
          </Nav.Link>
          <Nav.Link href="/cart">
            <FaShoppingCart />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
