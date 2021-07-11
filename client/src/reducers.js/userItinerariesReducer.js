import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    // allUserItineraries: [],
    userItinerary: {}
}

// Action Creators

export const markUserItineraryTraveled = createAsyncThunk("userItineraries/markUserItineraryTraveled", (userItineraryInfoObj, thunkAPI) => {
  return fetch(`http://localhost:3000/user_itineraries/mark_traveled`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userItineraryInfoObj)
    })
      .then(res => res.json())
      .then(updatedUserItinerary => {
          if(updatedUserItinerary.error){
            return thunkAPI.rejectWithValue(updatedUserItinerary.error)
          } else {
            return updatedUserItinerary
          }
        })
})


export const createUserItinerary = createAsyncThunk("userItineraries/createUserItineraries", (userItineraryInfo, thunkAPI) => {
    return fetch("http://localhost:3000/user_itineraries", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userItineraryInfo)
      })
        .then(res => res.json())
        .then(newlyCreatedUserItinerary => {
            if(newlyCreatedUserItinerary.error){
              return thunkAPI.rejectWithValue(newlyCreatedUserItinerary.error)
            } else {
              return newlyCreatedUserItinerary
            }
          })
  })


// Reducer

const userItinerariesSlice = createSlice({
    name: "userItineraries",
    initialState,
    reducers: {
      clearUserItineraries(state, action){
        return initialState
      }
    },
    extraReducers: {
      [markUserItineraryTraveled.fulfilled](state, action){
        state.userItinerary = action.payload
      },
      [markUserItineraryTraveled.rejected](state, action){
          return action
      },
      [createUserItinerary.fulfilled](state, action){
          state.userItinerary = action.payload
      },
      [createUserItinerary.rejected](state, action){
          return action
      }
    }
})

export const {clearUserItineraries} = userItinerariesSlice.actions
export default userItinerariesSlice.reducer

