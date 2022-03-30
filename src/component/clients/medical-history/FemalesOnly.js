import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "../../sidenav/Sidebar";

const FemalesOnly = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <div className="appointment-card social-habits">
              <h5 className="pb-2">
                <a href="#/client-details" className="theme-color">
                  <i className="fas fa-chevron-left mr-2"></i>
                </a>
                Females Only
              </h5>
              <p className="m-0">Are you currently</p>
              <hr />
              <Form>
                <Row>
                  <Col lg={8} sm={8} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        Pregnant or attempting to get pregnant?
                      </Form.Label>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          checked
                          label="Yes"
                          name="pregnant"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="pregnant"
                          type={type}
                          id={`inline-${type}-2`}
                        />
                      </div>
                    ))}
                  </Col>
                </Row>

                <Row>
                  <Col lg={8} sm={8} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Nursing?</Form.Label>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          checked
                          label="Yes"
                          name="nursing"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="nursing"
                          type={type}
                          id={`inline-${type}-2`}
                        />
                      </div>
                    ))}
                  </Col>
                </Row>

                <Row>
                  <Col Col lg={12} sm={12} xs={12}>
                    <div className="text-center form-action-btn mt-3">
                      <Button className="btn btn-theme pl-2 pr-2 ml-2">
                        Save
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FemalesOnly;
