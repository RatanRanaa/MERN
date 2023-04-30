import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const TopBar = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <h6>
                Free Home Delivery on Order 500/- Rupees</h6>
            <Nav className='ms-auto'>
                <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                    <Nav.Link>About Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                    <Nav.Link>Contact Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/policy">
                    <Nav.Link>term and policy</Nav.Link>
                </LinkContainer>
            </Nav>
        </Container>
    </Navbar>
    </>
  )
}

export default TopBar