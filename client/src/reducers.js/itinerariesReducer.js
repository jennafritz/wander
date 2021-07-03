import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    allItineraries: [],
    myItineraries: [], 
    recommendedItineraries: []
  }

// Action Creators

export const fetchAllItineraries = createAsyncThunk("itineraries/fetchAllItineraries", (unused, thunkAPI) => {
    return fetch("http://localhost:3000/itineraries", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(itinerariesArray => itinerariesArray)
      //     {
      //     if(itinerariesArray.error){
      //       return thunkAPI.rejectWithValue(itinerariesArray.error)
      //     } else {
      //       return itinerariesArray
      //     }
      // })
})

export const fetchMyItineraries = createAsyncThunk("itineraries/fetchMyItineraries", (loggedInUserId, thunkAPI) => {
    return fetch(`http://localhost:3000/users/my_itineraries?userId=${loggedInUserId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(myItinerariesArray => myItinerariesArray)
        //   {
        //   if(myItinerariesArray.error){
        //     return thunkAPI.rejectWithValue(myItinerariesArray.error)
        //   } else {
        //     return myItinerariesArray
        //   }
        // })
})

export const submitItineraryDetails = createAsyncThunk("itineraries/submitItinerary", (itineraryObj, thunkAPI) => {
  return fetch("http://localhost:3000/itineraries", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(itineraryObj)
    })
      .then(res => res.json())
      .then(newlyCreatedItinerary => {
        if(newlyCreatedItinerary.error){
          return thunkAPI.rejectWithValue(newlyCreatedItinerary.error)
        } else {
          return newlyCreatedItinerary
        }
      })
})



// Reducer

const itinerariesSlice = createSlice({
    name: "itineraries",
    initialState,
    reducers: {
        recommendItineraries(state, action){
          if(state.allItineraries.length >= state.myItineraries.length){
            let loggedInUser = action.payload
            let unsavedItineraries = [...state.allItineraries]

            state.myItineraries.forEach(myItinerary => {
              let index = unsavedItineraries.findIndex(itinerary => itinerary.id === myItinerary.id)
              if(index >= 0){
                unsavedItineraries.splice(index, 1)
              }
            })

            let matched = unsavedItineraries.map(unsavedItinerary => {
              let matchNum = 0
              if(unsavedItinerary.season && unsavedItinerary.season === loggedInUser.travel_season){
                matchNum += 1
                unsavedItinerary = {...unsavedItinerary, match: matchNum}
              }
              if(unsavedItinerary.length && unsavedItinerary.length === loggedInUser.travel_length){
                matchNum += 1
                unsavedItinerary = {...unsavedItinerary, match: matchNum}
              }
              if(unsavedItinerary.locale && unsavedItinerary.locale === loggedInUser.travel_locale){

                matchNum += 1
                unsavedItinerary = {...unsavedItinerary, match: matchNum}
              }
              if(unsavedItinerary.classification && unsavedItinerary.classification === loggedInUser.travel_classification){
                matchNum += 1
                unsavedItinerary = {...unsavedItinerary, match: matchNum}
              }
              if(unsavedItinerary.budget && unsavedItinerary.budget === loggedInUser.travel_budget){
                matchNum += 1
                unsavedItinerary = {...unsavedItinerary, match: matchNum}
              }
              return unsavedItinerary
            })

            let recommended = matched.filter(matchedItinerary => matchedItinerary.match > 0)

            state.recommendedItineraries = recommended
          }
        }
    },
    extraReducers: {
        [fetchAllItineraries.fulfilled](state, action){
          let itinerariesWithMatch = action.payload.map(itinerary => {return {...itinerary, match: 0}})
          state.allItineraries = itinerariesWithMatch       
        },
        [fetchMyItineraries.fulfilled](state, action){
            state.myItineraries = action.payload
        },
        [submitItineraryDetails.fulfilled](state, action){
          state.allItineraries.push({...action.payload, match: 0})
        },
        [submitItineraryDetails.rejected](state, action){
          return action
        }
    }
})

export const {recommendItineraries} = itinerariesSlice.actions
export default itinerariesSlice.reducer