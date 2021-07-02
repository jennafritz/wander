import NavBar from "../Components/NavBar";
import ItineraryThumbnailContainer from './ItineraryThumbnailContainer'
import {useSelector} from 'react-redux'

function ItineraryListContainer() {

    const itineraries = useSelector(state => state.itineraries.allItineraries)
    
    return (
        <div>
            <NavBar />
            <h1>Itinerary List Container</h1>
            {itineraries.map(itinerary => <ItineraryThumbnailContainer parent="ItineraryListContainer" itinerary={itinerary} key={itinerary.id}/>)}
        </div>
    )
  }
  
  export default ItineraryListContainer;