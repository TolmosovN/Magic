import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import MTGCard from '../ui/MTGCard';
import SearchForm from '../ui/SearchForm';
import SearchBar from '../ui/SearchBar';
import { CardList } from 'react-bootstrap-icons';

export default function MainPage({mtgcards, addToCart, setMtgcards}) {

  useEffect(() => {
    axios("/api/cards")
      .then(({ data }) => setMtgcards(data))
      .catch(console.error);
  }, []);

  return (
    <Container className="my-4">
      <h1 className="mb-4">Каталог карт</h1>
      <Container style={{ marginBottom: "5px", border: "2px" }}>
        <SearchForm />
      </Container>
      <Container>
        <SearchBar setCards={setMtgcards} cards={mtgcards} />
        
      </Container>

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
