import RecItinerariesPreviewContainer from './RecItinerariesPreviewContainer'
import MyItinerariesPreviewContainer from './MyItinerariesPreviewContainer'
import Profile from '../Components/Profile'
import NavBar from '../Components/NavBar'

function ProfilePageContainer() {

    return (
        <div>
            <NavBar />
            <br/>
            {/* <h1>Profile Page Container</h1> */}
            <Profile />
            <br />
            <br />
            <MyItinerariesPreviewContainer />
            <br />
            <br />
            <RecItinerariesPreviewContainer />
        </div>
    )
  }
  
  export default ProfilePageContainer;