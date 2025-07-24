import React from "react";
import {
  Container,
  Tab,
  Tabs,
  Card,
  Button,
  Form,
  Row,
  Col,
  Badge,
  Image,
  ListGroup,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import {
  Person,
  Box,
  Bag,
  Gear,
  Pencil,
  Plus,
  Trash,
  Upload
} from 'react-bootstrap-icons'
import  { useState } from 'react';
export default function ProfilePage({user, submitHandler}) {
console.log(submitHandler);

  
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [showAddCard, setShowAddCard] = useState(true);

  // Mock data
  const mockUser = {
    name: "Иван Иванов",
    email: "ivan@example.com",
    phone: "+7 (999) 123-45-67",
    city: "Москва",
    totalSales: 42,
    totalPurchases: 15,
    rating: 4.8,
  };

  const mockSellerCards = [
    {
      id: 1,
      name: "Black Lotus",
      price: 25000,
      status: "Продается",
      views: 128,
      image:
        "https://cards.scryfall.io/large/front/0/c/0c082aa8-bf7f-47f2-baf8-43ad253fd7d7.jpg",
    },
    {
      id: 2,
      name: "Mox Pearl",
      price: 18000,
      status: "Продано",
      views: 95,
      image:
        "https://cards.scryfall.io/large/front/3/b/3b0c5b5c-2a1e-4e6d-b5e1-9b58b3a5e5d1.jpg",
    },
  ];

  const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург'];
  const conditions = ['отличное', 'SP', 'MP', 'HP', 'D'];

  const getStatusColor = (status) => {
    switch (status) {
      case "Продается":
        return "success";
      case "Продано":
        return "secondary";
      case "Забронировано":
        return "warning";
      default:
        return "primary";
    }
  };

  return (
    <Container className="py-4">
      {/* Header */}
      <div className="mb-4">
        <h1 className="mb-2">Личный кабинет</h1>
        <p className="text-muted">Управляйте своим профилем и товарами</p>
      </div>

      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-4"
      >
        <Tab eventKey="overview" title={
          <span><Person className="me-1" /> Обзор</span>
        }>
         

          {/* Profile Info */}
          <Card className="mb-4">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title className="mb-0">Информация о профиле</Card.Title>
              <Button
                variant="outline-primary"
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
              >
                <Pencil className="me-1" />
                {isEditing ? "Сохранить" : "Редактировать"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Row className="g-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Имя</Form.Label>
                    <Form.Control 
                      value={user.name}
                      disabled={!isEditing}
                      readOnly={!isEditing}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                      value={user.email}
                      disabled={!isEditing}
                      readOnly={!isEditing}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Город</Form.Label>
                    <Form.Control 
                      value={user.city}
                      disabled={!isEditing}
                      readOnly={!isEditing}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Tab>

        <Tab
          eventKey="my-cards"
          title={
            <span>
              <Box className="me-1" /> Мои карты
            </span>
          }
        >
          <Card className="mb-4">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title className="mb-0">Мои карты</Card.Title>
              <Button onClick={() => setShowAddCard(true)}>
                <Plus className="me-1" />
                Добавить карту
              </Button>
            </Card.Header>
            <Card.Body>
              <Row className="g-3">
                {mockSellerCards.map((card) => (
                  <Col md={6} lg={4} key={card.id}>
                    <Card className="h-100">
                      <div className="ratio ratio-1x1 bg-light p-2">
                        <Image
                          src={card.image}
                          alt={card.name}
                          className="object-fit-contain"
                        />
                      </div>
                      <Card.Body>
                        <h5 className="card-title">{card.name}</h5>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="fw-bold text-primary">
                            {card.price} ₽
                          </span>
                          <Badge bg={getStatusColor(card.status)}>
                            {card.status}
                          </Badge>
                        </div>
                        <p className="text-muted small mb-3">
                          Просмотров: {card.views}
                        </p>
                        <div className="d-grid gap-2 d-sm-flex">
                          <Button
                            variant="outline-primary"
                            className="flex-grow-1"
                          >
                            <Pencil className="me-1" />
                            Изменить
                          </Button>
                          <Button variant="outline-danger">
                            <Trash />
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>

          {showAddCard && (
            <Card className="mb-4">
              <Card.Header>
                <Card.Title>Добавить новую карту</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form  onSubmit={()=>submitHandler()}>
                  <Row className="g-3 mb-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Название карты</Form.Label>
                        <Form.Control placeholder="Введите название карты" name='name'/>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Цена (₽)</Form.Label>
                        <Form.Control type="number" placeholder="0" name='price'/>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Состояние</Form.Label>
                        <Form.Select >
                          <option>Выберите состояние</option>
                          {conditions.map((condition) => (
                            <option key={condition} value={condition}>
                              {condition}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Изображение карты</Form.Label>
                        <Form.Control placeholder="Вставьте ссылку на изображение" name='image_url' />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Описание (опционально)</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Дополнительная информация о карте..." name='image_url' />
                  </Form.Group>
                  <div className="d-flex gap-2">
                    <Button className="flex-grow-1" type='submit'>Добавить карту</Button>
                    <Button 
                      type='submit'
                    >
                      Отмена
                    </Button>
                    <Button type="submit">Отмена</Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          )}
        </Tab>
      </Tabs>
    </Container>
  );
}
