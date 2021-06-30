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
import {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'

function App() {

  const [user, setUser] = useState({})
  // let history = useHistory()

  const handleLogin = (loginObj, history) => {
    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(loginObj)
    })
        .then(res => res.json())
        .then(userInfo => {
          console.log(userInfo.user)
          console.log("second then")
          if(userInfo.error){
            alert(userInfo.error)
          } else {
            localStorage.token = userInfo.token
            setUser(userInfo.user)
            if(userInfo.user.id && userInfo.user.travel_season){
              history.push("/profile")
            } else if (userInfo.user.id) {
              history.push("/questionnaire")
        }
        }})
        // .then(() => {
        //   if(user.id && user.travel_season){
        //     return history.push("/profile")
        //   } else if (user.id) {
        //     return history.push("/questionnaire")
        //   }
        // })
        // (user.id && user.travel_season) ? history.push("/profile") 
        //   : (user.id) ? history.push("/questionnaire") : null
          // console.log("third then")
          // if(user.id && user.travel_season){
          //   history.push("/profile")
          // } else if (user.id) {
          //   history.push("/questionnaire")
          // }
          // handleLoginRedirect(history)
        // )
  }

  // const handleLoginRedirect = (history) => {
  //   console.log("handleLoginRedirect")
  //   console.log(user)
  //   if(user.id && user.budget){
  //     history.push("/profile")
  //   } else if (user.id) {
  //     history.push("/profileSetup")
  //   }
  // }

  // const handleLoginRedirect = () => {
  //   console.log("handleLoginRedirect")
  //   console.log(user)
  //   // if(user.id && user.travel_season){
  //   //   history.push("/profile")
  //   // } else if (user.id) {
  //   //   history.push("/questionnaire")
  //   // }
  // }

  // useEffect(() => {
  //   if(user.id && user.budget){
  //     history.push("/profile")
  //   } else if (user.id){
  //     history.push("questionnaire")
  //   }
  //   // handleLoginRedirect()
  // }, [user])

  //tried to remake handleLogin as async function but don't really know what's going on
    // const handleLogin = async (loginObj, history) => {
    //   const fetcher = await fetch("http://localhost:3000/login", {
    //       method: "POST",
    //       headers: {"Content-Type": "application/json"},
    //       body: JSON.stringify(loginObj)
    //   })
    //       // .then(res => res.json())
          
    //       // .then(userInfo => {
    //         const response = await fetcher.json()
    //         console.log(response.user)
    //         console.log("second then")
    //         if(response.error){
    //           alert(response.error)
    //         } else {
    //           localStorage.token = response.token
    //           const finalUser = await setUser(response.user)
    //           return finalUser
    //         }
    //       // })
    //       // .then((mystery) => {
    //       //   console.log("third then")
    //       //   console.log(mystery)
    //       //   handleLoginRedirect(history)})
    // }

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
        <Route exact path="/myJourneys" render={() => <MyJourneysContainer />} />
        <Route exact path="/itineraryList" render={() => <ItineraryListContainer />} />
        <Route exact path="/recommendedItineraries" render={() => <RecItineraryListContainer />} />
        <Route exact path="/profile" render={() => <ProfilePageContainer user={user}/>} />
      </div>
    </Router>
  );
}

export default App;
