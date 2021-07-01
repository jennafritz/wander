import {useState} from 'react'
import { registerUser } from '../reducers.js/userReducer'
import {useDispatch, useSelector} from 'react-redux'

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
        <div>
            <h3>Register Form Component</h3>
            <form onSubmit={(event) => {
                event.preventDefault()
                handleRegister(formData)
            }}>
                <label htmlFor="username">Username</label>
                <input 
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <input 
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                />
                <input type="submit" value="Register"/>
            </form>
        </div>
    )
  }
  
  export default RegisterForm;