import { React, useState } from "react";

import { Alert, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import photo from "./earth-americas-solid.svg";
import { Carousel } from "react-bootstrap";
import one from "../image/a.jpeg";
import two from "../image/b.jpeg";
import three from "../image/react.png";
import { ListGroup } from "react-bootstrap";
import four from "./shuffle-solid.svg";
import five from "./magnifying-glass-solid.svg";

import "./MainPage.css";

const MainPage = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <div>
            
            {/* Navigation bar */}

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

                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>   

        {/* close of navigation bar */}
                   
           {/* Slider starts here */}
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
              src={three}
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
        <ListGroup
          style={{
            float: "left",
            marginLeft: "4rem",
            height: "40%",
            width: "17rem",
          }}
        >
          <strong>
            <ListGroup.Item>
              <img src={four} style={{ height: "1rem", width: "1rem" }} />
              Completely synergize
            </ListGroup.Item>
          </strong>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>

        {/* Slider ends here */}

        {/* Alert bar starts here */}

        <Alert variant="danger" onClose={() => setShow(false)} dismissible style={{margin:'0rem 2rem 0rem 2rem',width:'50%',float:'left'}} >
          <span>
            <b>synergize :</b>Seamlessly visualize quality intellectual capital!
          </span>
          </Alert>
          
       

        {/* Alert Bar ends here */}

        {/* Search bar starts here */}
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success"><img src={five} style={{ height: "1rem", width: "1rem" }} />  Search</Button>
            </Form>
       
      </div>
    );
  }
};

export default MainPage;
