import './App.css';
import React, {Component} from 'react';
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
// import {useEffect, useState} from 'react'

class App extends Component {

  constructor(){
    super()
    this.state = {
      user: {}
    }
  }
//   const [user, setUser] = useState({})

  handleLogin = (loginObj, history) => {
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
            this.setState({user: userInfo.user})
          }
        })
        .then(() => {
          console.log("third then")
          this.handleLoginRedirect(history)})
  }

  handleLoginRedirect = (history) => {
    console.log("handleLoginRedirect")
    console.log(this.state.user)
    if(this.state.user.id && this.state.user.travel_season){
      history.push("/profile")
    } else if (this.state.user.id) {
      history.push("/questionnaire")
    }
  }

  handleRegister = (registerObj) => {
    fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(registerObj)
    })
        .then(res => res.json())
        .then(userObj => console.log(userObj))
  }

  render() {
    return (
        <Router>
        <div>
            <Route exact path="/" render={() => <HomePageContainer />} />
            <Route exact path="/login" render={(routerProps) => <LoginModalContainer routerProps={routerProps} handleLogin={this.handleLogin}/>} />
            <Route exact path="/register" render={(routerProps) => <RegisterModalContainer routerProps={routerProps} handleRegister={this.handleRegister}/>} />
            <Route exact path="/questionnaire" render={() => <ProfileSetupContainer />} />
            <Route exact path="/submitATrip" render={() => <SubmitATripForm />} />
            <Route exact path="/myJourneys" render={() => <MyJourneysContainer />} />
            <Route exact path="/itineraryList" render={() => <ItineraryListContainer />} />
            <Route exact path="/recommendedItineraries" render={() => <RecItineraryListContainer />} />
            <Route exact path="/profile" render={() => <ProfilePageContainer user={this.state.user}/>} />
        </div>
        </Router>
    );
    }
}

export default App;
