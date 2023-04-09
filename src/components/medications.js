import React,{useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import data from '../data/mrsdata';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Medications = () => {
  const [copied,setCopied] = useState(false);

  const handleCopy = ()=>{
    setCopied(true);
    setTimeout(()=>setCopied(false),500);
  };

    return (
    <Container>
       <div className='row'>
    {data.map((val)=>{
      return(
        <div className='col-md-4' key ={val.id}>
      <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header>{val.drug}</Accordion.Header>
        <Accordion.Body>
          <h5>{val.condition}</h5>
          <CopyToClipboard text={`${val.condition}`} onCopy={handleCopy}>
          <button variant='primary' size='sm'>
            {copied ? 'Copied!': 'Copy'}
            </button>
          </CopyToClipboard>
          <p>{val.sig}</p>
          <CopyToClipboard text={`${val.sig}`} onCopy={handleCopy}>
          <button variant='primary' size='sm'>
            {copied ? 'Copied!': 'Copy'}
            </button>
          </CopyToClipboard>
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

  