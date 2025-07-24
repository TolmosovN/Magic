import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import Navbar from "../ui/Navbar1";

export default function Layout({user, logoutHandler}) {
  return (
    <div>
      <Navbar user={user} logoutHandler={logoutHandler}/>
      <Outlet />
    </div>
  );
}
