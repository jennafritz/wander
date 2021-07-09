import RegisterForm from "../Components/RegisterForm";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from "react";
import { useHistory } from "react-router";

function RegisterModalContainer() {

    const history = useHistory()

    return (
        <Container className="fullBackgroundImage verticalCenter montserrat" fluid>
            <Container className="formParentContainer spaceAround">
                <Row as="h2" className="formHeaderText">Your Journey Begins Here</Row>
                {/* <Row as="h2" className="formHeaderText">Register to Get Started</Row> */}
                <Row><RegisterForm /></Row>
                <Row as="h2" className="formHeaderText">Wandering Awaits</Row>
                <Row><button className="defaultButton" onClick={() => history.push("/login")}>Login</button></Row>
            </Container>
        </Container>
    )
  }
  
  export default RegisterModalContainer;