import { Navbar, Container, Nav, NavDropdown, Offcanvas } from "react-bootstrap";

import { Link } from "react-router-dom";

import SearchForm from "./SearchForm.js";

import logo from "../assets/images/logo.png";

import "./Navbar.css";

export default function NavbarComponent() {
    return (
        /* <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="navbar-brand">
                    <img src={logo} className="w-200" alt="logo" />
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
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
                Something else here
            </NavDropdown.Item>
        </NavDropdown>
        */

        <Navbar bg="light" expand={false} >
            <Container fluid>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                >
                    <Offcanvas.Header closeButton>
                        <Navbar.Brand className="me-auto" href="/">
                            <img src={logo} className="w-200" alt="logo" />
                        </Navbar.Brand>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-start flex-grow-1 pe-3">
                            <Link className="mx-2" to="/">Movies</Link>
                            <Link className="mx-2" to="/addMovie">Add Movie</Link>
                            <Link className="mx-2" to="/users">Users</Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                <Navbar.Brand className="me-auto" href="/">
                    <img src={logo} className="w-200" alt="logo" />
                </Navbar.Brand>
                <SearchForm />
            </Container>
        </Navbar >
    );
}