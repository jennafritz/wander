import ItineraryDetails from '../Components/ItineraryDetails'
import ItineraryPhotoGallery from '../Components/ItineraryPhotoGallery'
import {useHistory, useLocation} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ItineraryDetailsContainer() {

    let history = useHistory()
    let location = useLocation()

    let itinerary = location.state.itinerary
    let photos = location.state.photos
    let mine = location.state.mine

    let budget

    if(itinerary.budget === 1){
        budget = "$"
    } else if(itinerary.budget === 2){
        budget = "$$"
    } else if(itinerary.budget === 3){
        budget = "$$$"
    } else if(itinerary.budget === 4){
        budget = "$$$$"
    }

    return (
        <Container fluid className="backgroundColor">
            <Container fluid>
                <Container fluid id="itineraryDetailHeader">
                    <Row as ="h1" id="itineraryName">
                        {itinerary.name}
                    </Row>
                    <Row as ="h4" id="itineraryDescription" className="itineraryDetailHeaderRow">
                        {itinerary.description}
                    </Row>
                    <Row>
                        <Col as="h5">Destination: {itinerary.destination}</Col>
                        <Col as="h5">Trip Length: {itinerary.length} Days</Col>
                        <Col as="h5">Locale: {itinerary.locale}</Col>
                        <Col as="h5">Travel Type: {itinerary.classification}</Col>
                        <Col as="h5">Budget: {budget}</Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Row>
                        <Col style={{width: '30%'}}>
                            <ItineraryDetails itinerary={itinerary} mine={mine}/>
                        </Col>

                        <Col style={{width: '60%'}}>
                            <ItineraryPhotoGallery photos={photos}/>
                        </Col>
                    </Row>
                </Container>
                {/* <h1>Itinerary Details Container</h1> */}
                <button onClick={() => history.goBack()}>Go Back</button>
            </Container>
        </Container>
    )
  }
  
  export default ItineraryDetailsContainer;