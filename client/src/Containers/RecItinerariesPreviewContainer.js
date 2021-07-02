import ItineraryThumbnailContainer from './ItineraryThumbnailContainer'
import {useSelector} from 'react-redux'

function RecItinerariesPreviewContainer() {

    const itineraries = useSelector(state => state.itineraries.allItineraries)    
    
    return (
        <div>
            <h1>Recommended Itineraries Preview Container</h1>
            {itineraries.map(itinerary => <ItineraryThumbnailContainer parent="RecItinerariesPreviewContainer" itinerary={itinerary} key={itinerary.id} mine={false}/>)}           
        </div>
    )
  }
  
  export default RecItinerariesPreviewContainer;