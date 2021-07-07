import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchItineraryDays } from '../reducers.js/daysReducer'
import photosReducer from '../reducers.js/photosReducer'
import { createUserItinerary } from '../reducers.js/userItinerariesReducer'
import { fetchAllItineraries, fetchMyItineraries } from '../reducers.js/itinerariesReducer'

function ItineraryDetails({itinerary, mine}) {

    const user = useSelector(state => state.user.currentUser)

    let dispatch = useDispatch()

    let days = useSelector(state => state.days.itineraryDays)

    useEffect(() => {
        dispatch(fetchItineraryDays(itinerary.id))
    }, [])

    return (
        <div>
            {/* <h3>Itinerary Details Component</h3> */}
            <h1>{itinerary.name}</h1>
            <h4>{itinerary.description}</h4>
            <h3>Destination: {itinerary.destination}</h3>
            <h3>Trip Length: {itinerary.length} Days</h3>
            <h3>Locale: {itinerary.locale}</h3>
            <h3>Travel Type: {itinerary.classification}</h3>
            {days.length > 0 
            ? days.map(day => {
                return <ul>
                    Day {day.number}:
                    {day.activities.map(activity => {
                        if(user.premium){
                            if(activity.info_url){
                                return <li><a href={activity.info_url}>{activity.name}</a></li>
                            } else {
                                return <li>{activity.name}</li>
                            }
                        } else {
                        return <li>{activity.name}</li>
                        }
                    })}
                </ul>
            
            })
            : null}
            {(user.premium && !!mine === false) ? <button onClick={() => {
                dispatch(createUserItinerary({user_id: user.id, itinerary_id: itinerary.id})).then(response => {
                    if(response.error){
                        alert(response.payload)
                        return response.payload
                    } else {
                        alert("This itinerary has been saved to your account. Happy Wandering!")
                        dispatch(fetchAllItineraries())
                        dispatch(fetchMyItineraries(user.id))
                    }
                })
            }}>Save Itinerary</button> : null}
        </div>
    )
  }
  
  export default ItineraryDetails;