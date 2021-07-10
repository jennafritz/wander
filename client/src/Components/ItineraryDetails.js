import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchItineraryDays } from '../reducers.js/daysReducer'
import photosReducer from '../reducers.js/photosReducer'
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
                <Row style={{textAlign: 'center'}}>
                    <Col as="h3">Schedule</Col>
                </Row>
                <Container id="scheduleContainer" style={days.length > 4 ? {height: '500px', overflowY: 'auto'} : null}>
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
                </Container>
            </Row>
           
        </Container>
    )
  }
  
  export default ItineraryDetails;