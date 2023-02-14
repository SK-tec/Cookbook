import React from "react";
import { Navbar,Nav,Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import brand from "../images/brand.png";
import "./NavStyle.css"

const Header = () => {
    return ( <>
     <Navbar  id="navstyle">
        <Container>
        <LinkContainer to="/">
        <Navbar.Brand href="#home"><img
              src={brand}
              width="70"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
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
      <div className="background">
      <h1  className="centered">
        Welcome To CookBook 
      </h1>     
      </div>
      
      
    </> );
}
 
export default Header;