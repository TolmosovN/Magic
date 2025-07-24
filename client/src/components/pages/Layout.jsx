import React from "react";
import NavBar from "../ui/Navbar";
import { Outlet } from "react-router";
import Container from "react-bootstrap/esm/Container";

export default function Layout({ user, logoutHandler }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <header>
        <NavBar user={user} logoutHandler={logoutHandler} />
      </header>
      <Container style={{ flexGrow: 1, marginTop: "2rem" }}>
        <Outlet />
      </Container>
      <footer>c Elbrus</footer>
    </div>
  );
}