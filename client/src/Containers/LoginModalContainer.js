import LoginForm from "../Components/LoginForm";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from "react";
import { useHistory } from "react-router";

function LoginModalContainer() {

    const history = useHistory()

    return (
        <Container className="fullBackgroundImage verticalCenter montserrat" fluid>
            <Container className="formParentContainer spaceAround">
                <Row as="h2" className="formHeaderText">Already a Wanderer?</Row>
                <Row as="h2" className="formHeaderText">Log In to Continue Your Journey</Row>
                <Row><LoginForm /></Row>
                <Row as="h2" className="formHeaderText">Ready for Adventure?</Row>
                <Row><button className="defaultButton" onClick={() => history.push("/register")}>Register</button></Row>
            </Container>
        </Container>
    )
  }
  
  export default LoginModalContainer;