import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MdManageAccounts } from "react-icons/md";
import { GiElectricalResistance } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";
import { TbDeviceImacCode } from "react-icons/tb";
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
                <Card.Body>Accountant<br /> <a className="link" href="/accountant" style={{ color: 'black', fontSize: '25px' }}><MdManageAccounts /></a></Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='admin'>
                <Card.Body>Administration<br /> <a className="link" href="/admin" style={{ color: 'black', fontSize: '25px' }}><RiAdminFill /></a></Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='electrical'>
                <Card.Body>Electrical Commissioning<br /> <a className="link" href="/electrical" style={{ color: 'black', fontSize: '25px' }}> <GiElectricalResistance /></a></Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='hr'>
                <Card.Body>Human Resources<br /><a className="link" href="/hr" style={{ color: 'black', fontSize: '25px' }}><GrGroup /></a></Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <Row xs={1} md={2} lg={4} className="g-4">
            <Col>
              <Card className='it'>
                <Card.Body> IT Solution<br /><a className="link" href="/it" style={{ color: 'black', fontSize: '25px' }}><TbDeviceImacCode /></a> </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='infra'>
                <Card.Body>IT Infrastructure, Sales & Maintenance &nbsp; <a className="link" href="/infra" style={{ color: 'black', fontSize: '25px' }}><GrHostMaintenance /></a></Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='telecom'>
                <Card.Body>Telecom Services <br /><a className="link" href="/telecom" style={{ color: 'black', fontSize: '25px' }}><MdOutlineCellTower /></a></Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='scanning'>
                <Card.Body>Scanning & Digitization<br /><a className="link" href="/scanning" style={{ color: 'black', fontSize: '25px' }}>
                <MdDocumentScanner /></a></Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <br />
          <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
          <Col>
              <Card>
                <Card.Header className='text-center inhouse'><a className="link" href="/inhouse" style={{ color: 'black', fontSize: '20px' }}><HiBuildingOffice2 /></a> &nbsp; In House</Card.Header>
                <Card.Body className='inbody'>1111</Card.Body>
              </Card>
            </Col>
          <Col>
              <Card>
                <Card.Header className='text-center outsource '> <a className="link" href="/outsource" style={{ color: 'black', fontSize: '20px' }}><MdOutlineContactPhone /></a> &nbsp; Outsource</Card.Header>
                <Card.Body className='outbody'>1111</Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
  

export default Dashboard