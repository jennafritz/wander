import RegisterForm from "../Components/RegisterForm";

function RegisterModalContainer({handleRegister, routerProps}) {
    return (
        <div>
            <h1>Register Modal Container</h1>
            <RegisterForm {...routerProps} handleRegister={handleRegister}/>
        </div>
    )
  }
  
  export default RegisterModalContainer;