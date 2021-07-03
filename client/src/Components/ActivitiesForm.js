import NavBar from "./NavBar";
import {useEffect, useState} from 'react'

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
        setActivityInputList([...activityInputList, {activity: "", day: day, order: "", id: ""}])
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
        <div >
            <label htmlFor="activities">Activities</label>
                {activityInputList.map((activity, index) => {
                    return(
                        <div>
                            <label htmlFor="activity">Activity {index+1}: </label>
                            <input
                            required  
                            name="activity"
                            value={activity.activity}
                            onChange={(event) => handleActivityInputChange(event, index)}
                            />
                            {/* <button onClick={() => {
                                handleRemoveActivity(index)
                                removeActivityFromParent(`${day} - ${index + 1}`)
                            }}>Remove Activity</button> */}
                        </div>
                    )   
                })}
                <button onClick={() => handleAddActivity()} >Add An Activity</button>
            {/* add a day */}
            {/* add an image */}
        </div>
    )
  }
  
  export default ActivitiesForm;