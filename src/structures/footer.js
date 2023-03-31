import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';


import '../App.css';

function Footer() {
  return (
    <Container >
      
      <Row >
        <Col className='columnContent'>
        <Button onClick={() => window.open("https://www.facebook.com/paco.v.chan/", '_blank')}>
          <FaFacebookSquare/>
          </Button>
          </Col>

        <Col className='columnContent'>
        <Button className='iglogo' onClick={() => window.open("https://www.instagram.com/tupaco.2paco/", '_blank')}>
          <BsInstagram/>
          </Button>
          </Col>
        <Col className='columnContent'>
        <Button className='linkedin' onClick={() => window.open("https://www.linkedin.com/in/paco-chan-07972810b/", '_blank')}>
          <BsLinkedin/>
          </Button>
          </Col>
      </Row>
      <Row>
      <Col></Col>
        <Col lg={5} className='columnContent'>© 2018-2023 Paco Chan All rights reserved</Col>
        <Col></Col>
      </Row>
    
    </Container>
  );
}

export default Footer;