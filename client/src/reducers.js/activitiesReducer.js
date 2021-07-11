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
        .then(newlyCreatedActivities => {
            if(newlyCreatedActivities.error){
              return thunkAPI.rejectWithValue(newlyCreatedActivities.error)
            } else {
              return newlyCreatedActivities
            }
          })
  })


// Reducer

const activitiesSlice = createSlice({
    name: "activities",
    initialState,
    reducers: {
      clearActivities(state, action){
        return initialState
      }
    },
    extraReducers: {
        [submitItineraryActivities.fulfilled](state, action){
          return action.payload
        },
        [submitItineraryActivities.rejected](state, action){
            return action
        }
    }
})

export const {clearActivities} = activitiesSlice.actions
export default activitiesSlice.reducer

