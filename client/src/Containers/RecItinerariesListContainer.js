import NavBar from '../Components/NavBar'
import ItineraryThumbnailContainer from './ItineraryThumbnailContainer'
import {useDispatch, useSelector} from 'react-redux'
import {recommendItineraries} from '../reducers.js/itinerariesReducer'
import {useEffect} from 'react'

function RecItinerariesListContainer() {

    const dispatch = useDispatch()
    const recommendedItineraries = useSelector(state => state.itineraries.recommendedItineraries)
    // const myItineraries = useSelector(state => state.itineraries.myItineraries)
    // const user = useSelector(state => state.user.currentUser)

    return (
        <div>
            <NavBar />
            <h1>Recommended Itineraries List Container</h1>
            {recommendedItineraries.map(itinerary => <ItineraryThumbnailContainer parent="RecItinerariesListContainer" itinerary={itinerary} mine={false}/>)}
        </div>
    )
  }
  
  export default RecItinerariesListContainer;