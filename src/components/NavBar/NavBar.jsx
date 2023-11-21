import { Link } from 'react-router-dom'
import { CardWidget } from "../CartWidget/CardWidget";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = () => {
  return (
    <div>

      <Navbar expand="lg" className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand >
            {/* <Link to='/'> */}
            Videoland Post
            {/* </Link> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>

              <Nav.Link href="#action1"> Playstation Plus </Nav.Link>
              <Nav.Link href="#action2"> Xbox Gamepass </Nav.Link>

            </Nav>

            <CardWidget />

          </Navbar.Collapse>
        </Container>
      </Navbar>


    </div>
  )
}
