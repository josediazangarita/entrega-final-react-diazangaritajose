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
                <Navbar.Brand href="#">Videoland Post</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>

                    <NavDropdown title="Noticias" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3"> Últimas noticias </NavDropdown.Item>
                        <NavDropdown.Item href="#action4"> Próximos lanzamientos </NavDropdown.Item>
                        <NavDropdown.Item href="#action4"> Eventos </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Videojuegos" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Acción</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Aventura</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Shooters</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">RPG</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Simulación</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Deportes</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Plataformas" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Playstation</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Xbox</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Nintendo</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">PC</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Apple</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Android</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="#action1">Contacto</Nav.Link>
                </Nav>

                <CardWidget />

                </Navbar.Collapse>
            </Container>
        </Navbar>

        
    </div>
  )
}
