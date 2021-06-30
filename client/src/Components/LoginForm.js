import {useState} from 'react'

function LoginForm({handleLogin, history}) {

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

    return (
        <div>
            <h3>Login Form Component</h3>
            <form onSubmit={(event) => {
                event.preventDefault()
                handleLogin(formData, history)
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
                <input type="submit" value="Log In"/>
            </form>
        </div>
    )
  }
  
  export default LoginForm;