import { useState } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";

export default function SignupPage({ signupHandler }) {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    city: "",
  });
  

  return (
    <Container>
      <Card>
        <Card.Body>
          <h2>Регистрация</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              signupHandler(formData);
            }}
          >
            <Form.Group>
              <Form.Label>Имя пользователя</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Введите имя"
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
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
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, city: e.target.value }))
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Введите email"
                required
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Введите пароль"
                required
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, password: e.target.value }))
                }
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Зарегистрироваться
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
