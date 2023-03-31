import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ControlledCarousel from '../structures/carousel';
import HomeIntro from '../structures/homeintro';

const Home = () => {
    return (
      <div className="home">
        <Container>
      <Row>
        <Col md={5}>
        <HomeIntro/>
        </Col>
        <Col><ControlledCarousel/></Col>
      </Row>
    </Container>
    </div>
    )
  };
  
  export default Home;