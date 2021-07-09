import {useState} from 'react'
import { fetchUser } from '../reducers.js/userReducer'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {fetchAllItineraries, fetchMyItineraries, recommendItineraries} from '../reducers.js/itinerariesReducer'
import { fetchAllPhotos } from '../reducers.js/photosReducer'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/esm/Container'

function LoginForm() {

    const dispatch = useDispatch()
    const history = useHistory()
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

    const handleLogin = (loginObj) => {
        dispatch(fetchUser(loginObj)).then((response) => {
            if(response.error){
                alert(response.payload)
            } else {
                let loggedInUser = response.payload.user
                localStorage.token = response.payload.token
                dispatch(fetchAllItineraries()).then(() => dispatch(fetchMyItineraries(loggedInUser.id))).then(() => dispatch(recommendItineraries(loggedInUser)))
                dispatch(fetchAllPhotos())
                if(loggedInUser.id && loggedInUser.travel_season){
                    history.push("/profile")
                } else if(loggedInUser.id){
                    history.push("/questionnaire")
                }
            }

            // if (response.payload.user){
            //     let loggedInUser = response.payload.user
            //     localStorage.token = response.payload.token
            //     dispatch(fetchAllItineraries()).then(() => dispatch(fetchMyItineraries(loggedInUser.id))).then(() => dispatch(recommendItineraries(loggedInUser)))
            //     dispatch(fetchAllPhotos())
            //     if(loggedInUser.id && loggedInUser.travel_season){
            //         history.push("/profile")
            //     } else if(loggedInUser.id){
            //         history.push("/questionnaire")
            //     }
            // } else {
            //     alert(response.payload)
            // }
        })
    }

    return (
        <Container className="formContainer">
            {/* <h3>Login Form Component</h3> */}
            <Form className="formElement" onSubmit={(event) => {
                event.preventDefault()
                handleLogin(formData)
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
                <Form.Control className="formSubmit" type="submit" value="Log In"/>
            </Form>
        </Container>
    )
  }
  
  export default LoginForm;