import LoginForm from "../Components/LoginForm";

function LoginModalContainer({handleLogin, routerProps}) {
    return (
        <div>
            <h1>Login Modal Container</h1>
            <LoginForm {...routerProps} handleLogin={handleLogin}/>
        </div>
    )
  }
  
  export default LoginModalContainer;