import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchItineraryDays } from '../reducers.js/daysReducer'
import photosReducer from '../reducers.js/photosReducer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Nav from 'react-bootstrap/Nav'

function ItineraryDetails({itinerary, mine}) {

    const user = useSelector(state => state.user.currentUser)

    let dispatch = useDispatch()

    let days = useSelector(state => state.days.itineraryDays)

    useEffect(() => {
        dispatch(fetchItineraryDays(itinerary.id))
    }, [])

    return (
        <Container >
            <Row id="scheduleHeaderRow">
                <Row style={{textAlign: 'center'}}>
                    <Col as="h3">Schedule</Col>
                </Row>
            </Row>
            <Row style={{flexDirection: 'column', paddingRight: '2rem'}}>
                <Tab.Container defaultActiveKey="Day 1" >
                    <Row id="dayListRow">
                        <Nav variant="tabs">
                            {days.length > 0
                            ? days.map(day => {
                                return(
                                    <Nav.Link eventKey={`Day ${day.number}`}>
                                        {`Day ${day.number}`}
                                    </Nav.Link>
                                )
                            })
                            : null}
                        </Nav>
                    </Row>
                    <Row id="tabContentRow">
                    {days.length > 0
                    ? days.map(day => {
                        return (
                        <Tab.Content >
                            <Tab.Pane eventKey={`Day ${day.number}`}>
                            {<ul>
                                {day.activities.map(activity => {
                                    if(user.premium){
                                        if(activity.info_url){
                                            return <Row id="activityListItemTab"><li><a href={activity.info_url}>{activity.name}</a></li></Row>
                                        } else {
                                            return <Row id="activityListItemTab"><li>{activity.name}</li></Row>
                                        }
                                    } else {
                                    return <li id="activityListItemTab">{activity.name}</li>
                                    }
                                })}    
                            </ul>}
                            </Tab.Pane>
                        </Tab.Content> 
                    )})
                    : null}
                    </Row>
                </Tab.Container>
            </Row>
        </Container>
        
        // <Container >
        //     <Row id="dayListRow">
        //         <Row style={{textAlign: 'center'}}>
        //             <Col as="h3">Schedule</Col>
        //         </Row>
        //         <Container id="scheduleContainer" style={days.length > 4 ? {height: '500px', overflowY: 'auto'} : null}>
        //             {days.length > 0 
        //             ? days.map(day => {
        //                 return <ul>
        //                     <Row as="h5">Day {day.number}:</Row>
        //                     {day.activities.map(activity => {
        //                         if(user.premium){
        //                             if(activity.info_url){
        //                                 return <Row id="activityListRow"><li><a href={activity.info_url}>{activity.name}</a></li></Row>
        //                             } else {
        //                                 return <Row id="activityListRow"><li>{activity.name}</li></Row>
        //                             }
        //                         } else {
        //                         return <li id="activityListRow">{activity.name}</li>
        //                         }
        //                     })}
        //                 </ul>
                    
        //             })
        //             : null}
        //         </Container>
        //     </Row>
           
        // </Container>
    )
  }
  
  export default ItineraryDetails;