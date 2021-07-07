import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import { fetchAllDays } from '../reducers.js/daysReducer'

function MyJourneysSummary() {

    const myItineraries = useSelector(state => state.itineraries.myItineraries)
    const days = useSelector(state => state.days.allDays)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllDays())
    }, [])

    let totalDaysTraveled = 0

    myItineraries.forEach(itinerary => {
        let itineraryDaysArray = days.filter(day => day.itinerary_id === itinerary.id)
        let numDays = itineraryDaysArray.length
        totalDaysTraveled += numDays
        return totalDaysTraveled
    })

    return (
        <div>
            {/* <h3>My Journeys Summary Component</h3> */}
            <h5>Trips Taken: {myItineraries.length}</h5>
            <h5>Days Traveled: {totalDaysTraveled}</h5>
        </div>
    )
  }
  
  export default MyJourneysSummary;