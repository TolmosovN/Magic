import axios from "axios";
import { useState } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import {  useNavigate } from "react-router";

export default function SignupPage() {
  const { user, setUser } = useState(null);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const signupHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
        const res = await axios.post('api/auth/signup', data);
        setUser(res.data.user);
        navigate('/');
    } catch (error) {
        setError(error.response?.data?.message || "Ошибка регистрации");
        
    }
  }

  return (
    <Container>
      <Card>
        <Card.Body>
          <h2>Регистрация</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={signupHandler}>
            <Form.Group>
              <Form.Label>Имя пользователя</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Введите имя"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Город</Form.Label>
              <Form.Control
                name="city"
                type="text"
                placeholder="Введите ваш город"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Введите email"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Введите пароль"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">Зарегистрироваться</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
