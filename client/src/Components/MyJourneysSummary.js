import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import { fetchAllDays } from '../reducers.js/daysReducer'
import MapOfMyJourneys from './MapOfMyJourneys'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MyJourneysSummary() {

    const myPastItineraries = useSelector(state => state.itineraries.myPastItineraries)
    const myFutureItineraries = useSelector(state => state.itineraries.myFutureItineraries)
    const days = useSelector(state => state.days.allDays)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllDays())
    }, [])

    let totalDaysTraveled = 0

    myPastItineraries.forEach(itinerary => {
        let itineraryDaysArray = days.filter(day => day.itinerary_id === itinerary.id)
        let numDays = itineraryDaysArray.length
        totalDaysTraveled += numDays
        return totalDaysTraveled
    })

    return (
        <Container fluid id="myJourneysSummaryContainer">
            <Row>
                <Col as="h2">Travel Summary</Col>
            </Row>
            <Row>
                <Col>
                    {/* <MapOfMyJourneys /> */}
                </Col>
                <Col style={{justifyContent: 'space-evenly'}} className="verticalCenter">
                    <h5>Trips Taken: {myPastItineraries.length}</h5>
                    <h5>Trips Planned: {myFutureItineraries.length}</h5>
                    <h5>Days Traveled: {totalDaysTraveled}</h5>
                    <span><img src="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"/>= Me</span>
                    <span><img src="http://maps.google.com/mapfiles/ms/icons/purple-dot.png"/>= Past Trip</span>
                    <span><img src="http://maps.google.com/mapfiles/ms/icons/green-dot.png"/>= Future Journey</span>
                </Col>
            </Row>
        </Container>
    )
  }
  
  export default MyJourneysSummary;