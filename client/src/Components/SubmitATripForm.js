import NavBar from "./NavBar";
import {useState} from 'react'
import ActivitiesForm from './ActivitiesForm'
import ImagesForm from "./ImagesForm";
import {useDispatch, useSelector} from 'react-redux'
import {submitItineraryDetails} from '../reducers.js/itinerariesReducer'
import {submitItineraryDays} from '../reducers.js/daysReducer'
import {submitItineraryPhotos} from '../reducers.js/photosReducer'
import {submitItineraryActivities} from '../reducers.js/activitiesReducer'

function SubmitATripForm() {

    const dispatch = useDispatch()
    const userId = useSelector(state => state.user.currentUser.id)

    const [formData, setFormData] = useState({
        name: "",
        destination: "",
        season: "Spring",
        length: 2,
        locale: "City",
        classification: "Adventure",
        budget: 1,
        creator_id: userId,
        range: 0
    })

    const [activitiesArray, setActivitiesArray] = useState([])

    const [imagesArray, setImagesArray] = useState([])

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
    }

    const removeActivityFromParent = (activityId) => {
        let activities = [...activitiesArray]
        let existsIndex = activities.findIndex(existingActivity => existingActivity.id === activityId)
        if(existsIndex >= 0){
            activities.splice(existsIndex, 1)
            setActivitiesArray(activities)
        }
    }

    const updateImagesArray = (arrayOfImages) => {
        let images = [...imagesArray]
        let updatedImages
        arrayOfImages.map(newImage => {
            let existsIndex = images.findIndex(existingImage => existingImage.id === newImage.id)
            if(existsIndex >= 0){
                images.splice(existsIndex, 1, newImage)
                setImagesArray(images)
            } else {
                updatedImages = [...images, newImage]
                setImagesArray(updatedImages)
            }
        })
    }

    const removeImageFromParent = (imageId) => {
        let images = [...imagesArray]
        let existsIndex = images.findIndex(existingImage => existingImage.id === imageId)
        if(existsIndex >= 0){
            images.splice(existsIndex, 1)
            setImagesArray(images)
        }
    }

    let lengthArray = Array(parseInt(formData.length, 10)).fill(null)

    function handleChange(event) {
        const key = event.target.id
        setFormData({
            ...formData,
            [key]: event.target.value
        })
    }

    // need to implement error message handling for photos and activities!
    const handleFullSubmit = () => {
        dispatch(submitItineraryDetails(formData)).then(response => {
            if(response.error){
                alert(response.payload)
            } else {
                let itinerary = response.payload
                let numDays = Array(formData.length).fill(null)
                let daysArray = numDays.map((day, index) => {
                    return {"name": `${itinerary.name} Day ${index + 1}`, "number": index + 1, "itinerary_id": itinerary.id}
                })
                dispatch(submitItineraryPhotos({itineraryId: itinerary.id, photosArray: imagesArray}))
                dispatch(submitItineraryDays(daysArray)).then(response => {
                    if(response.error){
                        alert(response.payload)
                    } else {
                        let arrayOfNewDays = response.payload
                        arrayOfNewDays.forEach(day => {
                            let dayActivities = activitiesArray.filter(activity => activity.day === day.number)
                            dispatch(submitItineraryActivities({dayId: day.id, activitiesArray: dayActivities}))
                        })
                    }
                })
            }        
        })
    }

    return (
        <div>
            <NavBar />
            <h3>Submit a Trip Form Component</h3>
            <form id="trip-form" onSubmit={(event) => {
                event.preventDefault()
                handleFullSubmit()
                console.log("trip form submitted")
                }}>
                <label htmlFor="name">Name</label>
                <input 
                required
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                />
                <label htmlFor="destination">Destination</label>
                <input 
                required
                type="text"
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                />
                <label htmlFor="season">Season</label>
                <select required name="season" id="season" defaultValue="Spring" onChange={handleChange}>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                    <option value="Fall">Fall</option>
                    <option value="Winter">Winter</option>
                </select>
                 <label htmlFor="locale">Locale</label>
                 <select required name="locale" id="locale" defaultValue="City" onChange={handleChange}>
                    <option value="City">City</option>
                    <option value="Country">Country</option>
                </select>
                 <label htmlFor="classification">Classification</label>
                 <select required name="classification" id="classification" defaultValue="Adventure" onChange={handleChange}>
                    <option value="Adventure">Adventure</option>
                    <option value="Culture">Culture</option>
                </select>
                 <label htmlFor="budget">Budget</label>
                 <select required name="budget" id="budget" defaultValue="1" onChange={handleChange}>
                    <option value="1">$</option>
                    <option value="2">$$</option>
                    <option value="3">$$$</option>
                    <option value="4">$$$$</option>
                </select>
                {/* <label htmlFor="length">length</label>
                <input 
                required
                placeholder={2}
                type="number"
                id="length"
                name="length"
                min="1"
                value={formData.length}
                onChange={handleChange}
                /> */}
                <label htmlFor="length">Length: {formData.length} Days</label>
                <input 
                required
                type="range"
                id="length"
                name="length"
                min="2"
                max="31"
                value={formData.length}
                onChange={handleChange} />
                <br/>
                
                {lengthArray.length > 0
                ? lengthArray.map((element, index) => {
                    let dayNumber = index + 1
                    return (
                        <div>
                            {`Day ${dayNumber}:`}
                            <ActivitiesForm day={dayNumber} updateActivitiesArray={updateActivitiesArray} removeActivityFromParent={removeActivityFromParent}/>
                        </div>
                    )
                    }
                ) : null}
                <ImagesForm updateImagesArray={updateImagesArray} removeImageFromParent={removeImageFromParent}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
  }
  
  export default SubmitATripForm;