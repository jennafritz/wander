import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    userItinerary: {}
}

// Action Creators

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

    },
    extraReducers: {
        [createUserItinerary.fulfilled](state, action){
            state.userItinerary = action.payload
        },
        [createUserItinerary.rejected](state, action){
            return action
        }
    }
})

export default userItinerariesSlice.reducer

