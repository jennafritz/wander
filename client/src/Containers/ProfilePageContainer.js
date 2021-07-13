import RecItinerariesPreviewContainer from './RecItinerariesPreviewContainer'
import MyPastItinerariesPreviewContainer from './MyPastItinerariesPreviewContainer'
import MyFutureItinerariesPreviewContainer from './MyFutureItinerariesPreviewContainer'
import Profile from '../Components/Profile'
import NavBar from '../Components/NavBarComponent'
import Container from 'react-bootstrap/esm/Container'
import Carousel from '../Components/Carousel'

function ProfilePageContainer() {

    return (
        <Container fluid className="backgroundColor">
            <NavBar />
            {/* <h1>Profile Page Container</h1> */}
            <Profile />
            <MyPastItinerariesPreviewContainer />
            <MyFutureItinerariesPreviewContainer />
            <RecItinerariesPreviewContainer />
        </Container>
    )
  }
  
  export default ProfilePageContainer;