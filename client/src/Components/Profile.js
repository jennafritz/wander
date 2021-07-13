import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react'
import { useHistory } from 'react-router'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import UpgradeModal from './UpgradeModal'

function Profile() {

    const history = useHistory()
    const dispatch = useDispatch()

    const user = useSelector(state => state.user.currentUser)

    const [upgradeModalShow, setUpgradeModalShow] = useState(false);
    
    let season
    let length
    let locale
    let classification

    if(user.travel_season === "Summer"){
        season = "Summer Journeys"
    } else if (user.travel_season === "Spring"){
        season = "Spring Adventures"
    } else if (user.travel_season === "Fall"){
        season = "Fall Forays"
    } else if (user.travel_season === "Winter"){
        season = "Winter Wanderings"
    }

    if(user.travel_locale === "City"){
        locale = "Exploring Cities"
    } else if (user.travel_locale === "Country"){
        locale = "Country Comforts"
    }

    if(user.travel_classification === "Culture"){
        classification = "Discovering New Cultures"
    } else if (user.travel_classification === "Adventure"){
        classification = "Experiencing New Adventures"
    }

    // if(user.travel_length >= 7){
    //     let days = user.travel_length % 7
    //     let weeks = (user.travel_length - days)/7
    //     if(days > 0){
    //         if(weeks > 1){
    //             length = `${weeks} Weeks & ${days} Days`
    //         } else {
    //             length = `${weeks} Week & ${days} Days`
    //         }
    //     } else {
    //         if(weeks > 1){
    //             length = `${weeks} Weeks`
    //         } else {
    //             length = `${weeks} Week`
    //         }
    //     }
    // } else {
    //     length = `${user.travel_length} Days`
    // }

    if(user.travel_length <= 3){
        length = "Weekend Getaways"
    } else if(user.travel_length > 3 && user.travel_length <= 7){
        length = "Refreshing Journeys"
    } else if(user.travel_length > 7){
        length = "Extended Adventures"
    }

    return (
        <Container fluid id="profileContainer">
            <Row>
                <Col xs="auto" className="flexColumnColumn">
                    <Image src={user.picture} alt="user profile" width="250rem" height="250rem" roundedCircle />
                    <button className="defaultButton" id="avatarButton" onClick={() => history.push("/avatar")}>Change Avatar</button>
                </Col>
                <Col className="flexColumnColumn">
                    <Container id="profileInfoContainer" fluid >
                        <Row style={{alignItems: 'center'}}>
                            <Col style={{textAlign: 'left', marginBottom: '1.5rem', paddingTop: '1rem'}}>
                            <h1>{user.username}</h1>
                            </Col>
                            <Col style={{textAlign: 'right'}}>
                            {user.premium === false ? <h3>Credits: {user.credits}</h3> : null}
                            </Col>
                        </Row>
                        <Row>
                        <h4>Travel Interests:</h4>
                        </Row>
                        <Row >   
                            <Col></Col>                          
                            <Col as="h5">{season}</Col>
                            <Col></Col>
                            <Col as="h5">{length}</Col>
                        </Row>
                        <Row>
                            <Col as="h5">{locale}</Col>
                            <Col></Col>
                            <Col as="h5">{classification}</Col>
                            <Col></Col>
                        </Row>
                        <Row style={{alignItems: 'center'}}>
                            <Col style={{textAlign: 'left'}}>
                                {user.premium === false ? <button id="premiumButton" className="defaultButton" onClick={() => setUpgradeModalShow(true)}>Upgrade to Premium</button> : null}
                            </Col>
                            <Col style={{textAlign: 'right'}}>
                                    <button className="defaultButton" id="questionnaireButton" onClick={() => history.push("/questionnaire")}>Change Travel Settings</button>
                            </Col>
                            
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row>
              
            </Row>
            <UpgradeModal show={upgradeModalShow} onHide={() => setUpgradeModalShow(false)}/>
        </Container>
    )
  }
  
  export default Profile;