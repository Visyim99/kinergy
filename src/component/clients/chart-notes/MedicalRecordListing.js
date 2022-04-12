import React from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Pagination,
  ButtonGroup,
  Button,
  ButtonToolbar,
  Dropdown,
  DropdownButton,
  FormControl,
  InputGroup,

} from "react-bootstrap";
import Sidebar from "../../sidenav/Sidebar";
import ClientLeftMenu from "../ClientLeftMenu";


const MedicalRecordListing = () => {

  return (
    <div className="clients">
      <Sidebar />
      <Container fluid className="mt-5">
        <Row>
          <Col lg={2} sm={4} xs={12}>
            <ClientLeftMenu />
          </Col>
          <Col lg={10} sm={8} xs={12}>
            <div className="appointment-card mt-3">
              <ButtonToolbar
                className="justify-content-between mb-3"
                aria-label="Toolbar with Button groups"
              >
                <h5>Medical Records</h5>
             

                <ButtonGroup className="rounded">
                  <Button className="btn btn-theme-white">Filter</Button>
                  <DropdownButton className=" p-0 rounded-0" title="">
                    <Dropdown.Item eventKey="1">Level 1</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Level 2</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Level 3</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Level 4</Dropdown.Item>
                  </DropdownButton>

                  <ButtonGroup className="rounded ml-2 rounded">
                  <InputGroup>
                  <FormControl
                    className="rounded"
                    type="date"
                  />
                </InputGroup>
                  </ButtonGroup>
                  
                  <a href="#/add-new-medical-record" className="btn btn-theme rounded ml-2">
                    + Add New
                  </a>
                </ButtonGroup>
              </ButtonToolbar>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Date of Onset</th>
                    <th>Body Part</th>
                    <th>Body Side</th>
                    <th>Current Case Status</th>
                    <th colSpan="2">Last Provider</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>15-Jan-2022</td>
                    <td>Shoulder / neck</td>
                    <td>Left</td>
                    <td>Open</td>
                    <td>Terill Lobo</td>
                    <td>
                      <a href="#/medical-record-main-page">
                      View Details
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>15-Jan-2022</td>
                    <td>Shoulder / neck</td>
                    <td>Left</td>
                    <td>Open</td>
                    <td>Terill Lobo</td>
                    <td>
                      <a href="#/medical-record-main-page">
                      View Details
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>15-Jan-2022</td>
                    <td>Shoulder / neck</td>
                    <td>Left</td>
                    <td>Open</td>
                    <td>Terill Lobo</td>
                    <td>
                      <a href="#/medical-record-main-page">
                      View Details
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>15-Jan-2022</td>
                    <td>Shoulder / neck</td>
                    <td>Left</td>
                    <td>Open</td>
                    <td>Terill Lobo</td>
                    <td>
                      <a href="#/medical-record-main-page">
                      View Details
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>15-Jan-2022</td>
                    <td>Shoulder / neck</td>
                    <td>Left</td>
                    <td>Open</td>
                    <td>Terill Lobo</td>
                    <td>
                      <a href="#/medical-record-main-page">
                      View Details
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>15-Jan-2022</td>
                    <td>Shoulder / neck</td>
                    <td>Left</td>
                    <td>Open</td>
                    <td>Terill Lobo</td>
                    <td>
                      <a href="#/medical-record-main-page">
                      View Details
                      </a>
                    </td>
                  </tr>

                </tbody>
              </Table>
              <Pagination size="sm">
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </div>
          </Col>
        </Row>
      </Container>

     
    </div>
  );
};

export default MedicalRecordListing;
