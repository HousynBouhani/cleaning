import React, { useContext, useEffect, useState, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./login.css";
import AuthContext from "../../../context/auth/authContext";
import ErrorAlert from "../../../components/alerts/ErrorAlert";
import AdminNavbar from "../../admin/navbar/AdminNavbar";

const Login = (props) => {
  const authContext = useContext(AuthContext);

  const { login, errors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/admin");
    }
  }, [errors, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const handleChange = (e) => {
    setUser(
      {
        ...user,
        [e.target.name]: e.target.value,
      },
      props.history
    );
  };

  const submitForm = (e) => {
    e.preventDefault();
    login({
      email,
      password,
    });
  };

  return (
    <Fragment>
      <AdminNavbar />
      <Container className="my-5 login-container">
        <Row className="justify-content-center">
          <Col md={4}>
            <Form onSubmit={(e) => submitForm(e)}>
              <ErrorAlert errors={errors} />
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>
              <Button variant="primary" className="login" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Login;
