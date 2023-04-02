import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaClinicMedical} from 'react-icons/fa';

function Layout() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand as={Link} to="/"><FaClinicMedical/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="about" >About</Nav.Link>
            <Nav.Link as={Link} to="resources" >Resources</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => window.open("https://find.healthlinkbc.ca/ResourceView2.aspx?org=53965&agencynum=17659033", '_blank')}>
              Park Pacific Pharmacy
              </Nav.Link>
            <Nav.Link eventKey={2} onClick={() => window.open("https://find.healthlinkbc.ca/ResourceView2.aspx?org=53965&agencynum=17668383", '_blank')}>
              Service Plus Pharmacy
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    
     
    </div>
  );
}

export default Layout;

