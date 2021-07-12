import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import SaveItineraryModal from '../Components/SaveItineraryModal'
import NoCreditsModal from '../Components/NoCreditsModal'
import Heart from '../heart_icon.png'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

function ItineraryThumbnailContainer({itinerary, parent}) {

    let history = useHistory()
    const photos = useSelector(state => state.photos.allPhotos.filter(photo => photo.itinerary_id === itinerary.id))
    const myItineraries = useSelector(state => state.itineraries.myItineraries)
    const user = useSelector(state => state.user.currentUser)

    const [saveModalShow, setSaveModalShow] = useState(false);
    const [noCreditsModalShow, setNoCreditsModalShow] = useState(false)
    
    let mine = myItineraries.find(myItinerary => myItinerary.id === itinerary.id)
    return (
        <Card id="itineraryCard" 
        // className="cardPadding"
        className={parent === "ItineraryListContainer" || parent === "RecItinerariesListContainer" || parent === "MyJourneysListContainerPast" || parent === "MyJourneysListContainerFuture" ? "cardPadding" : null}
        >
            {/* <h1>Itinerary Thumbnail Container</h1> */}
            {photos.length > 0 
            ? 
            <Container fluid style={{marginLeft: '0rem', marginRight: '0rem', paddingLeft: '0rem', paddingRight: '0rem', zIndex: '2', position: 'relative'}}>
                <Card.Img id="itineraryCardImg" src={photos[0].url} height="200px"/> 
                {parent === "ItineraryListContainer" && mine ? <img src={Heart} width="30px" id="itineraryHeart" /> : null}
                {parent === "RecItinerariesListContainer" ? <Container as="h6" id="itineraryMatch">{itinerary.match}/5</Container> : null}
            </Container>
            : null}
            <Card.Title id="itineraryCardTitle">{itinerary.name}</Card.Title>
            <Card.Body id="itineraryCardBody">
            </Card.Body>
            <Card.Footer id="itineraryCardFooter">
            <button id="viewDetailsButton" className="defaultButton" onClick={() => {
                if(user.premium){
                    history.push(({pathname: "/itineraryDetails", state: {itinerary, photos, mine}}))
                } else {
                    if(mine){
                        history.push(({pathname: "/itineraryDetails", state: {itinerary, photos, mine}}))
                    } else if(user.credits > 0) {
                        setSaveModalShow(true)
                    } else if(user.credits < 0){
                        setNoCreditsModalShow(true)
                    }
                }
            }
            }>View Details</button>
            </Card.Footer>
            <SaveItineraryModal itinerary={itinerary} photos={photos} show={saveModalShow} onHide={() => setSaveModalShow(false)} />
            <NoCreditsModal show={noCreditsModalShow} onHide={() => setNoCreditsModalShow(false)} />
        </Card>
    )
  }
  
  export default ItineraryThumbnailContainer;