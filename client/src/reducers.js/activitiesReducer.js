import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    itineraryActivities: []
}

// Action Creators

export const submitItineraryActivities = createAsyncThunk("activities/submitItineraryActivities", (activitiesInfoObj, thunkAPI) => {
    return fetch("http://localhost:3000/activities", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(activitiesInfoObj)
      })
        .then(res => res.json())
        .then(newlyCreatedActivities => newlyCreatedActivities)
        //     {
        //     if(newlyCreatedActivities.error){
        //       return thunkAPI.rejectWithValue(newlyCreatedActivities.error)
        //     } else {
        //       return newlyCreatedActivities
        //     }
        //   })
  })


// Reducer

const activitiesSlice = createSlice({
    name: "activities",
    initialState,
    reducers: {

    },
    extraReducers: {
        [submitItineraryActivities.fulfilled](state, action){
            return action.payload
        }
    }
})

export default activitiesSlice.reducer

