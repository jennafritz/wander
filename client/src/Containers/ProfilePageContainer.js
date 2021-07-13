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
            <Carousel show={4}>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
            </Carousel>
        </Container>
    )
  }
  
  export default ProfilePageContainer;