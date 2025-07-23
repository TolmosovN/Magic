import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import Navbar from "../ui/Navbar1";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
