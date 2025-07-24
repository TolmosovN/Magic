// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// // import { NavLink } from 'react-router';
// import Card from '../ui/Card';

// export default function MainPage() {
//   const [mtgcards, setMtgcards] = useState([]);
//   useEffect(() => {
//     axios('/api/').then(({ data }) => setMtgcards(data));
//   }, []);

//   return (
//     <>
//       <main role="main">
//         <ul className="entries-list no-bullets no-padding">
//           {mtgcards?.map((el) => (
//             <Card key={el.id} mtgcard={el} />
//           ))}
//         </ul>
//       </main>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../ui/Card"; // твой компонент карточки

export default function MainPage({mtgcards}) {


  return (
    <Container className="my-4">
      <h1 className="mb-4">Каталог карт</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {mtgcards.map((card) => (
          <Col key={card.id}>
            <Card mtgcard={card} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
