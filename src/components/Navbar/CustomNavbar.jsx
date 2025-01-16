import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';
import { FaArrowLeft } from "react-icons/fa";
import './styles.css';
import profile_logo from '../../../public/img/profile-logo.png';
// import Form from 'react-bootstrap/Form';
const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="CustomNavbar">
      <Container fluid>
        <Navbar.Brand href="#">
          <div className="d-flex justify-content-center align-items-center gap-3 ">
            <FaArrowLeft className="me-3" />
            <div className="text-secondary">Name of the file</div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0"></Nav>
          <div className="d-flex  justify-content-center align-items-center gap-3">
            <div>
              <Form>
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                  label="Auto Save"
                  className="custom-switch"
                />
              </Form>
            </div>
            <div>
              <img src={profile_logo} alt="Profile Logo" />
            </div>
          </div>
        </Navbar.Collapse>
        {/* <div className='d-flex justify-content-center align-items-center gap-3'>
              <div>
              <Form>
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                  label="Auto Save"
                    className="custom-switch"
                />

              </Form>
              </div>
              <div><img src={profile_logo} alt="Profile Logo" /></div>
            </div> */}
      </Container>
    </Navbar>
  );
}

export default CustomNavbar
