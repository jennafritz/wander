import {useState} from 'react'

function LoginForm() {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    
    function handleSubmit(event) {
        event.preventDefault()
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(userObj => console.log(userObj))
        event.target.reset()
    }

    function handleChange(event) {
        const key = event.target.id
        setFormData({
            ...formData,
            [key]: event.target.value
        })
    }

    return (
        <div>
            <h3>Login Form Component</h3>
            <form onSubmit={handleSubmit}>
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
                <input type="submit" value="Log In"/>
            </form>
        </div>
    )
  }
  
  export default LoginForm;