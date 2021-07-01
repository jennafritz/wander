import NavBar from "./NavBar";
import {useEffect, useState} from 'react'

function ActivitiesFormTest({day, updateActivitiesArray}) {

    const [activityInputList, setActivityInputList] = useState([
        {activity: "", day: day, order: "", id: ""}
    ])

    // const [arrayOfActivities, setArrayOfActivities] = useState(null)

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

    const handleActivityInputChange = (event, index) => {
        const {name, value} = event.target
        const list = [...activityInputList]
        list[index][name] = value
        list[index].order = index + 1
        list[index].id = `${day} - ${index + 1}`
        setActivityInputList(list)
    }

    return (
        <div >
            {/* <form id="activities-form"> */}
                <label htmlFor="activities">Activities</label>
                    {activityInputList.map((activity, index) => {
                        return(
                            <div>
                                <label htmlFor="activity">Activity</label>
                                <input  
                                name="activity"
                                value={activity.activity}
                                onChange={(event) => handleActivityInputChange(event, index)}
                                />
                                <button onClick={() => handleRemoveActivity(index)}>Remove Activity</button>
                            </div>
                        )   
                    })}
                    <button onClick={() => handleAddActivity()} >Add Activity</button>
            {/* add a day */}
            {/* add an image */}
            {/* <input type="submit" value="Submit"/> */}
            {/* </form> */}
        </div>
    )
  }
  
  export default ActivitiesFormTest;