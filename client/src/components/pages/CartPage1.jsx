import React, { useState } from "react";
import { Button, ListGroup, Form } from "react-bootstrap";

export default function CartPage({ cart, removeFromCart, onOrderComplete }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const canOrder = name.trim() !== "" && email.trim() !== "" && cart.length > 0;

  const handleOrder = () => {
    if (!canOrder) {
      setMessage(
        "Пожалуйста, заполните имя, email и добавьте товары в корзину"
      );
      return;
    }

    alert(`Спасибо за заказ, ${name}! Мы свяжемся с вами по ${email}.`);
    onOrderComplete();
    setName("");
    setEmail("");
    setMessage("");
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-4">
      <h2 className="mb-4">Корзина</h2>

      {cart.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <>
          <ListGroup className="mb-4">
            {cart.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong>{item.name}</strong> - {item.price} ₽
                </div>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Удалить
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <div className="mb-4">
            <h4>Итого: {totalPrice} ₽</h4>
          </div>

          <Form className="mb-4">
            <Form.Group className="mb-3">
              <Form.Label>Ваше имя</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введите ваше имя"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Введите ваш email"
              />
            </Form.Group>

            {message && <div className="text-danger mb-3">{message}</div>}

            <Button
              variant="primary"
              onClick={handleOrder}
              disabled={!canOrder}
            >
              Оформить заказ
            </Button>
          </Form>
        </>
      )}
    </div>
  );
}
