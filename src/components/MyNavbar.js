import { Navbar, Nav, Container} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import brand from "../images/brand.png";
import "./NavStyle.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

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
          
          <DropdownButton id="dropdown-basic-button" title="Samatha">
          <LinkContainer to="/prawn_curry">
            <Nav.Link className="navLink">Prawn Curry</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/jalebi">
            <Nav.Link className="navLink">Jalebi</Nav.Link>
          </LinkContainer>
          </DropdownButton>
          
          <DropdownButton id="dropdown-basic-button" title="Ershia">
          <LinkContainer to="/poke_bowl">
            <Nav.Link className="navLink">Healthy Poke Bowl</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/creme_brulee">
            <Nav.Link className="navLink">Creme Brulee</Nav.Link>
          </LinkContainer>
          </DropdownButton>
          
          <DropdownButton id="dropdown-basic-button" title="Tejasvi">
          <LinkContainer to="/tandoori_chicken">
            <Nav.Link className="navLink">Tandoori Chicken</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/rasamalai">
            <Nav.Link className="navLink">Rasamalai</Nav.Link>
          </LinkContainer>
          </DropdownButton>
          
          <DropdownButton id="dropdown-basic-button" title="Yasser">
          <LinkContainer to="/shawrma">
            <Nav.Link className="navLink">Shawrma</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tiramisu">
            <Nav.Link className="navLink">Tiramisu</Nav.Link>
          </LinkContainer>
          </DropdownButton>

        </Container>
      </Navbar>
    </>);
}
 
export default MyNav;