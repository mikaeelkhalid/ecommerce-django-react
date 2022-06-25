import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <p>&copy; {year}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
