import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import data from '../data/mrsdata';

const Medications = () => {

/* initial list */
  const [medList,setMedList]= useState(data)

    return (
    <Container>
       <div className='row'>
    {medList.map((val)=>{
      return(
        <div className='col-md-4' key ={val.id}>
      <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header>{val.drug}</Accordion.Header>
        <Accordion.Body>
          <h5>{val.condition}</h5>
          <p>{val.engsig}</p>
          <p>{val.chisig}</p>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      </div>
      )
    })
    }
    </div>
   </Container>
    )  
};
  
  export default Medications;

  