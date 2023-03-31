import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


const NoPage = () => {
    return (
      <div>
    <h1>Page Error</h1>
    <Button variant="outline-info">Return Home</Button>as {Link} to ="/"
    </div>
    );
  };
  
  export default NoPage;