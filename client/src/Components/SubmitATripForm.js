import NavBar from "./NavBar";
import {useState} from 'react'
import ActivitiesForm from './ActivitiesForm'
import ImagesForm from "./ImagesForm";
import {useDispatch, useSelector} from 'react-redux'
import {submitItineraryDetails} from '../reducers.js/itinerariesReducer'
import {submitItineraryDays} from '../reducers.js/daysReducer'
import {submitItineraryPhotos} from '../reducers.js/photosReducer'
import {submitItineraryActivities} from '../reducers.js/activitiesReducer'
import {useHistory} from 'react-router-dom'
import {addCreditToUser} from '../reducers.js/userReducer'
import { useAutocomplete } from "@ubilabs/google-maps-react-hooks";
import { useRef } from "react";
import { useGoogleMap } from "@ubilabs/google-maps-react-hooks";

function SubmitATripForm() {

    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.currentUser)
    const userId = user.id

    const inputRef = useRef(null)
    // const [inputValue, setInputValue] = useState('')
    const {map} = useGoogleMap()

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        destination: "",
        latitude: "",
        longitude: "",
        season: "Spring",
        length: 2,
        locale: "City",
        classification: "Adventure",
        budget: 1,
        creator_id: userId,
    })

    const [activitiesArray, setActivitiesArray] = useState([])

    const [imagesArray, setImagesArray] = useState([])

    // My handle change
    function handleChange(event) {
        const key = event.target.id
        setFormData({
            ...formData,
            [key]: event.target.value
        })
    }

    const onPlaceChanged = (place) => {
        if (place) {
            // setInputValue(place.formatted_address || place.name)
            setFormData({
                ...formData,
                destination: place.formatted_address || place.name,
                latitude: place.geometry.location.lat(),
                longitude: place.geometry.location.lng()
            })
        }
        // console.log(place.geometry.location.lat())
        // console.log(place.geometry.location.lng())
        // console.log(place.formatted_address)
        inputRef.current && inputRef.current.focus()
    }

    console.log(inputRef.current)

    useAutocomplete({
        inputField: inputRef && inputRef.current,
        // options: "", 
        // {
        //     fields: ['formatted_address', 'geometry', 'name', 'place_id', 'url']
        // },
        map,
        onPlaceChanged
      });

    // Their input change
    // const handleInputChange = (event) => {
    //     setInputValue(event.target.value)
    // }

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



    // need to implement error message handling for photos and activities!
    // also need to handle adding credits to user and thanking them before pushing them to another page (perhaps profile? maybe a modal that asks them if they want to submit again? or should there be a limit on submissions?)

    const handleFullSubmitAsyncTest = async () => {
        let numDays = Array(formData.length).fill(null)
        // debugger
        let itinerary = await dispatch(submitItineraryDetails(formData)).then(response => {
            // debugger
            if(response.error){
                alert(response.payload)
                return response.payload
            } else {
                // debugger
                return response.payload
            }
        })
        // debugger
        let daysArray = numDays.map((day, index) => {
            // debugger
            return {"name": `${itinerary.name} Day ${index + 1}`, "number": index + 1, "itinerary_id": itinerary.id}
        })
        // debugger
        let photos = await dispatch(submitItineraryPhotos({itineraryId: itinerary.id, photosArray: imagesArray})).then(response => {
            // debugger
            if(response.error){
                alert(response.payload)
                return response.payload
            } else {
                // debugger
                return response.payload
            }
        })
        // debugger
        let days = await dispatch(submitItineraryDays(daysArray)).then(response => {
            // debugger
            if(response.error){
                alert(response.payload)
                return response.payload
            } else {
                // debugger
                return response.payload
            }
        })
        // debugger

        let activities = await Promise.all(days.map(async day => {
            // debugger
            let dayActivities = activitiesArray.filter(activity => activity.day === day.number)
            let newActivities = await dispatch(submitItineraryActivities({dayId: day.id, activitiesArray: dayActivities})).then(response => {
                if(response.error){
                    alert(response.payload)
                    return response
                } else {
                    return response.payload
                }
            })
            return newActivities
        }))
        // debugger
        
        // need some way to only run this if everything above went through properly.
        // issue is mainly with activities bc cannot do .then and have different return for error/success
        if(activities[0][0] && activities[0][0].id){
            dispatch(addCreditToUser(user))
            alert("Thank you for contributing to Wander! An itinerary credit has been added to your account - Happy Wandering!")
            history.push("/profile")
        }
        return {itinerary: itinerary, photos: photos, days: days, activities: activities}
    }

    const tripValid = () => {
        let numDays = Array(formData.length).fill(null)
        let activitiesPerDay = numDays.map((day, index) => (
            activitiesArray.filter(activity => activity.day === (index + 1))
        ))
        if(activitiesPerDay.every(day => (day.length >= 2))){
            return true
        } else {
            return false
        }
    }

    console.log(tripValid())

    // const handleFullSubmit = async () => {
    //     let createdPhotos = []
    //     let createdDays = []
    //     let createdActivities = []
    //     await dispatch(submitItineraryDetails(formData)).then(response => {
    //         debugger
    //         if(response.error){
    //             alert(response.payload)
    //             return response.payload
    //         } else {
    //             let itinerary = response.payload
    //             let numDays = Array(formData.length).fill(null)
    //             let daysArray = numDays.map((day, index) => {
    //                 return {"name": `${itinerary.name} Day ${index + 1}`, "number": index + 1, "itinerary_id": itinerary.id}
    //             })
    //             dispatch(submitItineraryPhotos({itineraryId: itinerary.id, photosArray: imagesArray})).then(response => {
    //                 debugger
    //                 if(response.error){
    //                     alert(response.payload)
    //                     return response.payload
    //                 } else {
    //                     createdPhotos = response.payload
    //                     debugger
    //                     dispatch(submitItineraryDays(daysArray)).then(response => {
    //                         debugger
    //                         if(response.error){
    //                             alert(response.payload)
    //                             return response.payload
    //                         } else {
    //                             let arrayOfNewDays = response.payload
    //                             createdDays = arrayOfNewDays
    //                             debugger
    //                             arrayOfNewDays.forEach(day => {
    //                                 let dayActivities = activitiesArray.filter(activity => activity.day === day.number)
    //                                 dispatch(submitItineraryActivities({dayId: day.id, activitiesArray: dayActivities})).then(response => {
    //                                     debugger
    //                                     if(response.error){
    //                                         alert(response.payload)
    //                                         return response.payload
    //                                     } else {
    //                                         createdActivities = [...createdActivities, ...response.payload]
    //                                         debugger
    //                                         return response.payload
    //                                     }
    //                                 })
    //                             })
    //                         }
    //                     })
    //                 }
    //             })
                
    //         }        
    //     })
    // }
    

    return (
        <div>
            <NavBar />
            <br />
            {/* <h3>Submit a Trip Form Component</h3> */}
            <h1>Submit a Trip to the Wander Catalog</h1>
            <br />
            <form id="trip-form" onSubmit={(event) => {
                
                event.preventDefault()
                handleFullSubmitAsyncTest()
                console.log("trip form submitted")
                }}>
                <label htmlFor="destination">Destination</label>
                <input
                required
                id="destination"
                name="destination"
                ref={inputRef}
                value={formData.destination}
                onChange={handleChange}
                />
                <label htmlFor="name">Name</label>
                <input 
                required
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                />
                <label htmlFor="description">Description</label>
                <textarea 
                required
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                />
                {/* <input 
                required
                type="text"
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                /> */}
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