import "./MainPage.css";

import { React } from "react";
import { Button, Alert } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import photo from "./earth-americas-solid.svg";
import { Carousel } from "react-bootstrap";
import one from "../image/a.jpeg";
import two from "../image/b.jpeg";
// import three from "../image/react.png";
import { ListGroup } from "react-bootstrap";
import four from "./shuffle-solid.svg";
import five from "./magnifying-glass-solid.svg";
import { ProgressBar } from "react-bootstrap";

const MainPage = () => {
  return (
    <div>
      {/* /////////////////////////////////////////////// Navigation bar ////////////////////////////////////////////////////////////////// */}

      <Navbar bg="light" expand="lg" style={{ Color: "black" }}>
        <Container fluid>
          <Navbar.Brand href="#" style={{ color: "black" }}>
            <img src={photo} style={{ height: "1rem", width: "1rem" }} /> logo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>

              <Nav.Link href="#">Products</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Services </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="Email"
                placeholder="Email"
                className="me-2"
                aria-label="Search"
              />
              <Form.Control
                type="password"
                placeholder="Password"
                className="me-2"
                aria-label="Search"
              />

              <Button variant="outline-success">In</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ///////////////////////////////////////////// close of navigation bar ///////////////////////////////////////////////////////////// */}

      {/* //////////////////////////////////////////////// Slider starts here //////////////////////////////////////////////////////////////// */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={one}
            alt="First slide"
            style={{ height: "30rem" }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={two}
            alt="Second slide"
            style={{ height: "30rem" }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={two}
            alt="Third slide"
            style={{ height: "30rem" }}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br></br>

      {/* ///////////////////////////////////////////////////////// Slider ends here ////////////////////////////////////////////////////////////// */}

      {/* //////////////////////////////////////////////////////////// List group starts here //////////////////////////////////////////////////////// */}

      <ul
        class="list-group"
        style={{
          float: "left",
          marginTop: "0rem",
          marginLeft: "1rem",
          height: "40%",
          width: "17rem",
        }}
      >
        <li class="list-group-item">
          <img
            src={four}
            style={{ height: "1rem", width: "1rem", margin: "0 5px 0 0 " }}
          />
          Completely synergize
        </li>
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>

      {/* //////////////////////////////////////////// List group ends here///////////////////////////////////////////////////////////// */}

      {/* ////////////////////////////////////////////// Alert bar starts here////////////////////////////////////////////////////// */}

      <div
        class="alert alert-warning alert-dismissible fade show"
        role="alert"
        style={{ margin: "0rem 1rem 0rem 2rem", width: "50%", float: "left" }}
      >
        <strong>Holy guacamole!</strong> You should check in on some of those
        fields below.
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      {/* ////////////////////////////////////////////// Alert bar Ends here////////////////////////////////////////////////////// */}

      {/* ////////////////////////////////////////////////////// Search bar starts here ////////////////////////////////////////////////////////  */}

      <Form className="d-flex" style={{ display: "flex" }}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">
          <img src={five} style={{ height: "1rem", width: "1rem" }} /> Search
        </Button>
      </Form>

      {/* ///////////////////////////////////////////////// Search bar ends here ////////////////////////////////////////////////////////   */}

      {/* ///////////////////////////////////////////////// News box starts here ////////////////////////////////////////////////////////    */}

      <Container style={{ width: "auto" }}>
        <img
          src={one}
          style={{
            height: "7rem",
            width: "7rem",
            margin: "2rem 0rem 0rem 2rem",
            float: "left",
          }}
        />
        <a
          href="#"
          style={{
            textDecoration: "none",
            margin: "1.5rem 0rem 0rem 2rem",
            float: "left",
            fontSize: "2rem",
            width: "auto",
          }}
        >
          <strong>Premier Niche Markets</strong>
        </a>
        <span style={{ width: "45%", float: "left", margin: "0 0 0 2rem" }}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nunc ut aliquam tincidunt, nunc elit aliquam mauris, ut aliquam massa
          nisl quis neque. Sed euismod, nunc ut aliquam tincidunt, nunc elit
          aliquam mauris, ut aliquam massa nisl quis neque<br></br>.
        </span>
      </Container><br></br>

      {/* /////////////////////////////////////////////////// news box ends here  ////////////////////////////////////////////////////////  */}

      {/* /////////////////////////////////////////////////// Progress bar box starts here /////////////////////////////////////////////// */}

      <ListGroup
        style={{
          maxWidth: "25rem",
          marginLeft: "69rem",
        }}
      >
        <strong>
          <ListGroup.Item>
            <img
              src={four}
              style={{ height: "1rem", width: "1rem", margin: "0 5px  0" }}
            />
            Drmatically Engaged
          </ListGroup.Item>
        </strong>
        <ListGroup.Item>
          <ProgressBar
            variant="success"
            now={100}
            label={"100% Proactively Emivisioned"}
          />
          <br></br>
          <ProgressBar
            variant="info"
            now={60}
            label={"80% Objectively innoverted"}
          />
          <br></br>
          <ProgressBar variant="warning" now={45} label={"45% Protailed"} />
          <br></br>
          <ProgressBar variant="danger" now={35} label={"35% Done"} />
          <br></br>
        </ListGroup.Item>
      </ListGroup>

      {/* /////////////////////////////////////////////////// Progress bar box ends here /////////////////////////////////////////////// */}

      {/* /////////////////////////////////////////////////// 2nd List group starts here /////////////////////////////////////////////// */}

      <ul
        class="list-group"
        style={{
          float: "left",

          marginTop: "0rem",
          marginLeft: "1rem",
          height: "40%",
          width: "17rem",
        }}
      >
        <li class="list-group-item">
          <img
            src={four}
            style={{ height: "1rem", width: "1rem", margin: "0 5px 0 0 " }}
          />
          Completely synergize
        </li>
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
      {/* /////////////////////////////////////////////////// 2nd List group ends here /////////////////////////////////////////////// */}

      {/* /////////////////////////////////////////////////// 2nd news box starts here /////////////////////////////////////////////// */}

      <div style={{ width: "auto" }}>
        <Container style={{ width: "auto" }}>
          <img
            src={one}
            style={{
              height: "7rem",
              width: "7rem",
              margin: "3rem 0rem 0rem 2rem",
              float: "left",
            }}
          />
          <a
            href="#"
            style={{
              textDecoration: "none",
              margin: "2rem 0rem 0rem 2rem",
              float: "left",
              fontSize: "2rem",
              width: "auto",
            }}
          >
            <strong>Premier Niche Markets</strong>
          </a>
          <span
            style={{ width: "45%", float: "left", margin: "0 2rem 0 2rem" }}
          >
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nunc ut aliquam tincidunt, nunc elit aliquam mauris, ut
            aliquam massa nisl quis neque. Sed euismod, nunc ut aliquam
            tincidunt, nunc elit aliquam mauris, ut aliquam massa nisl quis
            neque.
          </span>
        </Container>

        {/* /////////////////////////////////////////////////// 2nd news box ends here /////////////////////////////////////////////// */}

        {/* /////////////////////////////////////////////////// 3rd list group starts here /////////////////////////////////////////////// */}
        <ListGroup
          style={{
            margin: "0rem 0rem 0rem 0rem",
            width: "25%",
            float: "right",
            position: "absolute",
            left: "73.5%",
            top: "117%",
          }}
        >
          <strong>
            <ListGroup.Item>
              <img
                src={four}
                style={{ height: "1rem", width: "1rem", margin: "0 5px 0 0 " }}
              />
              Completely synergize
            </ListGroup.Item>
          </strong>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>

      {/* /////////////////////////////////////////////////// 2nd news box ends here /////////////////////////////////////////////// */}
    </div>
  );
};
export default MainPage;
