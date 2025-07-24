import { Link } from "react-router";


export default function Navbar({ user, logoutHandler }) {
  return (
    <header>
      <h1>MAGIC CARDs</h1>
      <nav>
        <Link to="/signup">Регистрация</Link>
        
        <Link to="/signin">Войти</Link>
        <Link to="/signup">Регистрация</Link>
        <Link to="/signin">Войти</Link>
        <Link to="/">HOME</Link>
        <Link to="/cart">Корзина</Link>
        <Link to="/profile">профиль</Link>
      </nav>
    </header>
  );
}

