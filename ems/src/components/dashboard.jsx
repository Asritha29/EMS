import React from 'react';
import { Link } from 'react-router-dom';
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
                <Card.Body>Accountant<br /> <Link to="/account" style={{ color: 'black', fontSize: '25px' }}><MdManageAccounts /></Link></Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='admin'>
                <Card.Body>Administration<br /> <Link className="link" to="/admin" style={{ color: 'black', fontSize: '25px' }}><RiAdminFill /></Link></Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='electrical'>
                <Card.Body>Electrical Commissioning<br /> <Link  to="/electrical" style={{ color: 'black', fontSize: '25px' }}> <GiElectricalResistance /></Link></Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='hr'>
                <Card.Body>Human Resources<br /><Link href="/hr" style={{ color: 'black', fontSize: '25px' }}><GrGroup /></Link></Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <Row xs={1} md={2} lg={4} className="g-4">
            <Col>
              <Card className='it'>
                <Card.Body> IT Solution<br /><Link to="/it" style={{ color: 'black', fontSize: '25px' }}><TbDeviceImacCode /></Link> </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='infra'>
                <Card.Body>IT Infrastructure, Sales & Maintenance &nbsp; <Link to="/infra" style={{ color: 'black', fontSize: '25px' }}><GrHostMaintenance /></Link></Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='telecom'>
                <Card.Body>Telecom Services <br /><Link to="/telecom" style={{ color: 'black', fontSize: '25px' }}><MdOutlineCellTower /></Link></Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='scanning'>
                <Card.Body>Scanning & Digitization<br /><Link  to="/scanning" style={{ color: 'black', fontSize: '25px' }}><MdDocumentScanner /></Link></Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <br />
          <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
          <Col>
              <Card>
                <Card.Header className='text-center inhouse'><Link className="link" to="/inhouse" style={{ color: 'black', fontSize: '20px' }}><HiBuildingOffice2 /></Link> &nbsp; In House</Card.Header>
                <Card.Body className='inbody'>1111</Card.Body>
              </Card>
            </Col>
          <Col>
              <Card>
                <Card.Header className='text-center outsource '> <Link to="/outsource" style={{ color: 'black', fontSize: '20px' }}><MdOutlineContactPhone /></Link> &nbsp; Outsource</Card.Header>
                <Card.Body className='outbody'>1111</Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
  

export default Dashboard