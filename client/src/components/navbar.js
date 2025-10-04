import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

function navbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Duxter Clothing</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

<Nav
  className="me-auto my-2 my-lg-0"
  style={{ maxHeight: '100px' }}
  navbarScroll
>
  <Nav.Link as={Link} to="/">Home</Nav.Link>

  <NavDropdown title="TopWear" id="navbarScrollingDropdown">
    <NavDropdown.Item as={Link} to="/shirts">Shirts</NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/tshirts">Tshirts</NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/knitwear">Knitwear</NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/jackets">Jackets</NavDropdown.Item>
  </NavDropdown>

  <NavDropdown title="BottomWear" id="navbarScrollingDropdown">
    <NavDropdown.Item as={Link} to="/trousers">Trousers</NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/sweatpantsandjoggers">SweatPants & Joggers</NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/chinosandjeans">Chinos & Jeans</NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/shorts">Shorts</NavDropdown.Item>
  </NavDropdown>
</Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;