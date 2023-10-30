import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập tại đây
  };
  const handleLinkClick = () => {
    // Điều hướng đến trang mới
    window.location.href = "/";

    if (window.location.pathname === "/") {
      window.location.reload();
    }
  };
  return (
    <Container>
      <Row>
        <Col className="allForm">
          <h2 className="text-center">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="label">
                <p className="label">Email</p>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Email"
                value={username}
                onChange={handleUsernameChange}
                className="form"
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>
                <p className="label">Password</p>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                className="form"
              />
            </Form.Group>
            <Link to="/" onClick={handleLinkClick}>
              <Button className="submit primary" type="submit" block>
                Login
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
