import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = [{
    itineraries: [],
    myItineraries: []
}]

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
        .then(itinerariesArray => console.log("all itineraries:", itinerariesArray))
})

export const fetchMyItineraries = createAsyncThunk("itineraries/fetchMyItineraries", (loggedInUserId) => {
    return fetch(`http://localhost:3000/users/${loggedInUserId}/itineraries`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(itinerariesArray => console.log("my itineraries", itinerariesArray))
})



// Reducer

const itinerariesSlice = createSlice({
    name: "itineraries",
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchAllItineraries.fulfilled](state, action){
            state.itineraries = action.payload
        }
    }
})

// function itineraryReducer(state = initialItinerariesState, action) {
//     switch(action.type) {
//         case "fetch-itineraries":
//             return [...state, itineraries]
//     }
// }

export default itinerariesSlice.reducer