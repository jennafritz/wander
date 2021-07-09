import RecItinerariesPreviewContainer from './RecItinerariesPreviewContainer'
import MyItinerariesPreviewContainer from './MyItinerariesPreviewContainer'
import Profile from '../Components/Profile'
import NavBar from '../Components/NavBarComponent'
import Container from 'react-bootstrap/esm/Container'

function ProfilePageContainer() {

    return (
        <Container fluid className="backgroundColor">
            <NavBar />
            {/* <h1>Profile Page Container</h1> */}
            <Profile />
            <MyItinerariesPreviewContainer />
            <RecItinerariesPreviewContainer />
        </Container>
    )
  }
  
  export default ProfilePageContainer;