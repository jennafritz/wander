import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { setUpProfile } from '../reducers.js/userReducer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'
import AlertModal from './AlertModal'

function AvatarForm() {

    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.user.currentUser)

    const [picture, setPicture] = useState("")

    const [alertMessage, setAlertMessage] = useState("")
    const [showAlertModal, setShowAlertModal] = useState(false)

    function handleCustomPhoto(event) {
        setPicture(event.target.value)
    }

    const handleSetAvatar = (url) => {
        setPicture(url)
    }

    return (
        <Container fluid className="backgroundColor">
            <Container fluid id="avatarFormContainer" className="containerWidth">
                <Row style={{marginTop: '0rem'}}>
                    <Col as="h1">Select Your Avatar</Col>
                </Row>
                <Row>
                    <Col>
                        <Image roundedCircle
                        id="avatarPicture"
                        style={picture === "http://images.summitmedia-digital.com/cosmo/images/2019/11/30/palawan-1575079999.png" ? {border: "0.25rem solid darkslateblue"} : null} 
                        onClick={() => handleSetAvatar("http://images.summitmedia-digital.com/cosmo/images/2019/11/30/palawan-1575079999.png")} 
                        src="http://images.summitmedia-digital.com/cosmo/images/2019/11/30/palawan-1575079999.png" 
                        alt="Palawan" 
                        width="250rem"
                        height="250rem"/>
                    </Col>

                    <Col>
                        <Image roundedCircle
                        style={picture === "https://gradivahotels.com/wp-content/uploads/2019/07/Best-Travel-Destination.jpg" ? {border: "0.25rem solid darkslateblue"} : null} 
                        onClick={() => handleSetAvatar("https://gradivahotels.com/wp-content/uploads/2019/07/Best-Travel-Destination.jpg")} 
                        src="https://gradivahotels.com/wp-content/uploads/2019/07/Best-Travel-Destination.jpg" 
                        alt="Scandinavia" 
                        width="250rem"
                        height="250rem"/>
                    </Col>

                    <Col>
                        <Image roundedCircle
                        style={picture === "https://thetravelscene.com/Over-the-water-bungalowsa.jpg" ? {border: "0.25rem solid darkslateblue"} : null} 
                        onClick={() => handleSetAvatar("https://thetravelscene.com/Over-the-water-bungalowsa.jpg")} 
                        src="https://thetravelscene.com/Over-the-water-bungalowsa.jpg" 
                        alt="Bungalows" 
                        width="250rem"
                        height="250rem"/>
                    </Col>

                    <Col>      
                        <Image roundedCircle
                        style={picture === "https://www.tripsavvy.com/thmb/vP7pCia2UJMBSz-lWLFUyEFtLMk=/1883x1414/filters:no_upscale():max_bytes(150000):strip_icc()/Manarola-Liguria-Coast-Italy-Sunset-5b5fcb3b46e0fb00828b35dd.jpg" ? {border: "0.25rem solid darkslateblue"} : null} 
                        onClick={() => handleSetAvatar("https://www.tripsavvy.com/thmb/vP7pCia2UJMBSz-lWLFUyEFtLMk=/1883x1414/filters:no_upscale():max_bytes(150000):strip_icc()/Manarola-Liguria-Coast-Italy-Sunset-5b5fcb3b46e0fb00828b35dd.jpg")} 
                        src="https://www.tripsavvy.com/thmb/vP7pCia2UJMBSz-lWLFUyEFtLMk=/1883x1414/filters:no_upscale():max_bytes(150000):strip_icc()/Manarola-Liguria-Coast-Italy-Sunset-5b5fcb3b46e0fb00828b35dd.jpg" 
                        alt="Italian Coast" 
                        width="250rem"
                        height="250rem"/>
                    </Col>
                </Row>

                <Row>
            

                    <Col>
                        <Image roundedCircle
                        style={picture === "https://www.wanderlustchloe.com/wp-content/uploads/2017/10/Aberta-Canada.jpg" ? {border: "0.25rem solid darkslateblue"} : null} 
                        onClick={() => handleSetAvatar("https://www.wanderlustchloe.com/wp-content/uploads/2017/10/Aberta-Canada.jpg")} 
                        src="https://www.wanderlustchloe.com/wp-content/uploads/2017/10/Aberta-Canada.jpg" 
                        alt="Canada" 
                        width="250rem"
                        height="250rem"/>
                    </Col>

                    <Col>
                        <Image roundedCircle
                        style={picture === "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900" ? {border: "0.25rem solid darkslateblue"} : null} 
                        onClick={() => handleSetAvatar("https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900")} 
                        src="https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900" 
                        alt="Eiffel Tower" 
                        width="250rem"
                        height="250rem"/>
                    </Col>

                    <Col>
                        <Image roundedCircle
                        style={picture === "https://cdn.cnn.com/cnnnext/dam/assets/170606121226-japan---travel-destination---shutterstock-230107657.jpg" ? {border: "0.25rem solid darkslateblue"} : null} 
                        onClick={() => handleSetAvatar("https://cdn.cnn.com/cnnnext/dam/assets/170606121226-japan---travel-destination---shutterstock-230107657.jpg")} 
                        src="https://cdn.cnn.com/cnnnext/dam/assets/170606121226-japan---travel-destination---shutterstock-230107657.jpg" 
                        alt="Japan" 
                        width="250rem"
                        height="250rem"/>
                    </Col>

                    <Col>
                        <Image roundedCircle
                        style={picture === "https://757967.smushcdn.com/1421783/wp-content/uploads/2020/01/Venice-Italy-Italys-Floating-City-The-city-has-so-many-places-to-visit-that-needs-to-be-seen-slowly..jpg?lossy=1&strip=0&webp=1" ? {border: "0.25rem solid darkslateblue"} : null} 
                        onClick={() => handleSetAvatar("https://757967.smushcdn.com/1421783/wp-content/uploads/2020/01/Venice-Italy-Italys-Floating-City-The-city-has-so-many-places-to-visit-that-needs-to-be-seen-slowly..jpg?lossy=1&strip=0&webp=1")} 
                        src="https://757967.smushcdn.com/1421783/wp-content/uploads/2020/01/Venice-Italy-Italys-Floating-City-The-city-has-so-many-places-to-visit-that-needs-to-be-seen-slowly..jpg?lossy=1&strip=0&webp=1" 
                        alt="Venice" 
                        width="250rem"
                        height="250rem"/>
                    </Col>
                </Row>      

                <Row >
                    <Form 
                    style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                    onSubmit={(event) => {
                    event.preventDefault()
                        dispatch(setUpProfile({userId: user.id, picture: picture})).then(response => {
                            if(response.payload.error){
                                setAlertMessage(response.payload.error)
                                setShowAlertModal(true)
                            } 
                            else {
                                history.push("/profile")
                            }
                        })
                    }}>
                        <Form.Label as="h4">Or Choose Your Own Photo:</Form.Label>
                        <Form.Control 
                        style={{marginTop: '2rem', marginBottom: '2rem'}}
                        type="text"
                        id="picture"
                        name="picture"
                        onChange={handleCustomPhoto}
                        />
                        <Form.Control id="avatarSubmitButton" className="formSubmit" type="submit" value="Submit" />
                    </Form>
                </Row>
            </Container>
            <AlertModal message={alertMessage} show={showAlertModal} alertControl={() => setShowAlertModal(false)}/>

        </Container>
    )
  }
  
  export default AvatarForm;