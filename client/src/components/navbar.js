import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../AuthContext';

function NavBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can optionally check for empty search:
    if (searchTerm.trim()) {
      navigate('/searchresults'); // ✅ Redirects to /searchresults page
    }
  };

  const {logout}=useAuth();
  return (

    <Navbar expand="lg" className="bg-light">
  <Container fluid>
    <Navbar.Brand 
      href="/" 
      style={{ fontWeight: "600", fontSize: "20px", letterSpacing: "1px" }}
    >
      Duxter Clothing
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="navbarScroll" />

    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: "100px" }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/" style={{ fontWeight: "500" }}>
          Home
        </Nav.Link>

        <NavDropdown title="TopWear" id="navbarScrollingDropdown">
          <NavDropdown.Item as={Link} to="/shirts">Shirts</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/tshirts">Tshirts</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/knitwear">Knitwear</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/jackets">Jackets</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="BottomWear" id="navbarScrollingDropdown2">
          <NavDropdown.Item as={Link} to="/trousers">Trousers</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/sweatpantsandjoggers">
            SweatPants & Joggers
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/chinosandjeans">Chinos & Jeans</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shorts">Shorts</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Form className="d-flex" onSubmit={handleSubmit} style={{ marginRight: "10px" }}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "200px" }}
        />
        <Button 
          variant="outline-dark" 
          type="submit" 
          as={Link} 
          to="/searchresults"
        >
          Search
        </Button>
      </Form>

      <Button 
        variant="dark" 
        onClick={logout}
        style={{ marginLeft: "10px" }}
      >
        Logout
      </Button>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default NavBar;