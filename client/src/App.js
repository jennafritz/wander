import './App.css';
import HomePageContainer from './Containers/HomePageContainer';
import LoginModalContainer from './Containers/LoginModalContainer';
import RegisterModalContainer from './Containers/RegisterModalContainer';
import ProfileSetupContainer from './Containers/ProfileSetupContainer';
import SubmitATripForm from './Components/SubmitATripForm';
import MyJourneysContainer from './Containers/MyJourneysContainer';
import ItineraryListContainer from './Containers/ItineraryListContainer';
import RecItineraryListContainer from './Containers/RecItineraryListContainer';
import ProfilePageContainer from './Containers/ProfilePageContainer';
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" render={() => <HomePageContainer />} />
        <Route exact path="/login" render={() =><LoginModalContainer />} />
        <Route exact path="/register" render={() =><RegisterModalContainer />} />
        <Route exact path="/profileSetup" render={() => <ProfileSetupContainer />} />
        <Route exact path="/submitATrip" render={() => <SubmitATripForm />} />
        <Route exact path="/myJourneys" render={() => <MyJourneysContainer />} />
        <Route exact path="/itineraryList" render={() => <ItineraryListContainer />} />
        <Route exact path="/recommendedItineraries" render={() => <RecItineraryListContainer />} />
        <Route exact path="/profile" render={() => <ProfilePageContainer />} />
      </div>
    </Router>
  );
}

export default App;
