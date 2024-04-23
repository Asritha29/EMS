import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import'./home.css'
function Dashboard() {
    return (
      <div className='dashboard'>
        <Container>
          <Row xs={1} md={2} lg={4} className="g-4">
            <Col>
              <Card className='account'>
                <Card.Body>Accountant</Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='admin'>
                <Card.Body>Admin</Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='electrical'>
                <Card.Body>Electrical</Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='hr'>
                <Card.Body>HR</Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <Row xs={1} md={2} lg={4} className="g-4">
            <Col>
              <Card className='it'>
                <Card.Body>IT</Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='infra'>
                <Card.Body>IT Infra</Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='telecom'>
                <Card.Body>Telecom</Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='scanning'>
                <Card.Body>Scanning</Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <br />
          <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
          <Col>
              <Card>
                <Card.Header className='text-center inhouse'>In House</Card.Header>
                <Card.Body className='inbody'>1111</Card.Body>
              </Card>
            </Col>
          <Col>
              <Card>
                <Card.Header className='text-center outsource '>Outsource</Card.Header>
                <Card.Body className='outbody'>1111</Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
  

export default Dashboard