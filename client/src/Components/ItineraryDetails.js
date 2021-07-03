import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchItineraryDays } from '../reducers.js/daysReducer'
import photosReducer from '../reducers.js/photosReducer'

function ItineraryDetails({itinerary}) {


    let dispatch = useDispatch()

    let days = useSelector(state => state.days.itineraryDays)

    useEffect(() => {
        dispatch(fetchItineraryDays(itinerary.id))
    }, [])


    return (
        <div>
            <h3>Itinerary Details Component</h3>
            <h3>{itinerary.name}</h3>
            <h4>{itinerary.description}</h4>
            <h3>{itinerary.destination}</h3>
            <h3>{itinerary.length}</h3>
            <h3>{itinerary.locale}</h3>
            <h3>{itinerary.classification}</h3>
            {days.length > 0 
            ? days.map(day => {
                return <ul>
                    Day {day.number}:
                    {day.activities.map(activity => {
                        return <li>{activity.name}</li>
                    })}
                </ul>
            
            })
            : null}
        </div>
    )
  }
  
  export default ItineraryDetails;