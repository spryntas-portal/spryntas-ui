import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Media } from 'reactstrap';
import logo from '../assets/images/logo.png';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { login } from "../actions/login";

const LoginForm =  props => {
  const { handleSubmit, error, info, processError } = props;
  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="8">
          {/* <CardGroup>
              <Card className="p-4">
                <CardBody><Media src={logo} /></CardBody>
              </Card>
              <Card className="p-4">
                <CardBody>Software Solutions</CardBody>
              </Card>
            </CardGroup> */}
            <CardGroup>
              <Card className="p-4">
              {/* <CardBody>Image</CardBody> */}
                <CardBody>
                  <Form  onSubmit={handleSubmit(() =>
                    props.dispatch(login)
                  )}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>

                   

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      {/* <Input type="text" placeholder="Username" autoComplete="username" /> */}
                        <Field
                          name="email"
                          component="input"
                          type="text"
                          placeholder="Username"
                          className="form-control"
                      />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                        <Field
                          name="password"
                          component="input"
                          type="text"
                          placeholder="Password"
                          className="form-control"
                      />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button color="primary" className="px-4">Login</Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">Forgot password?</Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
              <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                {/* <CardBody>
                  software solution
                </CardBody> */}
                <CardBody className="text-center">
                  <div>
                    <Media src={logo} />
                    {/* <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                    </Link> */}
                  </div>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );

}
export default reduxForm({
  form: 'login', 
})(connect()(LoginForm));
