import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from '../CartWidget/CartWidget';


export const NavBar = () => {
  return (
    <div>

      <Navbar expand="lg" className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand>
            <Link style={{ textDecoration: 'none', color: 'aliceblue' }} to='/'>Videoland Post</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>


              <Link className='btn' to='/category/ps-plus'>
                Playstation Plus
              </Link>

              <Link className='btn' to='/category/xbox-gamepass'>
                Xbox Gamepass
              </Link>

            </Nav>

            <Link to='/cart'>
              <CartWidget />
            </Link>

          </Navbar.Collapse>
        </Container>
      </Navbar>


    </div>
  )
}
