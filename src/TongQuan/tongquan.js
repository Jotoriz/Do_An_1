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
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Tongquan() {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const pathname = window.location.pathname;
  return (
    <Container fluid>
      <Row>
        {pathname !== "/login" && pathname !== "/profile" && (
          <Col xl="2" className="left">
            <Row>
              <Col className="logo">
                <img src="https://downloadr2.apkmirror.com/wp-content/uploads/2023/06/68/64914ac470a9e_com.mihoyo.hoyolab-384x384.png"></img>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="/">
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
                {!auth.authenticate && (
                  <Link to={"/login"}>
                    <p data-text="Logout" style={{ width: "70px" }}>
                      <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </p>
                  </Link>
                )}
              </Col>
            </Row>
          </Col>
        )}
        <Col className="right">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default Tongquan;
