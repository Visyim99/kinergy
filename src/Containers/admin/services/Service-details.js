import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Form, Table } from "react-bootstrap";
// import { Link } from "react-router-dom";
import AdminLeftMenu from "../AdminLeftMenu";
import Dummyimage from "../../../image/dummy.jpg";
import UploadPreviewEdit from './UploadPreviewEdit';
import { Link } from "react-router-dom";


const Servicedetails = () => {
    const [checked, setChecked] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  // Modal for Add Sub Services
  const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
  return (
    <div className="clients">
      <Container fluid>
        <Row>
            <Col lg={3} sm={4} xs={12}>
                <AdminLeftMenu />
            </Col>
            <Col lg={9} sm={8} xs={12}>
                <div className="text-right">
                    <Button className="btn btn-theme pl-2 pr-2" id="formBtn" onClick={handleShow}>Edit</Button>
                </div>
                <div className="appointment-card">
                    <div className="d-flex justify-content-between align-item-center">
                        <h5><i class="fa-solid fa-chevron-left mr-3"></i> Service Category</h5>
                        <p className="d-flex m-0">
                                  <b>Status : {checked ? 'Active' : 'Inactive'}</b>
                                  <Form>
                            <Form.Check 
                            type="switch"
                            id="custom-switch"
                            className="ml-2"
                            onChange={() => setChecked(!checked)}
                                      />
                                      </Form>
                        </p>
                          </div>
                          <div className="details-sec mt-5 mb-5">
                              <Row>
                                  <Col md={2} sm={4} xs={12}>
                                      <img src={Dummyimage} alt={Dummyimage} className="dmImg" />
                                  </Col>
                                  <Col md={10} sm={8} xs={12}>
                                      <h3 className="det_head">Therapy Services </h3>
                                      <p className="dt-dsc">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                        consequat.
                                      </p>
                                  </Col>
                            </Row>
                          </div>      
                      </div>
                      <div className="appointment-card">
                          <h3 className="det_head">Services</h3>
                          <Table responsive="lg" className="table_s mt-5 mb-5">
                              <thead>
                                  <tr>
                                      <th>Service Name</th>
                                      <th>Status</th>
                                      <th></th>
                                  </tr>
                              </thead>
                          </Table>
                          <div className="text-center">
                            <Button className="btn btn-theme pl-2 pr-2 ml-3 mb-5" id="formBtn" onClick={handleShow1}>+ Add Service</Button>
                          </div>
                      </div>
                      {/* When Services already have listed */}
                      <div className="appointment-card">
                        <div className="d-flex align-items-center justify-content-bewtween">
                        <h3 className="det_head">Services</h3>
                        {/*  onClick={handleShowedit} */}
                        <Button className="btn btn-theme pl-2 pr-2" id="formBtn" onClick={handleShow1}>+ Add Service</Button>
                      </div>  
                        <Table responsive="lg" className="table_s mt-5 mb-5">
                              <thead>
                                  <tr>
                                      <th>Service Name</th>
                                      <th>Status</th>
                                      <th></th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td><img src={Dummyimage} alt={Dummyimage} className="table_img" />Athletic Therapy / Physiotherapy</td>
                                      <td>Active</td>
                                      <td><Link to="/subservice-details" className="lnk">View Details</Link></td>
                                  </tr>
                                  <tr>
                                      <td><img src={Dummyimage} alt={Dummyimage} className="table_img" />Vestibular Rehabilitation</td>
                                      <td>Active</td>
                                      <td><Link to="/subservice-details" className="lnk">View Details</Link></td>
                                  </tr>
                                  <tr>
                                      <td><img src={Dummyimage} alt={Dummyimage} className="table_img" />Video Biochemical Analysis</td>
                                      <td>Active</td>
                                      <td><Link to="/subservice-details" className="lnk">View Details</Link></td>
                                  </tr>
                                  <tr>
                                      <td><img src={Dummyimage} alt={Dummyimage} className="table_img" />Orthotics and Bracing</td>
                                      <td>Active</td>
                                      <td><Link to="/subservice-details" className="lnk">View Details</Link></td>
                                  </tr>
                                  <tr>
                                      <td><img src={Dummyimage} alt={Dummyimage} className="table_img" />External Therapy</td>
                                      <td>Active</td>
                                      <td><Link to="/subservice-details" className="lnk">View Details</Link></td>
                                  </tr>
                                  <tr>
                                      <td><img src={Dummyimage} alt={Dummyimage} className="table_img" />Work Fitness Assessment</td>
                                      <td>Active</td>
                                      <td><Link to="/subservice-details" className="lnk">View Details</Link></td>
                                  </tr>
                              </tbody>
                          </Table>
                          <div className="text-center">
                            
                          </div>
                      </div>
            </Col>
        </Row>
          </Container>
      <Modal
        className="right"
        show={show}
        onHide={handleClose}
        animation={false}
        id="mm"
      >
        <Modal.Header className="border-0 pb-0" closeButton></Modal.Header>
        <Modal.Body>
          <div className="mod_sec">
            <h3 className="md_txt">Edit Service Category</h3>
            <Form>
              <Form.Group className="mb-4 form-type pos-rel">
                <Form.Label className="floatLabel">Service Category*</Form.Label>
                <Form.Control value="Therapy Services" />
              </Form.Group>
              <Form.Group className="mb-4 form-type pos-rel">
                <Form.Label className="floatLabel">Service Description*</Form.Label>
                <Form.Control as="textarea" rows={6} value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
              </Form.Group>
              <Form.Group className="mb-4 form-type">
                <UploadPreviewEdit />
                
              </Form.Group>
              <Form.Group>
                <div className="text-center" id="fxd">
                  <Button className="btn btn-theme-white pl-2 pr-2 mr-3" id="formBtnCnc">
                    Back
                  </Button>
                  <Button className="btn btn-theme pl-2 pr-2 ml-3" id="formBtn">
                    Save
                    </Button>
                  </div>
              </Form.Group>
            </Form>   
          </div>  
        </Modal.Body>
      </Modal>

      {/* Add SubServices Modal */}
      <Modal
        className="right"
        show={show1}
        onHide={handleClose1}
        animation={false}
        id="mm"
      >
        <Modal.Header className="border-0 pb-0" closeButton></Modal.Header>
        <Modal.Body>
          <div className="mod_sec">
            <h3 className="md_txt">Add Service Category</h3>
            <Form>
              <Form.Group className="mb-4 form-type pos-rel">
                <Form.Label className="floatLabel">Service Category*</Form.Label>
                <Form.Control value="Therapy Services" />
              </Form.Group>
              <Form.Group className="mb-4 form-type pos-rel">
                {/* <Form.Label className="floatLabel"></Form.Label> */}
                <Form.Control value="" placeholder="Service Name*"/>
              </Form.Group>
              <Form.Group className="mb-4 form-type pos-rel">
                {/* <Form.Label className="floatLabel">Service Description*</Form.Label> */}
                <Form.Control as="textarea" rows={6} value="" placeholder="Service Description*" />
              </Form.Group>
              <h3 className="md_txt">Initial Consultation Details</h3>
              <Form.Group className="mb-4 form-type pos-rel">
                <Form.Control placeholder="Title" />
              </Form.Group>
              <div className="d-flex align-itmes-center justify-content-between">
                <Form.Group className="mb-4 form-type pos-rel">
                <Form.Select >
                  <option disabled selected>Select Duration*</option>
                  <option>15mins</option>
                  <option>30mins</option>
                  <option>45mins</option>
                  <option>60mins</option>
                  <option>120mins</option>
                  <option>Other</option>
                </Form.Select>
                </Form.Group>
                <Form.Group className="mb-4 form-type pos-rel">
                  <Form.Control placeholder="Price*" />
                </Form.Group>
                <Form.Group className="mb-4 form-type pos-rel">
                  <Link to="#/" className="addm"><i className="fa fa-plus"></i></Link>
                </Form.Group>
              </div>  
              <h3 className="md_txt">Follow-up Appointment Details</h3>
              <div className="d-flex align-itmes-center justify-content-between">
                <Form.Group className="mb-4 form-type pos-rel">
                <Form.Select >
                  <option disabled selected>Select Duration*</option>
                  <option>15mins</option>
                  <option>30mins</option>
                  <option>45mins</option>
                  <option>60mins</option>
                  <option>120mins</option>
                  <option>Other</option>
                </Form.Select>
                </Form.Group>
                <Form.Group className="mb-4 form-type pos-rel">
                  <Form.Control placeholder="Price*" />
                </Form.Group>
                <Form.Group className="mb-4 form-type pos-rel">
                  <Link to="#/" className="addmr"><i className="fa fa-plus"></i></Link>
                </Form.Group>
              </div>  
              <Form.Group className="mb-4 form-type">
                <UploadPreviewEdit />                
              </Form.Group>
              <Form.Group className="df">
                <div className="text-center" id="fxd">
                  <Button className="btn btn-theme-white pl-2 pr-2 mr-3" id="formBtnCnc">
                    Back
                  </Button>
                  <Button className="btn btn-theme pl-2 pr-2 ml-3" id="formBtn">
                    Save
                    </Button>
                  </div>
              </Form.Group>
            </Form>   
          </div>  
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Servicedetails;
