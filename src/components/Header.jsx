import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
export default function Header() {
    return (
        <Navbar fixed="top" bg="dark" variant="dark">
            <Navbar.Brand href="/">Opskrift Hjemmeside</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
        </Navbar>
    )
}
