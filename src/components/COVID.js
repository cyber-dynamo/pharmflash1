import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const COVID = () => {
    return(
      <Container className= 'mt-4'>
      <Row>   
        <Col></Col>
        <Col lg={7}>
        <h4>2023 Booster</h4>
        <p>* Regardless of the number of booster doses given already!!!</p>
        <p>* Over 80yo</p>
        <p>* 18yo with underlying conditions such as asthma, COPD, blood disorders
          diabetes, cancer, etc. 
        </p>
        <p>* Should be at least 5-6 months from previous dose</p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
      );
  };
  
  export default COVID;