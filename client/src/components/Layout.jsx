import React from "react";
import NavBar from "../components/ui/NavBar";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Layout() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <header>
        <NavBar />
      </header>
      <Container style={{ flexGrow: 1, marginTop: "2rem" }}>
        <Outlet />
      </Container>
    </div>
  );
}
