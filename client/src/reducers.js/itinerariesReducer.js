import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    allItineraries: [],
    myItineraries: [],
}

// Action Creators

export const fetchAllItineraries = createAsyncThunk("itineraries/fetchAllItineraries", () => {
    return fetch("http://localhost:3000/itineraries", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(itinerariesArray => itinerariesArray)
})

export const fetchMyItineraries = createAsyncThunk("itineraries/fetchMyItineraries", (loggedInUserId) => {
    return fetch(`http://localhost:3000/users/my_itineraries?userId=${loggedInUserId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(myItinerariesArray => myItinerariesArray)
})



// Reducer

const itinerariesSlice = createSlice({
    name: "itineraries",
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchAllItineraries.fulfilled](state, action){
            state.allItineraries = action.payload
        },
        [fetchMyItineraries.fulfilled](state, action){
            state.myItineraries = action.payload
        }
    }
})

export default itinerariesSlice.reducer