import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

import "./Navbar.css";

export default function NavbarComponent() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="navbar-brand">
                    <img src={logo} className="w-100" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="mx-2" to="/">Movies</Link>
                        <Link className="mx-2" to="/addMovie">Add Movie</Link>
                        <Link className="mx-2" to="/users">Users</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}