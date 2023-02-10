import React from "react";
import { Navbar,Nav,NavLink,NavbarBrand,Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import brand from "../images/brand.png"
const Header = () => {
    return ( <>
     <Navbar bg="info" variant="dark">
        <Container>
        <Navbar.Brand href="#home"><img
              src={brand}
              width="70"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home" className="text-danger">Home</Nav.Link>
            <Nav.Link href="#samatha" className="text-danger">Samatha</Nav.Link>
            <Nav.Link href="#Ershia" className="text-danger">Ershia</Nav.Link>
            <Nav.Link href="#Tejasvi" className="text-danger">Tejasvi</Nav.Link>
            <Nav.Link href="#Yesser" className="text-danger">Yesser</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="background">
      <h1  className="centered">
        Welcome To CookBook 
      </h1>
     
      </div>
      
    </> );
}
 
export default Header;