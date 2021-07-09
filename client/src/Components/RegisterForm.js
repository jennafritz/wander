import {useState} from 'react'
import { registerUser } from '../reducers.js/userReducer'
import {useDispatch, useSelector} from 'react-redux'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/esm/Container'

function RegisterForm({handleRegister}) {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.currentUser)

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    function handleChange(event) {
        const key = event.target.id
        setFormData({
            ...formData,
            [key]: event.target.value
        })
    }

    function handleRegister(registerObj){
        dispatch(registerUser(registerObj)).then(response => {
            console.log(response)
            if (response.payload.user){
                alert("Registration successful! Please log in to continue.")
            } else {
                alert(response.payload)
            }
        })
            
    }

    // function handleRegister(registerObj) {
    //     fetch("http://localhost:3000/register", {
    //         method: "POST",
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify(registerObj)
    //     })
    //         .then(res => res.json())
    //         .then(userObj => console.log(userObj))
    //   }

    return (
        <Container className="formContainer">
            {/* <h3>Register Form Component</h3> */}
            <Form className="formElement" onSubmit={(event) => {
                event.preventDefault()
                handleRegister(formData)
            }}>
                <Form.Group className="setWidth">
                <Form.Label htmlFor="username">Username</Form.Label>
                <Form.Control 
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                />
                </Form.Group>
                <Form.Group className="setWidth">
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control 
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                />
                </Form.Group>
                <Form.Control className="formSubmit" type="submit" value="Register"/>
            </Form>
        </Container>
    )
  }
  
  export default RegisterForm;