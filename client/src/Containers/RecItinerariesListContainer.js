import NavBar from '../Components/NavBar'
import ItineraryThumbnailContainer from './ItineraryThumbnailContainer'

function RecItinerariesListContainer() {
    return (
        <div>
            <NavBar />
            <h1>Recommended Itineraries List Container</h1>
            <ItineraryThumbnailContainer parent="RecItinerariesListContainer"/>
        </div>
    )
  }
  
  export default RecItinerariesListContainer;