import { Navbar, Nav, Container} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import brand from "../images/brand.png";
import "./NavStyle.css";
const MyNav = () => {
    return (<>
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
          <LinkContainer to="/yasser">
            <Nav.Link className="navLink">Yasser</Nav.Link>
          </LinkContainer>
        </Container>
      </Navbar>
    </>);
}
 
export default MyNav;