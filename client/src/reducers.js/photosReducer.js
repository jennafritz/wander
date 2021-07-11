import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    allPhotos: [],
    itineraryPhotos: []
}

// Action Creators

export const fetchAllPhotos = createAsyncThunk("photos/fetchAllPhotos", (unused, thunkAPI) => {
    return fetch(`http://localhost:3000/photos`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        }
    })
      .then(res => res.json())
      .then(photosArray => photosArray)
    //     {
    //     if(photosArray.error){
    //       return thunkAPI.rejectWithValue(photosArray.error)
    //     } else {
    //       return photosArray
    //     }
    //   })
})

export const fetchItineraryPhotos = createAsyncThunk("photos/fetchItineraryPhotos", (itineraryId, thunkAPI) => {
    return fetch(`http://localhost:3000/itinerary_photos?itineraryId=${itineraryId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        }
    })
      .then(res => res.json())
      .then(photosArray => photosArray)
    //     {
    //     if(photosArray.error){
    //       return thunkAPI.rejectWithValue(photosArray.error)
    //     } else {
    //       return photosArray
    //     }
    //   })
})

export const submitItineraryPhotos = createAsyncThunk("photos/submitItineraryPhotos", (arrayOfPhotos, thunkAPI) => {
    return fetch("http://localhost:3000/photos", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(arrayOfPhotos)
      })
        .then(res => res.json())
        .then(newlyCreatedPhotos => {
            if(newlyCreatedPhotos.error){
              return thunkAPI.rejectWithValue(newlyCreatedPhotos.error)
            } else {
              return newlyCreatedPhotos
            }
          })
  })


// Reducer

const photosSlice = createSlice({
    name: "photos",
    initialState,
    reducers: {
      clearPhotos(state, action){
        return initialState
      }
    },
    extraReducers: {
        [fetchAllPhotos.fulfilled](state, action){
            state.allPhotos = action.payload
        },
        [fetchItineraryPhotos.fulfilled](state, action){
            state.itineraryPhotos = action.payload
        },
        [submitItineraryPhotos.fulfilled](state, action){
            state.allPhotos = [...state.allPhotos, ...action.payload]
        },
        [submitItineraryPhotos.rejected](state, action){
            return action
        }
    }
})

export const {clearPhotos} = photosSlice.actions
export default photosSlice.reducer

