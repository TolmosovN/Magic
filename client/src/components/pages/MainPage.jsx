import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import MTGCard from "../ui/MTGCard";

export default function MainPage({ addToCart }) {
  const [mtgcards, setMtgcards] = useState([]);

  useEffect(() => {
    axios("/api/")
      .then(({ data }) => setMtgcards(data))
      .catch(console.error);
  }, []);

  return (
    <Container className="my-4">
      <h1 className="mb-4">Каталог карт</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {mtgcards.map((card) => (
          <Col key={card.id}>
            <MTGCard mtgcard={card} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
