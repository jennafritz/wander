import NavBar from "./NavBarComponent";
import {useState} from 'react'
import ActivitiesForm from './ActivitiesForm'
import ImagesForm from "./ImagesForm";
import {useDispatch, useSelector} from 'react-redux'
import {createFullTrip, submitItineraryDetails} from '../reducers.js/itinerariesReducer'
import {submitItineraryDays} from '../reducers.js/daysReducer'
import {submitItineraryPhotos} from '../reducers.js/photosReducer'
import {submitItineraryActivities} from '../reducers.js/activitiesReducer'
import {useHistory} from 'react-router-dom'
import {addCreditToUser} from '../reducers.js/userReducer'
import { useAutocomplete } from "@ubilabs/google-maps-react-hooks";
import { useRef } from "react";
import { useGoogleMap } from "@ubilabs/google-maps-react-hooks";
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
        const key = event.target.name
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
                destination: place.name || place.formatted_address,
                latitude: place.geometry.location.lat(),
                longitude: place.geometry.location.lng()
            })
        }
        // console.log(place.geometry.location.lat())
        // console.log(place.geometry.location.lng())
        // console.log(place.formatted_address)
        inputRef.current && inputRef.current.focus()
    }

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

    const handleCreateFullTrip = () => {
        let fullTripObj = {itinerary: formData, activitiesArray, imagesArray}
        dispatch(createFullTrip(fullTripObj))
        // fetch all itineraries
        // fetch my itineraries (and past and future) - not sure if need to do?
        // fetch all photos
        // fetch all days
    }

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
        <Container fluid className="backgroundColor">
            <NavBar />
            <Container id="submitTripFormContainer">
                {/* <h3>Submit a Trip Form Component</h3> */}
                <Row>
                    <Col as="h1">Submit a Trip to the Wander Catalog</Col>
                </Row>
                <Container >
                    <Form id="trip-form" onSubmit={(event) => {
                        // IF TRIP IS VALID HERE
                        event.preventDefault()
                        // handleFullSubmitAsyncTest()
                        handleCreateFullTrip()
                        console.log("trip form submitted")
                        }}>
                        <Row>
                            <Col>
                                <Form.Label htmlFor="destination">Destination</Form.Label>
                                <Form.Control
                                required
                                id="destination"
                                name="destination"
                                ref={inputRef}
                                value={formData.destination}
                                onChange={handleChange}
                                />
                            </Col>
                            <Col>
                                <Form.Label htmlFor="name">Name</Form.Label>
                                <Form.Control 
                                required
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label htmlFor="description">Description</Form.Label>
                                <Form.Control
                                as="textarea"
                                required
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                />
                            </Col>
                        </Row>
                        <Row id="submitFormRadioRow">
                            <Col>
                                <Form.Label htmlFor="season">Season</Form.Label>
                                <Form.Group>
                                    <Form.Check 
                                    type="radio"
                                    name="season"
                                    id="Spring"
                                    value="Spring"
                                    checked={formData.season === "Spring"}
                                    onChange={handleChange}
                                    label="Spring"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Check 
                                    type="radio"
                                    name="season"
                                    id="Summer"
                                    value="Summer"
                                    checked={formData.season === "Summer"}
                                    onChange={handleChange}
                                    label="Summer"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Check 
                                    type="radio"
                                    name="season"
                                    id="Fall"
                                    value="Fall"
                                    checked={formData.season === "Fall"}
                                    onChange={handleChange}
                                    label="Fall"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Check 
                                    type="radio"
                                    name="season"
                                    id="Winter"
                                    value="Winter"
                                    checked={formData.season === "Winter"}
                                    onChange={handleChange}
                                    label="Winter"
                                    />
                                </Form.Group>
                            </Col>
                        {/* <Form.Control as="select" required name="season" id="season" defaultValue="Spring" onChange={handleChange}>
                            <option value="Spring">Spring</option>
                            <option value="Summer">Summer</option>
                            <option value="Fall">Fall</option>
                            <option value="Winter">Winter</option>
                        </Form.Control> */}
                            <Col>
                                <Form.Label htmlFor="locale">Locale</Form.Label>
                                <Form.Group>
                                    <Form.Check 
                                    type="radio"
                                    name="locale"
                                    id="City"
                                    value="City"
                                    checked={formData.locale === "City"}
                                    onChange={handleChange}
                                    label="City"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Check 
                                    type="radio"
                                    name="locale"
                                    id="Country"
                                    value="Country"
                                    checked={formData.locale === "Country"}
                                    onChange={handleChange}
                                    label="Country"
                                    />
                                </Form.Group>
                            </Col>
                        {/* <select required name="locale" id="locale" defaultValue="City" onChange={handleChange}>
                            <option value="City">City</option>
                            <option value="Country">Country</option>
                        </select> */}
                            <Col>
                                <Form.Label htmlFor="classification">Classification</Form.Label>
                                <Form.Group>
                                    <Form.Check 
                                    type="radio"
                                    name="classification"
                                    value="Adventure"
                                    id="Adventure"
                                    checked={formData.classification === "Adventure"}
                                    onChange={handleChange}
                                    label="Adventure"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Check 
                                    type="radio"
                                    name="classification"
                                    value="Culture"
                                    id="Culture"
                                    checked={formData.classification === "Culture"}
                                    onChange={handleChange}
                                    label="Culture"
                                    />
                                </Form.Group>
                            </Col>
                        {/* <select required name="classification" id="classification" defaultValue="Adventure" onChange={handleChange}>
                            <option value="Adventure">Adventure</option>
                            <option value="Culture">Culture</option>
                        </select> */}
                            <Col>
                                <Form.Label htmlFor="budget">Budget</Form.Label>
                                <Form.Group>
                                    <Form.Check 
                                    type="radio"
                                    name="budget"
                                    id="1"
                                    value="1"
                                    checked={String(formData.budget) === "1"}
                                    onChange={handleChange}
                                    label="$"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Check 
                                    type="radio"
                                    name="budget"
                                    id="2"
                                    value="2"
                                    checked={String(formData.budget) === "2"}
                                    onChange={handleChange}
                                    label="$$"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Check 
                                    type="radio"
                                    name="budget"
                                    id="3"
                                    value="3"
                                    checked={String(formData.budget) === "3"}
                                    onChange={handleChange}
                                    label="$$$"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Check 
                                    type="radio"
                                    name="budget"
                                    id="4"
                                    value="4"
                                    checked={String(formData.budget) === "4"}
                                    onChange={handleChange}
                                    label="$$$$"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        {/* <select required name="budget" id="budget" defaultValue="1" onChange={handleChange}>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                        </select> */}
                        {/* <Form.Label htmlFor="length">length</Form.Label>
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
                        <Row id="submitFormRangeRow">
                            <Col>
                                <Form.Group>
                                    <Form.Label htmlFor="length">Length: {formData.length} Days</Form.Label>
                                    <Form.Control 
                                    required
                                    type="range"
                                    id="length"
                                    name="length"
                                    min="2"
                                    max="31"
                                    value={formData.length}
                                    onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="innerFormWidth">
                            {lengthArray.length > 0
                            ? lengthArray.map((element, index) => {
                                let dayNumber = index + 1
                                return (
                                    <Container fluid id="activitiesForm">
                                        <Form.Label>{`Day ${dayNumber} Activities:`}</Form.Label>
                                        <ActivitiesForm day={dayNumber} updateActivitiesArray={updateActivitiesArray} removeActivityFromParent={removeActivityFromParent}/>
                                    </Container>
                                )
                                }
                            ) : null}
                        </Row>
                        <Row className="innerFormWidth">
                            <Container fluid>
                                <Form.Label>Itinerary Images:</Form.Label>
                                <ImagesForm updateImagesArray={updateImagesArray} removeImageFromParent={removeImageFromParent}/>
                            </Container>
                        </Row>
                        <Row style={{justifyContent: 'center'}}>
                            <Form.Control className="formSubmit" type="submit" value="Submit"/>
                        </Row>
                    </Form>
                </Container>
            </Container>
        </Container>
    )
  }
  
  export default SubmitATripForm;