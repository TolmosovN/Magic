import { Link } from "react-router";


export default function Navbar({ user, logoutHandler }) {
  return (
    <header>
      <h1>MAGIC CARDs</h1>
      <nav>
        <Link to="/signup">Регистрация</Link>
        
        <Link to="/signin">Войти</Link>
        <Link to="/">HOME</Link>
        <Link to="/profile">профиль</Link>
      </nav>
    </header>
  );
}

// import React from "react";
// import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";
// import { FaUser, FaShoppingCart } from "react-icons/fa";

// export default function Navbar() {
//   return (
//     <Navbar bg="light">
//       <Container>
//         <Navbar.Brand href="/">MTG Market</Navbar.Brand>

//         <Form inline>
//           <FormControl type="text" placeholder="Поиск" />
//         </Form>

//         <Nav>
//           <Nav.Link href="/profile">
//             <FaUser />
//           </Nav.Link>
//           <Nav.Link href="/cart">
//             <FaShoppingCart />
//           </Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }
