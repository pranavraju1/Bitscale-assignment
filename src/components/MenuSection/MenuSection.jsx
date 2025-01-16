import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';
import { FaArrowLeft } from "react-icons/fa";
import profile_logo from '../../../public/img/profile-logo.png';
const MenuSection = () => {
  return (
    <div className="MenuSection ">
      <Navbar expand="lg" className="h-100">
        <Container fluid>
          <Navbar.Brand href="#">
            <div className="d-flex justify-content-center align-items-center me-3">
              <div className="searchComponentContainer ps-3 d-flex justify-content-between align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="searchIcon"
                >
                  <path
                    d="M14 14L10.0001 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
                    stroke="#1F2A37"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="w-100">
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="Search"
                        className="custom-input"
                      />
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <div className="d-flex gap-2 justify-content-center align-items-center me-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M2 6H14M2 10H14M5.2 2H10.8C11.9201 2 12.4802 2 12.908 2.21799C13.2843 2.40973 13.5903 2.71569 13.782 3.09202C14 3.51984 14 4.0799 14 5.2V10.8C14 11.9201 14 12.4802 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.4802 14 11.9201 14 10.8 14H5.2C4.07989 14 3.51984 14 3.09202 13.782C2.71569 13.5903 2.40973 13.2843 2.21799 12.908C2 12.4802 2 11.9201 2 10.8V5.2C2 4.07989 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2Z"
                    stroke="#1F2A37"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="fw-semibold">1/1 Row</div>
              </div>
              <div className="d-flex gap-2 justify-content-center align-items-center me-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M6 2V14M10 2V14M5.2 2H10.8C11.9201 2 12.4802 2 12.908 2.21799C13.2843 2.40973 13.5903 2.71569 13.782 3.09202C14 3.51984 14 4.0799 14 5.2V10.8C14 11.9201 14 12.4802 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.4802 14 11.9201 14 10.8 14H5.2C4.07989 14 3.51984 14 3.09202 13.782C2.71569 13.5903 2.40973 13.2843 2.21799 12.908C2 12.4802 2 11.9201 2 10.8V5.2C2 4.07989 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2Z"
                    stroke="#1F2A37"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="fw-semibold">3/3 Column</div>
              </div>
              <div className="d-flex gap-2 justify-content-center align-items-center me-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M2.25759 3.77791C1.75336 3.21437 1.50125 2.93259 1.49174 2.69312C1.48348 2.48509 1.57287 2.28515 1.73341 2.15259C1.91822 2 2.29632 2 3.05251 2H12.9478C13.704 2 14.0821 2 14.2669 2.15259C14.4274 2.28515 14.5168 2.48509 14.5086 2.69312C14.4991 2.93259 14.247 3.21437 13.7427 3.77791L9.93856 8.02962C9.83805 8.14196 9.7878 8.19813 9.75196 8.26205C9.72018 8.31875 9.69686 8.37978 9.68274 8.44323C9.66682 8.51476 9.66682 8.59013 9.66682 8.74087V12.3056C9.66682 12.436 9.66682 12.5011 9.6458 12.5575C9.62722 12.6073 9.597 12.6519 9.55766 12.6877C9.51314 12.7281 9.45261 12.7524 9.33156 12.8008L7.0649 13.7074C6.81987 13.8054 6.69735 13.8545 6.599 13.834C6.513 13.8161 6.43753 13.765 6.38899 13.6918C6.33349 13.6081 6.33349 13.4762 6.33349 13.2122V8.74087C6.33349 8.59013 6.33349 8.51476 6.31757 8.44323C6.30345 8.37978 6.28013 8.31875 6.24835 8.26205C6.21251 8.19813 6.16226 8.14196 6.06175 8.02962L2.25759 3.77791Z"
                    stroke="#1F2A37"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="fw-semibold">0 Filter</div>
              </div>
              <div className="d-flex gap-2 justify-content-center align-items-center me-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M11.3333 2.6665V13.3332M11.3333 13.3332L8.66667 10.6665M11.3333 13.3332L14 10.6665M4.66667 13.3332V2.6665M4.66667 2.6665L2 5.33317M4.66667 2.6665L7.33333 5.33317"
                    stroke="#1F2A37"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="fw-semibold">Sort</div>
              </div>
            </Nav>
            <div className="d-flex  justify-content-center align-items-center gap-3 me-3">
              <div>
                <button className="btn enrichBtn d-flex gap-2 justify-content-center align-items-center px-3 py-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1815_2152)">
                        <path
                          d="M2.99967 14.6668V11.3335M2.99967 4.66683V1.3335M1.33301 3.00016H4.66634M1.33301 13.0002H4.66634M8.66634 2.00016L7.51022 5.00607C7.32221 5.49489 7.22821 5.7393 7.08203 5.94489C6.95247 6.12709 6.79327 6.28629 6.61106 6.41585C6.40548 6.56203 6.16107 6.65604 5.67225 6.84404L2.66634 8.00016L5.67225 9.15628C6.16107 9.34429 6.40548 9.43829 6.61107 9.58448C6.79327 9.71404 6.95247 9.87323 7.08203 10.0554C7.22821 10.261 7.32221 10.5054 7.51022 10.9943L8.66634 14.0002L9.82246 10.9943C10.0105 10.5054 10.1045 10.261 10.2507 10.0554C10.3802 9.87323 10.5394 9.71404 10.7216 9.58448C10.9272 9.43829 11.1716 9.34429 11.6604 9.15628L14.6663 8.00016L11.6604 6.84404C11.1716 6.65604 10.9272 6.56203 10.7216 6.41585C10.5394 6.28629 10.3802 6.12709 10.2507 5.94489C10.1045 5.7393 10.0105 5.49489 9.82246 5.00607L8.66634 2.00016Z"
                          stroke="white"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1815_2152">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="text-white">Enrich</div>
                </button>
              </div>
              <div className="d-flex justify-content-center align-items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M6.4425 10.1325L11.565 13.1175M11.5575 4.8825L6.4425 7.8675M15.75 3.75C15.75 4.99264 14.7426 6 13.5 6C12.2574 6 11.25 4.99264 11.25 3.75C11.25 2.50736 12.2574 1.5 13.5 1.5C14.7426 1.5 15.75 2.50736 15.75 3.75ZM6.75 9C6.75 10.2426 5.74264 11.25 4.5 11.25C3.25736 11.25 2.25 10.2426 2.25 9C2.25 7.75736 3.25736 6.75 4.5 6.75C5.74264 6.75 6.75 7.75736 6.75 9ZM15.75 14.25C15.75 15.4926 14.7426 16.5 13.5 16.5C12.2574 16.5 11.25 15.4926 11.25 14.25C11.25 13.0074 12.2574 12 13.5 12C14.7426 12 15.75 13.0074 15.75 14.25Z"
                    stroke="#1F2A37"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M15.75 11.25V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V11.25M5.25 7.5L9 11.25M9 11.25L12.75 7.5M9 11.25V2.25"
                    stroke="#1F2A37"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M6.75 2.25H11.25M2.25 4.5H15.75M14.25 4.5L13.724 12.3895C13.6451 13.5732 13.6057 14.165 13.35 14.6138C13.1249 15.0088 12.7854 15.3265 12.3762 15.5248C11.9115 15.75 11.3183 15.75 10.132 15.75H7.86799C6.68168 15.75 6.08852 15.75 5.62375 15.5248C5.21457 15.3265 4.87507 15.0088 4.64999 14.6138C4.39433 14.165 4.35488 13.5732 4.27596 12.3895L3.75 4.5M7.5 7.875V11.625M10.5 7.875V11.625"
                    stroke="#E02424"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  ); 
}

export default MenuSection
