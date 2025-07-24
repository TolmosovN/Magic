import React from "react";
import { Card, Button } from "react-bootstrap";

export default function MTGCard({ mtgcard, addToCart }) {
  const { name, image_url, price, condition, isSold, seller } = mtgcard;

  const handleAddToCart = () => {
    if (!isSold && addToCart) {
      addToCart(mtgcard);
    }
  };

  return (
    <Card style={{ width: "20rem", margin: "1rem" }}>
      <div
        style={{
          width: "100%",
          height: "300px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={image_url}
          alt={name}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            transform: "scale(0.67)",
          }}
        />
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>

        <Card.Text>
          <strong>Цена:</strong> {price} ₽
        </Card.Text>

        <Card.Text>
          <strong>Состояние:</strong> {condition}
        </Card.Text>

        <Card.Text>
          <strong>Город:</strong> {seller.city}
        </Card.Text>

        {isSold ? (
          <Button variant="secondary" disabled>
            Продано
          </Button>
        ) : (
          <Button variant="primary" onClick={handleAddToCart}>
            Добавить в корзину
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
