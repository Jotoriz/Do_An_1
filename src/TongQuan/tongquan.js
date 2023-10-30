import { Col, Container, Row } from "react-bootstrap";
import "./tongquan.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faBox,
  faCartShopping,
  faChartSimple,
  faTableColumns,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { publicRoutes, privateRoutes } from "../Router";

function Tongquan() {
  if (window.location.pathname === "/Login") {
    return (
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </Router>
    );
  } else {
    return (
      <Router>
        <Container fluid>
          <Row>
            <Col xl="2" className="left">
              <Row>
                <Col className="logo">
                  <img src="https://downloadr2.apkmirror.com/wp-content/uploads/2023/06/68/64914ac470a9e_com.mihoyo.hoyolab-384x384.png"></img>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="/DashBoard">
                    <p data-text="DashBoard">
                      <FontAwesomeIcon icon={faTableColumns} /> DashBoard
                    </p>
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="/Customer">
                    <p data-text="Customer">
                      <FontAwesomeIcon icon={faUserTie} /> Customer
                    </p>
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="/Products">
                    <p data-text="Products">
                      <FontAwesomeIcon icon={faBox} /> Products
                    </p>
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="/DashBoard">
                    <p data-text="Order">
                      <FontAwesomeIcon icon={faCartShopping} /> Order
                    </p>
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="/Analytics">
                    <p data-text="Analytics">
                      <FontAwesomeIcon icon={faChartSimple} /> Analytics
                    </p>
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <a href="/Login">
                    <p data-text="Logout" style={{ width: "70px" }}>
                      <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </p>
                  </a>
                </Col>
              </Row>
            </Col>
            <Col xl="10" className="right">
              <Routes>
                {publicRoutes.map((route, index) => {
                  const Page = route.component;
                  return (
                    <Route key={index} path={route.path} element={<Page />} />
                  );
                })}
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default Tongquan;
