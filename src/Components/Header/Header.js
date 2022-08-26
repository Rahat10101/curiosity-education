import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

import { Link } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
const Header = () => {
    const [user] = useAuthState(auth);
   

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar bg="light" expand={false}>
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Curiosity Education</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel"> { 
                user ?
                 user.email
                  : "Curiosity Education"}</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
                            {
                                user ?
                                    <button onClick={handleSignOut} className='btn btn-warning'>Sign Out</button>
                                    :
                                    <>
                                        <Nav.Link as={Link} to="/login">
                                            Login
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/register">
                                            Register
                                        </Nav.Link>
                                    </>}
                        </Nav>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default Header;