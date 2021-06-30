function Profile({user}) {

    console.log(user)
    return (
        <div>
            <h3>Profile Component</h3>
            
            <img src={user.picture} alt="profile picture"/>
            <h2>{user.username}</h2>
            <h4>{user.travel_season}</h4>
            <h4>{user.travel_length}</h4>
            <h4>{user.travel_locale}</h4>
            <h4>{user.travel_type}</h4>
        </div>
    )
  }
  
  export default Profile;