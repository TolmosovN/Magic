//okok

import { Link } from "react-router";


export default function Navbar({ user, logoutHandler }) {
  return (
    <header>
      <h1>MAGIC CARDs</h1>
      <nav>
        <Link to="/search">Поиск</Link>
        <Link to="/register">Регистрация</Link>
        <Link to="/user">Войти</Link>
        <Link to="/">HOME</Link>
        
      </nav>
    </header>
  );
}