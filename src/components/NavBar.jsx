import React from 'react'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'

const NavBar = () => {
  // const dispatch = useDispatch()
  const cartState = useSelector(state => state.CartReducer)
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>
            <Image src='images/logo.png' alt='logo' style={{height: "50px"}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to='/login'>
                <Nav.Link>LogIn</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/registe'>
                <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/cart'>
                <Nav.Link>Cart {cartState.cartItems.length}</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar