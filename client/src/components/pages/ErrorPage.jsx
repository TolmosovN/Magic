import React from 'react';
import { Container, Alert } from 'react-bootstrap';

export default function ErrorPage() {
  return (
    <Container className="my-5 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <h1 className="mb-4">Произошла ошибка</h1>
      <Alert variant="danger" style={{ maxWidth: '500px', textAlign: 'center' }}>
        Что-то пошло не так. Пожалуйста, попробуйте позже или вернитесь на главную страницу.
      </Alert>
    </Container>
  );
}
