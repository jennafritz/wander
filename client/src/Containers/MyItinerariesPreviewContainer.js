import ItineraryThumbnailContainer from './ItineraryThumbnailContainer'

function MyItinerariesPreviewContainer({myItineraries}) {

    return (
        <div>
            <h1>My Itineraries Preview Container</h1>
            {myItineraries.map(itinerary => <ItineraryThumbnailContainer parent="myItinerariesPreviewContainer" itinerary={itinerary} key={itinerary.id}/>)}
        </div>
    )
  }
  
  export default MyItinerariesPreviewContainer;