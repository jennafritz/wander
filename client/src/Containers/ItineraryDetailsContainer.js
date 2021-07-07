import ItineraryDetails from '../Components/ItineraryDetails'
import ItineraryPhotoGallery from '../Components/ItineraryPhotoGallery'
import {useHistory, useLocation} from 'react-router-dom'

function ItineraryDetailsContainer() {

    let history = useHistory()
    let location = useLocation()

    let itinerary = location.state.itinerary
    let photos = location.state.photos
    let mine = location.state.mine

    return (
        <div>
            {/* <h1>Itinerary Details Container</h1> */}
            <ItineraryDetails itinerary={itinerary} mine={mine}/>
            <ItineraryPhotoGallery photos={photos}/>
            <button onClick={() => history.goBack()}>Go Back</button>

        </div>
    )
  }
  
  export default ItineraryDetailsContainer;