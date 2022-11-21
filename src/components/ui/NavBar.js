import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export const NavbarUI = () => {
    // const { user: { name }, dispatch } = useContext(AuthContext)
    // const history = useHistory();
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={'https://res.cloudinary.com/dhq1ehjl0/image/upload/v1668283508/PyA-Logo_xc6oto.png'} className="img-navbar" alt={'imgaenProducto'} />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link text-light"
                        exact
                        to="/">Tienda</NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link text-light"
                        exact
                        to="/register"

                    >
                        Registrarse
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link text-light"
                        exact
                        to="/iniciarSesion"

                    >
                        Iniciar sesión
                    </NavLink>
                </Nav>
               

            </Container>

        </Navbar>
    )
}