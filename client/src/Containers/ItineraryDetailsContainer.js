import ItineraryDetails from '../Components/ItineraryDetails'
import ItineraryPhotoGallery from '../Components/ItineraryPhotoGallery'
import ItineraryReviews from '../Components/ItineraryReviews'
import {useHistory, useLocation} from 'react-router-dom'
import { createUserItinerary } from '../reducers.js/userItinerariesReducer'
import { fetchItineraryReviews } from '../reducers.js/reviewsReducer'
import React, { forwardRef, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllItineraries, fetchMyFutureItineraries, fetchMyItineraries, fetchMyPastItineraries, recommendItineraries } from '../reducers.js/itinerariesReducer'
import { markUserItineraryTraveled } from '../reducers.js/userItinerariesReducer'
import { GoogleMapProvider, useDirections, useGoogleMap } from '@ubilabs/google-maps-react-hooks'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import ReviewForm from '../Components/ReviewForm'

const DirectionsDiv = React.forwardRef((props, ref) => (
    <Container ref={ref} style={{height: "200px"}}/>
))

function ItineraryDetailsContainer() {

    // console.log("itineraryDetailsContainer")

    const user = useSelector(state => state.user.currentUser)

    const [showReviews, setShowReviews] = useState(false)

    const [showReviewForm, setShowReviewForm] = useState(false)

    const myPastItineraries = useSelector(state => state.itineraries.myPastItineraries)
    const myItineraries = useSelector(state => state.itineraries.myItineraries)

    let dispatch = useDispatch()
    
    let history = useHistory()
    let location = useLocation()
    
    let itinerary = location.state.itinerary
    let photos = location.state.photos
    let mine = location.state.mine

    const itineraryReviews = useSelector(state => state.reviews.itineraryReviews)

    useEffect(() => {
        dispatch(fetchItineraryReviews(itinerary.id))
    }, [])

    // const [showErrorAlert, setShowErrorAlert] = useState(false)
    // const [showSuccessAlert, setShowSuccessAlert] = useState(false)

    // const [directions, setDirections] = useState("")

    // let directions

    // const {map} = useGoogleMap()

    // const [directionsContainer, setDirectionsContainer] = useState(null)

    // const directionsRef = useCallback(node => {
    //     node && setDirectionsContainer(node)
    // })

    // const {directionsService, findRoute, findAndRenderRoute} = useDirections({
    //     renderOnMap: false,
    //     renderOptions: {directions: directions, panel: DirectionsDiv}
    // })

    // let route = findRoute({
    //     origin: {lat: parseFloat(user.latitude), lng: parseFloat(user.longitude)},
    //     destination: {lat: parseFloat(itinerary.latitude), lng: parseFloat(itinerary.longitude)},
    //     travelMode: 'DRIVING' 
    // })

    // console.log(route)
    // setDirections(route)
    // console.log(directions)


    // directionsService.route({
    //     origin: {lat: parseFloat(user.latitude), lng: parseFloat(user.longitude)},
    //     destination: {lat: parseFloat(itinerary.latitude), lng: parseFloat(itinerary.longitude)},
    //     travelMode: 'DRIVING'
    // },
    // (result, status) => {
    //     console.log(result)
    //     if (status === 'OK') {
    //         console.log(result.routes[0].legs)
    //         directions = result
    //     } else {
    //         console.log("Driving directions for this route are unavailable.")
    //     }
    // }
    // )

    // console.log(directionsContainer)

    // console.log(directions)
    
    let isPast = myPastItineraries.find(pastItinerary => pastItinerary.id === itinerary.id)

    mine = myItineraries.find(myItinerary => myItinerary.id === itinerary.id)

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
            {/* {console.log("itineraryDetailsContainer render")} */}
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


                    {!!isPast && !!mine && showReviewForm
                    ? 
                    <Row id="showReviewFormRow">
                        <Col>
                            <ReviewForm setShowReviewForm={setShowReviewForm} itineraryId={itinerary.id}/>
                        </Col>
                    </Row>
                    : !!isPast && !!mine 
                    ? 
                    <Row id="hiddenReviewFormRow">
                        <Row>
                            <Col as="h4">
                                Have a tip or recommendation? <br/>
                                Share your experience with others to improve their wanderings!
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <button id="showReviewFormButton" className="defaultButton" onClick={() => setShowReviewForm(true)}>Submit a Review</button>
                            </Col>
                        </Row>
                    </Row>
                    :
                    null
                    }



                    {(itineraryReviews.length > 0 && !!isPast && !!mine)
                    ? 
                    <Row>
                        <Col>
                            <ItineraryReviews itineraryReviews={itineraryReviews} />
                        </Col>
                    </Row>
                    : (showReviews && itineraryReviews.length > 0)
                    ?
                    <Row id="shownItineraryReviewsRow">
                        <Row >
                            <Col >
                                <ItineraryReviews itineraryReviews={itineraryReviews}/>
                            </Col>
                        </Row>
                        <Row style={{marginLeft: 'auto', marginRight: 'auto', marginBottom: '2rem'}}>
                            <Col>
                                <button id="hideReviewsButton" className="defaultButton" onClick={() => setShowReviews(false)}>Hide Reviews</button>
                            </Col>
                        </Row>
                    </Row>
                    : (itineraryReviews.length > 0)
                    ?
                    <Row id="hiddenItineraryReviewsRow">
                        <Row>
                            <Col as="h4">
                                Want more info? See what other wanderers had to say about this trip!
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{marginLeft: 'auto', marginRight: 'auto', marginBottom: '2rem', marginTop: '2rem'}}>
                                <button id="showReviewsButton" className="defaultButton" onClick={() => setShowReviews(true)}>Show Reviews</button>
                            </Col>
                        </Row>
                    </Row>
                    : null
                    }                
                    
                </Container>

                <Row id="itineraryDetailsButtonRow">
                    {(user.premium && !!mine === false) 
                        ? <button id="saveItineraryButton" className="defaultButton" onClick={() => {
                            dispatch(createUserItinerary({user_id: user.id, itinerary_id: itinerary.id, past: false})).then(response => {
                                if(response.error){
                                    alert(response.error)
                                    // setShowErrorAlert(true)
                                    // return(
                                    // <Alert show={showErrorAlert} variant={'info'} fade={false} onClose={() => setShowErrorAlert(false)} dismissible>
                                    //     {response.payload}
                                    // </Alert>)
                                } else {
                                    dispatch(fetchAllItineraries()).then(() => dispatch(fetchMyItineraries(user.id))).then(() => dispatch(fetchMyPastItineraries(user.id))).then(() => alert("This itinerary has been saved to your account. Happy Wandering!"))
                                    // setShowSuccessAlert(true)
                                    // return(
                                    // <Alert show={showSuccessAlert} variant={'info'} fade={false} onClose={() => setShowSuccessAlert(false)} dismissible>
                                    //     {"This itinerary has been saved to your account. Happy Wandering!"}
                                    // </Alert>)
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
            {/* <GoogleMapProvider
      googleMapsAPIKey={process.env.REACT_APP_MAPS_API_KEY}
      libraries={['places']}
    //   mapContainer={mapContainer}
      onLoad={map => {
        map.setZoom(4)
      }}
      > */}
            {/* <React.StrictMode>
                <DirectionsDiv id="directionsDiv" ref={directionsRef} />
            </React.StrictMode> */}
            {/* </GoogleMapProvider> */}
            </Container>
        </Container>
    )
  }
  
  export default ItineraryDetailsContainer;