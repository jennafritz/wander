import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LoginModalContainer from './LoginModalContainer'
import { useState } from 'react'
import { useHistory } from 'react-router'

function HomePageContainer() {

    const history = useHistory()
    const [modalShow, setModalShow] = useState(false)

    return (
        <Container id="homepageContainer" className="fullBackgroundImage verticalCenter" fluid>
            <Row id="offsetTitle">
                <Col >Wander</Col>
            </Row>
            <Row >
                <button className="defaultButton" onClick={() => history.push("/login")}>Log In</button>
                {/*  */}
                {/* () =>  setModalShow(true)*/}
            </Row>
            {/* <LoginModalContainer show={modalShow} onHide={() => setModalShow(false)} /> */}
        </Container>
        // <h1>Home Page Container</h1>
    )
  }
  
  export default HomePageContainer;