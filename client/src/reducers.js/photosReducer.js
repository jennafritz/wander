import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    allPhotos: [],
    itineraryPhotos: []
}

// Action Creators

export const fetchAllPhotos = createAsyncThunk("photos/fetchAllPhotos", () => {
    return fetch(`http://localhost:3000/photos`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        }
    })
      .then(res => res.json())
      .then(photosArray => photosArray)
})

export const fetchItineraryPhotos = createAsyncThunk("photos/fetchItineraryPhotos", (itineraryId) => {
    return fetch(`http://localhost:3000/itinerary_photos?itineraryId=${itineraryId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        }
    })
      .then(res => res.json())
      .then(photosArray => photosArray)
})


// Reducer

const photosSlice = createSlice({
    name: "photos",
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchAllPhotos.fulfilled](state, action){
            state.allPhotos = action.payload
        },
        [fetchItineraryPhotos.fulfilled](state, action){
            state.itineraryPhotos = action.payload
        }
    }
})

export default photosSlice.reducer

