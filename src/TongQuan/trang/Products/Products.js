import { Button, Col, Container, Row, Table } from "react-bootstrap";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOutdent } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import AddProduct from "./AddProduct";
function Products() {
  const [showModal, setShowModal] = useState(false);
  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2000/api/product/getAll")
      .then((response) => response.json())
      .then((data) => setDataCategory(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div>
      <Container>
        <Row className="MenuDashboard">
          <Col xl="2">
            <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faOutdent} />
            <span style={{ marginLeft: "20px" }}>Dashboard</span>
          </Col>
        </Row>
        <Row></Row>
      </Container>
      <Row>
        <Col>
          <h3>Dashboard</h3>
        </Col>
      </Row>
      <Container className="Khung">
        <Row className="title">
          <Col xl="9">
            <h3>Products</h3>
          </Col>
          <Col xl="3">
            <AddProduct></AddProduct>

            <Button variant="danger" className="btn">
              Delete
            </Button>
            <Button variant="warning" className="btn">
              Fix
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Category</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {dataCategory.map((item) => (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.category}</td>
                    <td>{item.name}</td>
                    <td>{item.retail_price}</td>
                    <td>{item.products_id}</td>
                    <td>{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Products;
