import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    allDays: [],
    itineraryDays: []
}

// Action Creators

export const fetchAllDays = createAsyncThunk("days/fetchAllDays", (unused, thunkAPI) => {
    return fetch(`http://localhost:3000/days`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        }
    })
      .then(res => res.json())
      .then(daysArray => daysArray)
    //     {
    //     if(daysArray.error){
    //       return thunkAPI.rejectWithValue(daysArray.error)
    //     } else {
    //       return daysArray
    //     }
    //   })
})

export const fetchItineraryDays = createAsyncThunk("days/fetchItineraryDays", (itineraryId, thunkAPI) => {
    return fetch(`http://localhost:3000/itinerary_days?itineraryId=${itineraryId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        }
    })
      .then(res => res.json())
      .then(daysArray => daysArray)
    //     {
    //     if(daysArray.error){
    //       return thunkAPI.rejectWithValue(daysArray.error)
    //     } else {
    //       return daysArray
    //     }
    //   })
})

export const submitItineraryDays = createAsyncThunk("days/submitItineraryDays", (arrayOfDays, thunkAPI) => {
    return fetch("http://localhost:3000/days", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(arrayOfDays)
      })
        .then(res => res.json())
        .then(newlyCreatedDays => {
            if(newlyCreatedDays.error){
              return thunkAPI.rejectWithValue(newlyCreatedDays.error)
            } else {
              return newlyCreatedDays
            }
          })
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
        },
        [submitItineraryDays.fulfilled](state, action){
            state.allDays = [...state.allDays, ...action.payload]
        },
        [submitItineraryDays.rejected](state, action){
            return action
        }
    }
})

export default photosSlice.reducer