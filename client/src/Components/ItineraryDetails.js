import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchItineraryDays } from '../reducers.js/daysReducer'
import photosReducer from '../reducers.js/photosReducer'
import { createUserItinerary } from '../reducers.js/userItinerariesReducer'
import { fetchAllItineraries, fetchMyItineraries } from '../reducers.js/itinerariesReducer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ItineraryDetails({itinerary, mine}) {

    const user = useSelector(state => state.user.currentUser)

    let dispatch = useDispatch()

    let days = useSelector(state => state.days.itineraryDays)

    useEffect(() => {
        dispatch(fetchItineraryDays(itinerary.id))
    }, [])

    return (
        <Container >
            <Row id="dayListRow">
                {days.length > 0 
                ? days.map(day => {
                    return <ul>
                        <Row as="h5">Day {day.number}:</Row>
                        {day.activities.map(activity => {
                            if(user.premium){
                                if(activity.info_url){
                                    return <Row id="activityListRow"><li><a href={activity.info_url}>{activity.name}</a></li></Row>
                                } else {
                                    return <Row id="activityListRow"><li>{activity.name}</li></Row>
                                }
                            } else {
                            return <li id="activityListRow">{activity.name}</li>
                            }
                        })}
                    </ul>
                
                })
                : null}
            </Row>
            <Row>
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
            </Row>
        </Container>
    )
  }
  
  export default ItineraryDetails;