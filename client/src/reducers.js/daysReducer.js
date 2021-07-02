import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    allDays: [],
    itineraryDays: []
}

// Action Creators

export const fetchAllDays = createAsyncThunk("days/fetchAllDays", () => {
    return fetch(`http://localhost:3000/days`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        }
    })
      .then(res => res.json())
      .then(daysArray => daysArray)
})

export const fetchItineraryDays = createAsyncThunk("days/fetchItineraryDays", (itineraryId) => {
    return fetch(`http://localhost:3000/itinerary_days?itineraryId=${itineraryId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        }
    })
      .then(res => res.json())
      .then(daysArray => daysArray)
})


// Reducer

const photosSlice = createSlice({
    name: "days",
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchAllDays.fulfilled](state, action){
            state.allDays = action.payload
        },
        [fetchItineraryDays.fulfilled](state, action){
            state.itineraryDays = action.payload
        }
    }
})

export default photosSlice.reducer

