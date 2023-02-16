import React from "react";
import { Navbar, Nav, Container, Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import brand from "../images/brand.png";
import "./NavStyle.css";
import slide1 from "../images/bg_4.jpg";
import slide2 from "../images/bg_5.jpg";
import slide3 from "../images/Prawn1.jpg";
import slide4 from "../images/vegetable_skewer.jpg";
const Header = () => {
  return (
    <>
      <Navbar id="navstyle">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="#home">
              <img
                src={brand}
                width="70"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </LinkContainer>
          <LinkContainer to="/">
            <Nav.Link className="navLink">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/samatha">
            <Nav.Link className="navLink">Samatha</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/ershia">
            <Nav.Link className="navLink">Ershia</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tejasvi">
            <Nav.Link className="navLink">Tejasvi</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/yesser">
            <Nav.Link className="navLink">Yesser</Nav.Link>
          </LinkContainer>
        </Container>
      </Navbar>

      <Carousel id="dtslides">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
            height="550"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Second slide"
            height="550"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"
            height="550"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide4}
            alt="Third slide"
            height="550"
          />
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Header;
