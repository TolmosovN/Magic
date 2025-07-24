import React from "react";
import { Card, Button } from "react-bootstrap";

export default function MTGCard({ mtgcard }) {
  const { name, image_url, price, condition, isSold, User } = mtgcard;

  return (
    <Card style={{ width: "20rem", margin: "1rem" }}>
      <Card.Img
        variant="top"
        src={image_url}
        alt={name}
        style={{ maxHeight: "300px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>

        <Card.Text>
          <strong>Цена:</strong> {price} ₽
        </Card.Text>

        <Card.Text>
          <strong>Состояние:</strong> {condition}
        </Card.Text>

        <Card.Text>
          <strong>Город:</strong> {User.city}
        </Card.Text>

        {isSold ? (
          <Button variant="secondary" disabled>
            Продано
          </Button>
        ) : (
          <Button variant="primary">Добавить в корзину</Button>
        )}
      </Card.Body>
    </Card>
  );
}
