import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Navigate } from "react-router";

export default function NavbarComponent({ user, logoutHandler, cart }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          MAGIC CARDS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Главная
            </Nav.Link>
            {user && (
              <>
                <Nav.Link as={Link} to="/profile">
                  Профиль
                </Nav.Link>
              </>
            )}
          </Nav>
          <Nav>
            {user ? (
              <>
                <Navbar.Text className="me-3">Привет {user.name}!</Navbar.Text>
                <Nav.Link as={Link} to="/cart">
                  Корзина ({cart?.length || 0}) {/* Показываем количество товаров */}
                </Nav.Link>
                <Nav.Link as={Link} to="/" onClick={logoutHandler}>
                  Выйти
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/signin">
                  Войти
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Регистрация
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// import { Link } from "react-router";

// export default function Navbar({ user, logoutHandler }) {
//   return (
//     <header>
//       <h1>MAGIC CARDs</h1>
//       <nav>
//         <Link to="/signup">Регистрация</Link>

//         <Link to="/signin">Войти</Link>
//         <Link to="/">HOME</Link>
//         <Link to="/profile">профиль</Link>
//       </nav>
//     </header>
//   );
// }

