import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

export default class NavbarComponent extends React.Component {

    render () {
        return (
            <Navbar collapseOnSelect expand="lg" variant="dark" className={this.props.color}>
                <Navbar.Brand> <Link to='/home'>React Dashboard</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">A link</Nav.Link>
                        <Nav.Link href="#pricing">Another link</Nav.Link>
                        <NavDropdown title="Layouts" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/navbar">Navbar</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/sidebar">Sidebar</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/two-panels">Two panels</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#profile"> My profile </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}