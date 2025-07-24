// import React from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";

// export default function CartPage({ cart, removeFromCart }) {
//   const handleOrder = () => {
//     alert("Заказ оформлен!");
//     // Здесь можно добавить логику отправки заказа на сервер
//   };

//   return (
//     <Container className="p-4">
//       <h2 className="mb-4">Корзина</h2>

//       {cart.length === 0 && <p>Корзина пуста</p>}

//       <Row xs={1} md={2} lg={3} className="g-4">
//         {cart.map((item) => (
//           <Col key={item.id}>
//             <Card>
//               {item.image_url && (
//                 <Card.Img
//                   variant="top"
//                   src={item.image_url}
//                   style={{ height: "200px", objectFit: "contain" }}
//                 />
//               )}
//               <Card.Body>
//                 <Card.Title>{item.name}</Card.Title>
//                 <Card.Text>
//                   Цена: {item.price} ₽
//                 </Card.Text>
//                 <Button
//                   variant="danger"
//                   onClick={() => removeFromCart(item.id)}
//                 >
//                   Удалить
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       {cart.length > 0 && (
//         <div className="mt-4">
//           <Button variant="success" onClick={handleOrder}>
//             Оформить заказ
//           </Button>
//         </div>
//       )}
//     </Container>
//   );
// }


// import React, { useState } from "react";

// export default function CartPage({ cart, removeFromCart, onOrderComplete }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   // Проверка, что данные заполнены
//   const canOrder = name.trim() !== "" && email.trim() !== "" && cart.length > 0;

//   const handleOrder = () => {
//     if (!canOrder) {
//       setMessage("Пожалуйста, заполните имя, email и добавьте товары в корзину.");
//       return;
//     }
//     // Здесь можно отправить заказ на сервер — сейчас просто имитируем
//     alert(`Спасибо за заказ, ${name}! Мы свяжемся с вами по ${email}.`);

//     // Очищаем корзину и форму
//     onOrderComplete(); // должен очистить корзину в родителе
//     setName("");
//     setEmail("");
//     setMessage("");
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Корзина</h2>

//       {cart.length === 0 && <p>Корзина пуста</p>}

//       {cart.map((item) => (
//         <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
//           <b>{item.name}</b> — {item.price} ₽
//           <button
//             onClick={() => removeFromCart(item.id)}
//             style={{ marginLeft: "10px" }}
//           >
//             Удалить
//           </button>
//         </div>
//       ))}

//       {cart.length > 0 && (
//         <>
//           <h3>Ваши данные для заказа</h3>
//           <input
//             type="text"
//             placeholder="Имя"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             style={{ display: "block", marginBottom: "10px", width: "200px" }}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={{ display: "block", marginBottom: "10px", width: "200px" }}
//           />
//           <button onClick={handleOrder} disabled={!canOrder}>
//             Оформить заказ
//           </button>
//           {message && <p style={{ color: "red" }}>{message}</p>}
//         </>
//       )}
//     </div>
//   );
// }


import React, { useState } from "react";

export default function CartPage({ cart, removeFromCart, onOrderComplete }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleOrder = () => {
    alert(`Спасибо за заказ, ${name}! Мы напишем вам на ${email}.`);
    onOrderComplete();
    setName("");
    setEmail("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Корзина</h2>

      {cart.map((item) => (
        <div key={item.id} style={{ border: "1px solid gray", marginBottom: "10px", padding: "10px" }}>
          {item.name} — {item.price} ₽
          <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: "10px" }}>
            Удалить
          </button>
        </div>
      ))}

      <h3>Данные покупателя</h3>
      <input
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: "block", marginBottom: "10px" }}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", marginBottom: "10px" }}
      />
      <button onClick={handleOrder}>Оформить заказ</button>
    </div>
  );
}

