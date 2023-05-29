import React, {useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { registerUser } from '../actions/UserAction'
import Loader from '../components/Loader'
import Success from '../components/Success'
import Error from '../components/Error'

const Registe = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [confrimPassword, setConfrimPassword] = useState("")

    const registerState = useSelector(state => state.registerUserReducer)
    const {error, success, loading}  = registerState
    const dispatch = useDispatch()

    const registerhandler = () =>{
        if (password !== confrimPassword) {
            alert('password not matched')
        } else {
            const user = { name, email, password, confrimPassword}
            // console.log(user)
            dispatch(registerUser(user))
        }
    }

  return (
    <>
    <Container>
        {loading && <Loader/>}
        {success && <Success success="User Register Successfully" />}
        {error && <Error error="Somthing went wrong"/>}
        <Form>
        <h1>Regiteration</h1>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter Name"
            value={name}
            onChange={e => setName(e.target.value)}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={e => setpassword(e.target.value)}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Confirm Password" 
            value={confrimPassword}
            onChange={e => setConfrimPassword(e.target.value)}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" onClick={registerhandler} >
            Register
        </Button>
        </Form>
    </Container>
    </>
  )
}

export default Registe