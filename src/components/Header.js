import React from "react";
import { Navbar, Nav, Container, Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import brand from "../images/brand.png";
import "./NavStyle.css";
import slide1 from "../images/bg_4.jpg";
import slide2 from "../images/bg_5.jpg";
import slide3 from "../images/Prawn1.jpg";
import slide4 from "../images/vegetable_skewer.jpg";
import samatha from "../images/Samatha.jpg";
import tejasvi from "../images/Tejasvi.png";
import ershia from "../images/Ershia.jpg";
import yesser from "../images/Yesser.jpg";
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
      <Container className="mt-5">
        <div className="row">
          <div className="col-lg-3">
            {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
            <img
              src={samatha}
              className="bd-placeholder-img rounded-circle"
              width="180"
              height="160"
              alt=""
            />
            <h2>Samatha</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details &raquo;
              </a>
            </p>
          </div>
          <div className="col-lg-3">
            <img
              src={ershia}
              className="bd-placeholder-img rounded-circle"
              width="180"
              height="160"
              alt=""
            />

            <h2>Ershia</h2>
            <p>
              Another exciting bit of representative placeholder content. This
              time, we've moved on to the second column.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details &raquo;
              </a>
            </p>
          </div>
          <div className="col-lg-3">
            <img
              src={tejasvi}
              className="bd-placeholder-img rounded-circle"
              width="180"
              height="160"
              alt=""
            />

            <h2>Tejasvi</h2>
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details &raquo;
              </a>
            </p>
          </div>
          <div className="col-lg-3">
            <img
              src={yesser}
              className="bd-placeholder-img rounded-circle"
              width="180"
              height="160"
              alt=""
            />

            <h2>Yesser</h2>
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details &raquo;
              </a>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;
