import NavBar from "./NavBar";
import {useState} from 'react'
import ActivitiesFormTest from './ActivitiesFormTest'

function SubmitATripFormTest() {

    // console.log(document.forms)

    const [formData, setFormData] = useState({
        name: "",
        destination: "",
        season: "",
        locale: "",
        classification: "",
        budget: "",
        days: 2
    })

    const [activitiesArray, setActivitiesArray] = useState([])

    // console.log(activitiesArray)

    const updateActivitiesArray = (arrayOfActivities) => {
        let activities = [...activitiesArray]
        let updatedActivities
        arrayOfActivities.map(newActivity => {
            let existsIndex = activities.findIndex(existingActivity => existingActivity.id === newActivity.id)
            if(existsIndex >= 0){
                activities.splice(existsIndex, 1, newActivity)
                setActivitiesArray(activities)
            } else {
                updatedActivities = [...activities, newActivity]
                setActivitiesArray(updatedActivities)
            }
        })

        // let updatedActivitiesArray = 
        // setActivitiesArray([...activitiesArray, arrayOfActivities])
    }

    const removeActivityFromParent = (activityId) => {
        let activities = [...activitiesArray]
        let existsIndex = activities.findIndex(existingActivity => existingActivity.id === activityId)
        if(existsIndex >= 0){
            activities.splice(existsIndex, 1)
            setActivitiesArray(activities)
        }
    }

    // const removeDuplicateActivities = () => {
    //     activities = [...activitiesArray]
    //     activities.map
    // }

    let daysArray = Array(parseInt(formData.days, 10)).fill(null)

    function handleChange(event) {
        const key = event.target.id
        setFormData({
            ...formData,
            [key]: event.target.value
        })
    }

    return (
        <div>
            <NavBar />
            <h3>Submit a Trip Form Component</h3>
            <form id="trip-form" onSubmit={(event) => {
                event.preventDefault()
                console.log("trip form submitted")
                }}>
                <label htmlFor="name">Name</label>
                <input 
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                />
                <label htmlFor="destination">Destination</label>
                <input 
                type="text"
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                />
                <label htmlFor="season">Season</label>
                <select name="season" id="season" onChange={handleChange}>
                    <option selected disabled>Select Season</option>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                    <option value="Fall">Fall</option>
                    <option value="Winter">Winter</option>
                </select>
                 <label htmlFor="locale">Locale</label>
                 <select name="locale" id="locale" onChange={handleChange}>
                    <option selected disabled>Select Locale</option>
                    <option value="City">City</option>
                    <option value="Country">Country</option>
                </select>
                 <label htmlFor="classification">Classification</label>
                 <select name="classification" id="classification" onChange={handleChange}>
                    <option selected disabled>Select Classification</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Culture">Culture</option>
                </select>
                 <label htmlFor="budget">Budget</label>
                 <select name="budget" id="budget" onChange={handleChange}>
                    <option selected disabled>Select Budget</option>
                    <option value="1">$$$$</option>
                    <option value="2">$$$</option>
                    <option value="3">$$</option>
                    <option value="4">$</option>
                </select>
                <label htmlFor="days">Days</label>
                <input 
                type="number"
                id="days"
                name="days"
                min="1"
                value={formData.days}
                onChange={handleChange}
                />
                <br/>
                
                {daysArray.map((element, index) => {
                    let dayNumber = index + 1
                    return (
                        <div>
                            {`Day ${dayNumber}:`}
                            <ActivitiesFormTest day={dayNumber} updateActivitiesArray={updateActivitiesArray} removeActivityFromParent={removeActivityFromParent}/>
                        </div>
                    )
                    }
                )}
                
                {/* add a day */}
                {/* add an image */}
                {/* <input type="submit" value="Submit"/> */}
            </form>
                    <button type="submit" form="trip-form" onClick={(event) => {
                        event.preventDefault()
                        console.log("all submitted")}}>Submit</button>
        </div>
    )
  }
  
  export default SubmitATripFormTest;