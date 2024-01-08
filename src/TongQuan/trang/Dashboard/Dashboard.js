import { Col, Container, Row, Table } from "react-bootstrap";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faB,
  faBagShopping,
  faDollarSign,
  faOutdent,
  faShapes,
  faShop,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
} from "recharts";
import PieChart from "./PieChart";
import { useEffect, useState } from "react";

function Dashboard() {
  const [dataCategory, setDataCategory] = useState([]);
  const [dataCustomer, setDataCustomer] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2000/api/product/getAll")
      .then((response) => response.json())
      .then((data) => setDataCategory(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:2000/api/user/getAll")
      .then((response) => response.json())
      .then((data) => setDataCustomer(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const dataChart = [
    { name: "Jan", "Doanh Thu": 1000, "Chi Phí": 1600 },
    { name: "Feb", "Doanh Thu": 1500, "Chi Phí": 1300 },
    { name: "Mar", "Doanh Thu": 2000, "Chi Phí": 1700 },
    { name: "Apr", "Doanh Thu": 1800, "Chi Phí": 1200 },
    { name: "May", "Doanh Thu": 2200, "Chi Phí": 1500 },
    { name: "Jun", "Doanh Thu": 2500, "Chi Phí": 1900 },
  ];

  return (
    <div>
      <Row className="MenuDashboard">
        <Col xl="2">
          <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faOutdent} />{" "}
          <span style={{ marginLeft: "20px" }}>Dashboard</span>
        </Col>
      </Row>
      <Row></Row>
      <Container>
        <Row>
          <Col>
            <h3>Dashboard</h3>
          </Col>
        </Row>
        <Row>
          <Col className="ItemTop">
            <Row>
              <Col className="IconLeft">
                <FontAwesomeIcon
                  style={{ fontSize: "40px" }}
                  icon={faBagShopping}
                />
              </Col>
              <Col className="SolieuRight">
                <Row>
                  <Col>
                    <h2>1,995</h2>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Total Sales</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col className="ItemTop">
            {" "}
            <Row>
              <Col className="IconLeft">
                <FontAwesomeIcon style={{ fontSize: "40px" }} icon={faShop} />
              </Col>
              <Col className="SolieuRight">
                <Row>
                  <Col>
                    <h2>3,252</h2>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Revenue</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col className="ItemTop">
            {" "}
            <Row>
              <Col className="IconLeft">
                <FontAwesomeIcon style={{ fontSize: "40px" }} icon={faB} />
              </Col>
              <Col className="SolieuRight">
                <Row>
                  <Col>
                    <h2>9,999</h2>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Follower</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col className="ItemTop">
            {" "}
            <Row>
              <Col className="IconLeft">
                <FontAwesomeIcon
                  style={{ fontSize: "40px" }}
                  icon={faDollarSign}
                />
              </Col>
              <Col className="SolieuRight">
                <Row>
                  <Col>
                    <h2>17,540</h2>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Money</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Row style={{ marginTop: "30px" }}>
            <Col xl="8" className="Chart">
              <h3>Revenue Chart</h3>
              <LineChart width={700} height={300} data={dataChart}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="Doanh Thu"
                  fill="#8884d8"
                  stroke="#8884d8"
                />
                <Area
                  type="monotone"
                  dataKey="Chi Phí"
                  fill="#8884d9"
                  stroke="#8884d9"
                />
                <Line type="monotone" dataKey="Doanh Thu" stroke="#8884d8" />
                <Line type="monotone" dataKey="Chi Phí" stroke="#86f7d3" />
              </LineChart>
            </Col>
            <Col xl="3" className="Chart">
              <Row>
                <Col>
                  <h4 style={{ display: "inline" }}>Top Customers</h4>
                  <a style={{ marginLeft: "45px" }} href="/Customer">
                    View All
                  </a>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Table hover>
                    <thead>
                      <tr>
                        <th>User</th>
                        <th>Total Orders</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataCustomer.map((item, index) => (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>{item.totalOrders}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: "30px", marginBottom: "30px" }}>
            <Col>
              <Row>
                <Col className="Chart">
                  <Row>
                    <Col>
                      <h4 style={{ display: "inline" }}>Top Product</h4>
                      <a style={{ marginLeft: "311px" }} href="/Products">
                        View All
                      </a>
                    </Col>
                  </Row>
                  <Table hover>
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>Product Category</th>
                        <th>Product Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataCategory.map((item, index) => (
                        <tr key={item.id}>
                          <td>{index + 1}</td>
                          <td>{item.category}</td>
                          <td>{item.name}</td>
                          <td>{item.brand}</td>
                          <td>
                            {item.retail_price.toLocaleString("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Col>
            <Col className="Chart">
              <Row>
                <Col>
                  <h4 style={{ display: "inline" }}>RECENT TRANSCATION</h4>
                  <a style={{ marginLeft: "241px" }} href="/Products">
                    View All
                  </a>
                </Col>
              </Row>
              <Row style={{ marginTop: "40px", textAlign: "center" }}>
                <Col>
                  <PieChart data={dataCategory} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
