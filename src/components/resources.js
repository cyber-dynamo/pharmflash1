import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const Resources = () => {
    return (
        <div>
    <Nav variant="tabs" >
      <Nav.Item>
        <Nav.Link eventKey as = {Link} to="prescribing">Prescribing</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey as ={Link} to="medications">Medications</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey as ={Link} to="COVID">COVID</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey as ={Link} to="adaptation">Adaptation</Nav.Link>
      </Nav.Item>
    </Nav>
    <Outlet/>
    <p className='resourcesQuote'>Medicines cure diseases but only pharmacists can cure patients</p>
    </div>
    );
  };
  
  export default Resources;