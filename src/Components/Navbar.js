import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/">Movies</Link>
                        <Link to="/addMovies">Add Movies</Link>
                        <Link to="/hooks">Hooks</Link>
                        <Link to="/users">Users</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}