import React from "react";
import NavBar from "../ui/Navbar";
import { Outlet } from "react-router";
import Container from "react-bootstrap/esm/Container";
import NavbarComponent from "../ui/Navbar";

export default function Layout({ user, logoutHandler, cart }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <header>
        <NavbarComponent
          user={user}
          logoutHandler={logoutHandler}
          cart={cart}
        />
      </header>
      <Container style={{ flexGrow: 1, marginTop: "2rem" }}>
        <Outlet />
      </Container>
      <footer>© Elbrus Bootcamp</footer>
    </div>
  );
}