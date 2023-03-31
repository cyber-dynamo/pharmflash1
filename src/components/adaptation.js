import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
const Adaptation =()=>{

    return(

    <div>
        <h1>Adaptation Sample</h1>
    <Table striped bordered hover>
      <tbody>
      <tr>
          <th>Rationale</th>
          <td>
            <p>PharmaNet record indicates patient has been on
                the same dosage for 2 years.
            </p>
            <p>Patient confirms that the condition is monitored regularly</p>
            <p>Patient confirms that follow-up with physician 
                is done at least every 6 months and will be seeing doctor 
                in the near future.
            </p>
            <p>Most recent original prescription was at least within 2 years ago
                and hence is still valid.
            </p>
          </td>
        </tr>
        <tr>
          <th>Instructions to Patients</th>
          <td>
            <p>Use the medicaion as directed</p>
            <p>Continue to monitor the condition regularly</p>
          </td>
        </tr>
        <tr>
          <th>Follow-up PLan</th>
          <td>
            <p>Return to your physician for follow-up as scheduled</p>
          </td>
        </tr>
      </tbody>
    </Table>
    <Container>
      <Row>
        <Col> 
        <Button variant="outline-danger" onClick={() => window.open("https://www.bcpharmacy.ca/system/files/assets/content/2022-10-14_Adapting%20a%20Rx_Cheat%20Sheet.pdf", '_blank')}>
            Cheat Sheet
        </Button>
        </Col>
        <Col>
        <Button variant="outline-success" onClick={() => window.open("https://library.bcpharmacists.org/6_Resources/6-2_PPP/PPP58_Template.pdf", '_blank')}>
            Adaptation Form
        </Button>
        </Col>
      </Row>
    </Container>
    </div>
    )
}

export default Adaptation;