import React, { useEffect } from 'react'
// import AllPizza from '../pizza-data'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { getAllPizzas } from "../actions/PizzaAction"
import Pizza from '../components/Pizza'
import Loader from '../components/Loader'
import Error from '../components/Error'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const pizzastate = useSelector(state => state.getAllPizzaReducer)
    const {loading, pizzas, error } = pizzastate

    useEffect(()=>{
        dispatch(getAllPizzas());
    }, [dispatch])
  return (
    <>
        <Container>
        {
            loading ? ( <Loader />)
                    : error ? (<Error>Error while fetching pizzas</Error>)
                    : (
                        <Row>
                        { pizzas.map((pizza) => (
                            <Col md={4}>
                                <Pizza pizza={pizza} />
                            </Col>
                        ))}
                    </Row>
                    )
        }
        </Container>
    </>
  )
}

export default HomeScreen