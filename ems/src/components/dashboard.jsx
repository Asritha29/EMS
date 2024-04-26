import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MdManageAccounts } from "react-icons/md";
import { GiElectricalResistance } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";
import { PiDevicesLight } from "react-icons/pi";
import { GrHostMaintenance } from "react-icons/gr";
import { MdOutlineCellTower } from "react-icons/md";
import { MdDocumentScanner } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineContactPhone } from "react-icons/md";
import'./home.css'
function Dashboard() {
    return (
      <div className='dashboard'>
        <Container>
          <Row xs={1} md={2} lg={4} className="g-4">
            <Col>
              <Card className='account'>
                <Card.Body>Accountant<br /><MdManageAccounts /></Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='admin'>
                <Card.Body>Administration<br /><RiAdminFill /></Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='electrical'>
                <Card.Body>Electrical Commissioning<br /> <GiElectricalResistance /></Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='hr'>
                <Card.Body>Human Resources<br /><GrGroup /></Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <Row xs={1} md={2} lg={4} className="g-4">
            <Col>
              <Card className='it'>
                <Card.Body> IT Solution<br /><PiDevicesLight /></Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='infra'>
                <Card.Body>IT Infrastructure, Sales & Maintenance &nbsp; <GrHostMaintenance /></Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='telecom'>
                <Card.Body>Telecom Services <br /><MdOutlineCellTower /></Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='scanning'>
                <Card.Body>Scanning & Digitization<br />
                <MdDocumentScanner /></Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <br />
          <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
          <Col>
              <Card>
                <Card.Header className='text-center inhouse'><HiBuildingOffice2 />&nbsp; In House</Card.Header>
                <Card.Body className='inbody'>1111</Card.Body>
              </Card>
            </Col>
          <Col>
              <Card>
                <Card.Header className='text-center outsource '> <MdOutlineContactPhone /> &nbsp; Outsource</Card.Header>
                <Card.Body className='outbody'>1111</Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
  

export default Dashboard