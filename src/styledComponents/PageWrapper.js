import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import shirt from '../assets/shirt.png';
import shoes from '../assets/shoes.png';
import pants from '../assets/pants.png';

const PageWrapper = ({ title, children, type }) => {
  const icons = { shirt: shirt, shoes: shoes, pants: pants };

  return (
    <Container>
      <Row>
        <Col>
          <h1>
            {title}{' '}
            {type && (
              <img
                style={{ width: 'auto', height: '50px' }}
                src={icons[type]}
                alt={title}
              />
            )}
          </h1>
        </Col>
      </Row>
      {children}
    </Container>
  );
};
export default PageWrapper;
