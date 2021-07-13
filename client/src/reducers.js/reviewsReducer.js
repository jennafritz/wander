import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    allReviews: [],
    itineraryReviews: []
}

// Action Creators

export const fetchAllReviews = createAsyncThunk("reviews/fetchAllReviews", (unused, thunkAPI) => {
    return fetch(`http://localhost:3000/reviews`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        }
    })
      .then(res => res.json())
      .then(reviewsArray => reviewsArray)
    //     {
    //     if(reviewsArray.error){
    //       return thunkAPI.rejectWithValue(reviewsArray.error)
    //     } else {
    //       return reviewsArray
    //     }
    //   })
})

export const fetchItineraryReviews = createAsyncThunk("reviews/fetchItineraryReviews", (itineraryId, thunkAPI) => {
    return fetch(`http://localhost:3000/itinerary_reviews?itineraryId=${itineraryId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        }
    })
      .then(res => res.json())
      .then(reviewsArray => reviewsArray)
    //     {
    //     if(reviewsArray.error){
    //       return thunkAPI.rejectWithValue(reviewsArray.error)
    //     } else {
    //       return reviewsArray
    //     }
    //   })
})

export const submitItineraryReview = createAsyncThunk("reviews/submitItineraryReview", (reviewObj, thunkAPI) => {
    return fetch("http://localhost:3000/reviews", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(reviewObj)
      })
        .then(res => res.json())
        .then(newlyCreatedReview => newlyCreatedReview)
          // {
          //   if(newlyCreatedReview.error){
          //     return thunkAPI.rejectWithValue(newlyCreatedReview.error)
          //   } else {
          //     return newlyCreatedReview
          //   }
          // })
  })


// Reducer

const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {
      clearReviews(state, action){
        return initialState
      }
    },
    extraReducers: {
        [fetchAllReviews.fulfilled](state, action){
            state.allReviews = action.payload
        },
        [fetchItineraryReviews.fulfilled](state, action){
            state.itineraryReviews = action.payload
        },
        [submitItineraryReview.fulfilled](state, action){
          if(action.payload.error){
            console.log(action.payload.error)
          } else {
            state.itineraryReviews.push(action.payload)
          }
        },
        // [submitItineraryReview.rejected](state, action){
        //     return action
        // }
    }
})

export const {clearReviews} = reviewsSlice.actions
export default reviewsSlice.reducer

