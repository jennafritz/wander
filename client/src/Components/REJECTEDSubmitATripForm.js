import NavBar from "./NavBar";
import {useState} from 'react'
import SubmitATripFormTest from "./SubmitATripForm";

function SubmitATripForm() {

    const [formData, setFormData] = useState({
        name: "",
        destination: "",
        season: "",
        locale: "",
        classification: "",
        budget: "",
        days: []
    })

    // const [dayInputList, setDayInputList] = useState([
    //     {day: ""}
    // ])

    const [activityInputList, setActivityInputList] = useState([
        {activity: "", day: ""}
    ])

    function handleChange(event) {
        const key = event.target.id
        setFormData({
            ...formData,
            [key]: event.target.value
        })
    }

    // const handleAddDay = () => {
    //     setDayInputList([...dayInputList, {day: ""}])
    // }

    // const handleDayInputChange = (event, index) => {
    //     const {name, value} = event.target
    //     const list = [...dayInputList]
    //     list[index][name] = value
    //     setDayInputList(list)
    // }
    
    const handleAddActivity = () => {
        setActivityInputList([...activityInputList, {activity: ""}])
    }

    const handleActivityInputChange = (event, index) => {
        const {name, value} = event.target
        const list = [...activityInputList]
        list[index][name] = value
        setActivityInputList(list)
    }

    return (
        <div>
            <NavBar />
            <h3>Submit a Trip Form Component</h3>
            <form onSubmit={(event) => {
                event.preventDefault()
                console.log(formData)
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
                value={formData.days}
                onChange={handleChange}
                />

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
                                <label htmlFor="day">Day</label>
                                <input  
                                name="day"
                                type="number"
                                value={activity.day}
                                onChange={(event) => handleActivityInputChange(event, index)}
                                min="1"
                                max={`${formData.days}`}
                                />
                            </div>
                        )   
                    })}
                    <button onClick={() => handleAddActivity()} >Add Activity</button>
                                    
                {/* add a day */}
                {/* add an image */}
                <input type="submit" value="Submit"/>
            </form>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>TEST:</h1>
                <SubmitATripFormTest />


        </div>
    )
  }
  
  export default SubmitATripForm;