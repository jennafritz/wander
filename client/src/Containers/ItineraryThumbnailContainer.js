import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import SaveItineraryModal from '../Components/SaveItineraryModal'
import Heart from '../heart_icon.png'
import Card from 'react-bootstrap/Card'

function ItineraryThumbnailContainer({itinerary, parent}) {

    let history = useHistory()
    const photos = useSelector(state => state.photos.allPhotos.filter(photo => photo.itinerary_id === itinerary.id))
    const myItineraries = useSelector(state => state.itineraries.myItineraries)
    const user = useSelector(state => state.user.currentUser)

    const [modalShow, setModalShow] = useState(false);
    
    let mine = myItineraries.find(myItinerary => myItinerary.id === itinerary.id)
    return (
        <Card id="itineraryCard" className={parent === "ItineraryListContainer" || parent === "RecItinerariesListContainer" ? "cardPadding" : null}>
            {/* <h1>Itinerary Thumbnail Container</h1> */}
            {photos.length > 0 ? <Card.Img id="itineraryCardImg" src={photos[0].url} height="200px"/> : null}<br/>
            <Card.Title>{itinerary.name}</Card.Title>
            <Card.Body id="itineraryCardBody">
                {parent === "RecItinerariesListContainer" ? <h6>Match: {itinerary.match}/5</h6> : null}
                {parent === "ItineraryListContainer" && mine ? <img src={Heart} width="30px" /> : null}
            </Card.Body>
            <Card.Footer id="itineraryCardFooter">
            <button id="viewDetailsButton" className="defaultButton" onClick={() => {
                if(user.premium){
                    history.push(({pathname: "/itineraryDetails", state: {itinerary, photos, mine}}))
                } else {
                    if(mine){
                        history.push(({pathname: "/itineraryDetails", state: {itinerary, photos, mine}}))
                    } else {
                        setModalShow(true)
                    }
                }
            }
            }>View Details</button>
            </Card.Footer>
            <SaveItineraryModal itinerary={itinerary} photos={photos} show={modalShow} onHide={() => setModalShow(false)} />
        </Card>
    )
  }
  
  export default ItineraryThumbnailContainer;