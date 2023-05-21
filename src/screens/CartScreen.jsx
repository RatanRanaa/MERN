import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector} from 'react-redux'

const CartScreen = () => {
  const cartState = useSelector(state => state.CartReducer)
  const cartItems = cartState.cartItems
  return (
    <Container>
        <Row>
            <Col md={6}>
                <h1>My Cart</h1>
                <Row>
                  {cartItems.map(item => (
                    <>
                    <Col md={7}>
                      <h4>{item.name}</h4>
                    </Col>
                    <Col md={5}></Col>
                    </>
                  ))}
                </Row>
            </Col>
            <Col md={6}>
                <h1>Payment Info</h1>
            </Col>
        </Row>
    </Container>
  )
}

export default CartScreen