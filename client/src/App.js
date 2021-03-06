import './App.css';
import HomePageContainer from './Containers/HomePageContainer';
import LoginModalContainer from './Containers/LoginModalContainer';
import RegisterModalContainer from './Containers/RegisterModalContainer';
import ProfileSetupContainer from './Containers/ProfileSetupContainer';
import SubmitATripForm from './Components/SubmitATripForm';
import MyJourneysContainer from './Containers/MyJourneysContainer';
import ItineraryListContainer from './Containers/ItineraryListContainer';
import RecItinerariesListContainer from './Containers/RecItinerariesListContainer';
import ProfilePageContainer from './Containers/ProfilePageContainer';
import ItineraryDetailsContainer from './Containers/ItineraryDetailsContainer'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AvatarForm from './Components/AvatarForm';
import { fetchAllItineraries, fetchMyItineraries, recommendItineraries } from './reducers.js/itinerariesReducer';
import React, {useCallback, forwardRef} from 'react';
import {GoogleMapProvider} from '@ubilabs/google-maps-react-hooks'
import Questionnaire from './Components/Questionnaire';
import QuestionnaireTEST from './Components/QuestionnaireTEST';


const MapCanvas = React.forwardRef((props, ref) => (
  <div ref={ref} />
))

function App() {

  const dispatch = useDispatch()
  let allItineraries = useSelector(state => state.itineraries.allItineraries)
  let myItineraries = useSelector(state => state.itineraries.myItineraries)
  let user = useSelector(state => state.user.currentUser)

  useEffect(() => {
    dispatch(recommendItineraries(user))
  }, [allItineraries, myItineraries])

  const [mapContainer, setMapContainer] = useState(null)
  const mapRef = useCallback(node => {
    node && setMapContainer(node)
  })

  return (
    <Router>
      <GoogleMapProvider
      googleMapsAPIKey={process.env.REACT_APP_MAPS_API_KEY}
      libraries={['places']}
      mapContainer={mapContainer}
      onLoad={map => {
        map.setZoom(4)
      }}
      >
      <div>
        <Route exact path="/" render={() => <HomePageContainer />} />
        <Route exact path="/login" render={(routerProps) => <LoginModalContainer />} />
        <Route exact path="/register" render={(routerProps) => <RegisterModalContainer />} />
        <Route exact path="/questionnaire" render={() => <Questionnaire />} />
        <Route exact path="/avatar" render={() => <AvatarForm />} />
        <Route exact path="/submitATrip" render={() => <SubmitATripForm />} />
        <Route exact path="/myJourneys" render={() => <MyJourneysContainer />} />
        <Route exact path="/catalog" render={() => <ItineraryListContainer />} />
        <Route exact path="/recommended" render={() => <RecItinerariesListContainer />} />
        <Route exact path="/profile" render={() => <ProfilePageContainer />} />
        <Route exact path="/itineraryDetails" render={() => <ItineraryDetailsContainer />} />
      </div>
      <React.StrictMode>
        <MapCanvas ref={mapRef} />
      </React.StrictMode>
      </GoogleMapProvider>
    </Router>
  );
  
  // return (
  //   <Router>
  //     <div>
  //       <Route exact path="/" render={() => <HomePageContainer />} />
  //       <Route exact path="/login" render={(routerProps) => <LoginModalContainer routerProps={routerProps} handleLogin={handleLogin}/>} />
  //       <Route exact path="/register" render={(routerProps) => <RegisterModalContainer routerProps={routerProps} handleRegister={handleRegister}/>} />
  //       <Route exact path="/questionnaire" render={() => <ProfileSetupContainer />} />
  //       <Route exact path="/submitATrip" render={() => <SubmitATripForm />} />
  //       <Route exact path="/myJourneys" render={() => <MyJourneysContainer myItineraries={myItineraries}/>} />
  //       <Route exact path="/itineraryList" render={() => <ItineraryListContainer itineraries={itineraries}/>} />
  //       <Route exact path="/recommendedItineraries" render={() => <RecItinerariesListContainer itineraries={itineraries}/>} />
  //       <Route exact path="/profile" render={() => <ProfilePageContainer user={user} itineraries={itineraries} myItineraries={myItineraries}/>} />
  //       <Route exact path="/itineraryDetails" render={() => <ItineraryDetailsContainer />} />
  //     </div>
  //   </Router>
  // );
}

export default App;
