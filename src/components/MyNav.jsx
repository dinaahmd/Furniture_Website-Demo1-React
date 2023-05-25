import React, { Component } from 'react'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import '../CSS/MyNav.css'
import { NavLink } from 'react-router-dom'
export class MyNav extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand className="Brand" href="#home">Furnitchy</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto" id="left-nav">
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                                <NavLink className="nav-link" to="/products">offers</NavLink>
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                                <NavDropdown title="Blog" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Living Room</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Bedroom
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Kitchens</NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item href="#action/3.4">
                                        Dining room
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
