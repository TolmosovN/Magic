import { Link, Navigate } from "react-router";


export default function Navbar({ user, logoutHandler }) {

  
  return (
    <header>
      <h1>MAGIC CARDs</h1>
      <nav>
        <Link to="/signup">Регистрация</Link>
        <Link to="/signin">Войти</Link>
        <Link to="/">HOME</Link>
        <Link to="/profile">профиль{user?.name}</Link>
      </nav>
    </header>
  );
}

