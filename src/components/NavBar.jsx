import React, { useState } from 'react'
import { Navbar, Nav, Container, Image, NavDropdown } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { logoutUser } from '../actions/UserAction'
const NavBar = () => {
  const dispatch = useDispatch()
  const cartState = useSelector(state => state.CartReducer)
  const userState = useSelector(state => state.loginUserReducer)
  const {currentUser} = userState
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
            {
              currentUser ? 
              (
              <LinkContainer to="/">
                  {/* <Nav.Link>{currentUser.name}</Nav.Link> */}
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title={currentUser.name}
                      // menuVariant="dark"
                    >
                      <NavDropdown.Item href="#action/3.1">Order</NavDropdown.Item>
                      <NavDropdown.Item onClick={() => {dispatch(logoutUser())
                      }}>
                        Logout
                      </NavDropdown.Item>
                      {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item> */}
                    </NavDropdown>
              </LinkContainer>
              )
              :
              (
              <>
              <LinkContainer to='/login'>
                  <Nav.Link>LogIn</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/registe'>
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>
              </>
              )
            }
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