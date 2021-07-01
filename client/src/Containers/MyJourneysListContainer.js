import ItineraryThumbnailContainer from './ItineraryThumbnailContainer'

function MyJourneysListContainer({myItineraries}) {
    return (
        <div>
            <h1>My Journeys List Container</h1>
            {myItineraries.map(itinerary => <ItineraryThumbnailContainer itinerary={itinerary} key={itinerary.id} parent="MyJourneysListContainer"/>)}
        </div>
    )
  }
  
  export default MyJourneysListContainer;