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
import {useState} from 'react'
import { fetchAllItineraries, fetchMyItineraries } from './reducers.js/itinerariesReducer';

function App() {

  const [user, setUser] = useState({})
  const [itineraries, setItineraries] = useState([])
  const [myItineraries, setMyItineraries] = useState([])

  console.log(myItineraries)

//  const getItineraries = (loggedInUser) => {
//     fetch("http://localhost:3000/itineraries", {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${localStorage.token}`,
//         "Content-Type": "application/json"
//       }
//     })
//       .then(res => res.json())
//       .then(itinerariesArray => {
//         if(itinerariesArray.error){
//           alert(itinerariesArray.error)
//         } else {
//           let myItinerariesArray = itinerariesArray.filter(itinerary => itinerary.users.find(userObj => userObj.id === loggedInUser.id))
//           setItineraries(itinerariesArray)
//           setMyItineraries(myItinerariesArray)
//         }
//       })
//   }

  const handleLogin = (loginObj, history) => {
    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(loginObj)
    })
        .then(res => res.json())
        .then(userInfo => {
          if(userInfo.error){
            alert(userInfo.error)
          } else {
            localStorage.token = userInfo.token
            setUser(userInfo.user)
            fetchAllItineraries()
            fetchMyItineraries(userInfo.user.id)
            if(userInfo.user.id && userInfo.user.travel_season){
              history.push("/profile")
            } else if (userInfo.user.id) {
              history.push("/questionnaire")
        }
        }})
  }

  function handleRegister(registerObj) {
    fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(registerObj)
    })
        .then(res => res.json())
        .then(userObj => console.log(userObj))
  }

  return (
    <Router>
      <div>
        <Route exact path="/" render={() => <HomePageContainer />} />
        <Route exact path="/login" render={(routerProps) => <LoginModalContainer routerProps={routerProps} handleLogin={handleLogin}/>} />
        <Route exact path="/register" render={(routerProps) => <RegisterModalContainer routerProps={routerProps} handleRegister={handleRegister}/>} />
        <Route exact path="/questionnaire" render={() => <ProfileSetupContainer />} />
        <Route exact path="/submitATrip" render={() => <SubmitATripForm />} />
        <Route exact path="/myJourneys" render={() => <MyJourneysContainer myItineraries={myItineraries}/>} />
        <Route exact path="/itineraryList" render={() => <ItineraryListContainer itineraries={itineraries}/>} />
        <Route exact path="/recommendedItineraries" render={() => <RecItinerariesListContainer itineraries={itineraries}/>} />
        <Route exact path="/profile" render={() => <ProfilePageContainer user={user} itineraries={itineraries} myItineraries={myItineraries}/>} />
        <Route exact path="/itineraryDetails" render={() => <ItineraryDetailsContainer />} />
      </div>
    </Router>
  );
}

export default App;
