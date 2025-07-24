import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import Navbar from "./ui/колиннавбар";

export default function Layout({ user, logoutHandler }) {
  return (
    <div>
      <Navbar user={user} logoutHandler={logoutHandler} />
      <Outlet />
    </div>
  );
}
