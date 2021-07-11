import ItineraryDetails from '../Components/ItineraryDetails'
import ItineraryPhotoGallery from '../Components/ItineraryPhotoGallery'
import {useHistory, useLocation} from 'react-router-dom'
import { createUserItinerary } from '../reducers.js/userItinerariesReducer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllItineraries, fetchMyFutureItineraries, fetchMyItineraries, fetchMyPastItineraries, recommendItineraries } from '../reducers.js/itinerariesReducer'
import { markUserItineraryTraveled } from '../reducers.js/userItinerariesReducer'
// import { useDirections, useGoogleMap } from '@ubilabs/google-maps-react-hooks'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'

function ItineraryDetailsContainer() {

    const user = useSelector(state => state.user.currentUser)

    const myPastItineraries = useSelector(state => state.itineraries.myPastItineraries)
    const myItineraries = useSelector(state => state.itineraries.myItineraries)

    let dispatch = useDispatch()
    
    let history = useHistory()
    let location = useLocation()
    
    let itinerary = location.state.itinerary
    let photos = location.state.photos
    let mine = location.state.mine

    // const {directionsService, findRoute} = useDirections({
    //     renderOnMap: false,
    //     renderOptions: 'directions'
    // })

    // let directions = directionsService.route({
    //     origin: {lat: parseFloat(user.latitude), lng: parseFloat(user.longitude)},
    //     destination: {lat: parseFloat(itinerary.latitude), lng: parseFloat(itinerary.longitude)},
    //     travelMode: 'DRIVING'
    // },
    // (result, status) => {
    //     console.log(result.routes)
    // }
    // )

    // console.log(directions)
    
    let isPast = myPastItineraries.find(pastItinerary => pastItinerary.id === itinerary.id)

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
                    {(user.premium && !!mine === false) 
                        ? <button id="saveItineraryButton" className="defaultButton" onClick={() => {
                            dispatch(createUserItinerary({user_id: user.id, itinerary_id: itinerary.id, past: false})).then(response => {
                                if(response.error){
                                    <Alert>
                                        {response.payload}
                                    </Alert>
                                    return response.payload
                                } else {
                                    dispatch(fetchAllItineraries()).then(() => dispatch(fetchMyItineraries(user.id))).then(() => dispatch(recommendItineraries(user)))
                                    return(
                                    <Alert>
                                        {"This itinerary has been saved to your account. Happy Wandering!"}
                                    </Alert>)
                                }
                            })
                        }}>Save Itinerary</button> 
                        : null}

                    {(!!isPast === false && !!mine) 
                        ? <button id="markTraveledButton" className="defaultButton"
                            onClick={() => {
                                dispatch(markUserItineraryTraveled({user_id: user.id, itinerary_id: itinerary.id, past: true})).then(() => dispatch(fetchMyPastItineraries(user.id))).then(() => dispatch(fetchMyFutureItineraries(user.id)))
                            }}
                            >Mark as Traveled</button> 
                        : null}

                    <button id="goBackButton" className="defaultButton" onClick={() => history.goBack()}>Go Back</button>
            </Row>
            </Container>
        </Container>
    )
  }
  
  export default ItineraryDetailsContainer;