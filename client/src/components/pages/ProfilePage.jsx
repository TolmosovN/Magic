import { useEffect, useState } from "react";
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
  Upload,
} from "react-bootstrap-icons";

import { Navigate } from "react-router";
export default function ProfilePage({ user, submitHandler, mtgcards }) {
  console.log(submitHandler);

  const [activeTab, setActiveTab] = useState("overview");
  const [isEditing, setIsEditing] = useState(true);
  const [showAddCard, setShowAddCard] = useState(true);

  const conditions = ["Новое", "Отличное", "Хорошее", "Удовлетворительное"];

 

  if (!user) {
    return <Navigate to="/" />;
  }

  const [filtermtgCards, setFiltermtgCards] = useState(
    mtgcards.filter((card) => card.userId === user.id)
  );
  useEffect(() => {
    setFiltermtgCards(mtgcards.filter((card) => card.userId === user.id));
  }, [mtgcards, user.id]);

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
        <Tab
          eventKey="overview"
          title={
            <span>
              <Person className="me-1" /> Обзор
            </span>
          }
        >
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
                    <Form.Control value={user.name} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={user.email} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Город</Form.Label>
                    <Form.Control value={user.city} />
                  </Form.Group>
                </Col>
                <Col md={6}></Col>
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
            </Card.Header>
            <Card.Body>
              <Row className="g-3">
                {filtermtgCards.map((card) => (
                  <Col md={6} lg={4} key={card.id}>
                    <Card className="h-100">
                      <div className="ratio ratio-1x1 bg-light p-2">
                        <Image
                          src={card.image_url}
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
                          <Badge>{card.isSold}</Badge>
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
                <Form onSubmit={(e) => submitHandler(e)}>
                  <Row className="g-3 mb-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Название карты</Form.Label>
                        <Form.Control
                          placeholder="Введите название карты"
                          name="name"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Цена (₽)</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="0"
                          name="price"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Состояние</Form.Label>
                        <Form.Select name="condition">
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
                        <Form.Control
                          placeholder="Вставьте ссылку на изображение"
                          name="image_url"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="d-flex gap-2">
                    <Button className="flex-grow-1" type="submit">
                      Добавить карту
                    </Button>
                    <Button type="submit">Отмена</Button>
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
