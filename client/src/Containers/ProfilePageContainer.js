import RecItineraryPreviewContainer from './RecItineraryPreviewContainer'
import MyItinerariesPreviewContainer from './MyItinerariesPreviewContainer'
import Profile from '../Components/Profile'
import NavBar from '../Components/NavBar'

function ProfilePageContainer() {
    return (
        <div>
            <NavBar />
            <h1>Profile Page Container</h1>
            <Profile />
            <MyItinerariesPreviewContainer />
            <RecItineraryPreviewContainer />
        </div>
    )
  }
  
  export default ProfilePageContainer;