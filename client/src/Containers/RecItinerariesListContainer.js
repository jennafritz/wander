import NavBar from '../Components/NavBar'
import ItineraryThumbnailContainer from './ItineraryThumbnailContainer'
import {useSelector} from 'react-redux'

function RecItinerariesListContainer() {

    const itineraries = useSelector(state => state.itineraries.allItineraries)   

    return (
        <div>
            <NavBar />
            <h1>Recommended Itineraries List Container</h1>
            {itineraries.map(itinerary => <ItineraryThumbnailContainer parent="RecItinerariesListContainer" itinerary={itinerary}/>)}
        </div>
    )
  }
  
  export default RecItinerariesListContainer;