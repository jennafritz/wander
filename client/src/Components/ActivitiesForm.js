import NavBar from "./NavBarComponent";
import {useEffect, useState} from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ActivitiesForm({day, updateActivitiesArray, removeActivityFromParent}) {

    const [activityInputList, setActivityInputList] = useState([
        // {activity: "", day: day, order: "", id: ""}
    ])

    const [arrayOfActivities, setArrayOfActivities] = useState(null)

    const activitiesLength = activityInputList.length

    useEffect(() => {
        updateActivitiesArray(activityInputList)
    }, [activityInputList])

    // function handleChange(event) {
    //     const key = event.target.id
    //     setFormData({
    //         ...formData,
    //         [key]: event.target.value
    //     })
    // }
    
    const handleAddActivity = () => {
        setActivityInputList([...activityInputList, {activity: "", day: day, order: "", id: "", info_url: ""}])
    }

    const handleRemoveActivity = (index) => {
        const list = [...activityInputList]
        list.splice(index, 1)
        setActivityInputList(list)
    }


    // need some way to trigger changes but not on every change (every typed letter)
    const handleActivityInputChange = (event, index) => {
        const {name, value} = event.target
        const list = [...activityInputList]
        list[index][name] = value
        list[index].order = index
        list[index].id = `${day} - ${index}`
        setActivityInputList(list)
        // let updatedActivity = list[index]
        // let activities = [...activityInputList]
        // let existsIndex = activities.findIndex(activity => activity.id === `${day} - ${index + 1}`)
        // // let updatedActivities
        // if(existsIndex >= 0){
        //     activities.splice(existsIndex, 1, updatedActivity)
        //     // updatedActivities = activities.map(activity => {
        //     //     if(activity.id === exists.id){
        //     //         return updatedActivity
        //     //     } else {
        //     //         return activity
        //     //     }
        //     // })
        //     setArrayOfActivities(activities)
        // } 
        // // else {
        // //     updatedActivities = [...activityInputList, updatedActivity]
        // // }
        // debugger
        // setArrayOfActivities(updatedActivities)
    }

    return (
        <Container fluid>
            {activityInputList.map((activity, index) => {
                return(
                    <Container >
                        <Row>
                            <Col>
                                <Form.Label htmlFor="activity">Activity {index+1}: </Form.Label>
                                <Form.Control
                                required  
                                name="activity"
                                value={activity.activity}
                                onChange={(event) => handleActivityInputChange(event, index)}
                                />
                            </Col>
                            <Col>
                                <Form.Label htmlFor="activity">Info Link (optional): </Form.Label>
                                <Form.Control
                                name="info_url"
                                value={activity.info_url}
                                onChange={(event) => handleActivityInputChange(event, index)}
                                />
                            </Col>
                            {/* <button onClick={() => {
                                handleRemoveActivity(index)
                                removeActivityFromParent(`${day} - ${index + 1}`)
                            }}>Remove Activity</button> */}
                        </Row>
                    </Container>
                )   
            })}
                <button id="addActivityButton" className="defaultButton" onClick={() => handleAddActivity()} >Add An Activity</button>
        </Container>
    )
  }
  
  export default ActivitiesForm;