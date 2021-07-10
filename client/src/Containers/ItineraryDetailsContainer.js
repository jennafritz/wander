import ItineraryDetails from '../Components/ItineraryDetails'
import ItineraryPhotoGallery from '../Components/ItineraryPhotoGallery'
import {useHistory, useLocation} from 'react-router-dom'
import { createUserItinerary } from '../reducers.js/userItinerariesReducer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllItineraries, fetchMyItineraries } from '../reducers.js/itinerariesReducer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ItineraryDetailsContainer() {

    const user = useSelector(state => state.user.currentUser)

    let dispatch = useDispatch()

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
                    <Row id="itineraryCategoryRow">
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

                <Row id="itineraryDetailsButtonRow">
                    {(user.premium && !!mine === false) ? <button id="saveItineraryButton" className="defaultButton" onClick={() => {
                        dispatch(createUserItinerary({user_id: user.id, itinerary_id: itinerary.id})).then(response => {
                            if(response.error){
                                alert(response.payload)
                                return response.payload
                            } else {
                                alert("This itinerary has been saved to your account. Happy Wandering!")
                                dispatch(fetchAllItineraries())
                                dispatch(fetchMyItineraries(user.id))
                            }
                        })
                    }}>Save Itinerary</button> : null}
                    <button id="goBackButton" className="defaultButton" onClick={() => history.goBack()}>Go Back</button>
            </Row>
            </Container>
        </Container>
    )
  }
  
  export default ItineraryDetailsContainer;