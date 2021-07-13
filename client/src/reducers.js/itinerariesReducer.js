import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    allItineraries: [],
    myItineraries: [], 
    myPastItineraries: [],
    myFutureItineraries: [],
    recommendedItineraries: [],
    filteredItineraries: [],
    error: ""
  }

// Action Creators

export const fetchAllItineraries = createAsyncThunk("itineraries/fetchAllItineraries", (unused, thunkAPI) => {
    return fetch("http://localhost:3000/itineraries", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(itinerariesArray => 
          {
              if(itinerariesArray.error){
                return thunkAPI.rejectWithValue(itinerariesArray.error)
              } else {
                return itinerariesArray
              }
          })
})

export const fetchMyItineraries = createAsyncThunk("itineraries/fetchMyItineraries", (loggedInUserId, thunkAPI) => {
    return fetch(`http://localhost:3000/users/my_itineraries?userId=${loggedInUserId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(myItinerariesArray => 
          {
          if(myItinerariesArray.error){
            return thunkAPI.rejectWithValue(myItinerariesArray.error)
          } else {
            return myItinerariesArray
          }
        })
})

export const fetchMyPastItineraries = createAsyncThunk("itineraries/fetchMyPastItineraries", (loggedInUserId, thunkAPI) => {
  return fetch(`http://localhost:3000/users/my_past_itineraries?userId=${loggedInUserId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(myPastItinerariesArray => 
        {
        if(myPastItinerariesArray.error){
          return thunkAPI.rejectWithValue(myPastItinerariesArray.error)
        } else {
          return myPastItinerariesArray
        }
      })
})

export const fetchMyFutureItineraries = createAsyncThunk("itineraries/fetchMyFutureItineraries", (loggedInUserId, thunkAPI) => {
  return fetch(`http://localhost:3000/users/my_future_itineraries?userId=${loggedInUserId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(myFutureItinerariesArray => 
        {
        if(myFutureItinerariesArray.error){
          return thunkAPI.rejectWithValue(myFutureItinerariesArray.error)
        } else {
          return myFutureItinerariesArray
        }
      })
})

// export const submitItineraryDetails = createAsyncThunk("itineraries/submitItinerary", (itineraryObj, thunkAPI) => {
//   return fetch("http://localhost:3000/itineraries", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${localStorage.token}`,
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(itineraryObj)
//     })
//       .then(res => res.json())
//       .then(newlyCreatedItinerary => {
//         if(newlyCreatedItinerary.error){
//           return thunkAPI.rejectWithValue(newlyCreatedItinerary.error)
//         } else {
//           return newlyCreatedItinerary
//         }
//       })
// })

export const createFullTrip = createAsyncThunk("itineraries/createFullTrip", (fullItineraryObj, thunkAPI) => {
  return fetch("http://localhost:3000/itineraries/create_full_trip", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(fullItineraryObj)
    })
      .then(res => res.json())
      .then(newlyCreatedItinerary => newlyCreatedItinerary)
      //   {
      //   if(newlyCreatedItinerary.error){
      //     return thunkAPI.rejectWithValue(newlyCreatedItinerary.error)
      //   } else {
      //     return newlyCreatedItinerary
      //   }
      // })
})

export const generateRandomItinerary = createAsyncThunk("itineraries/generateRandomItinerary", (undefined, thunkAPI) => {
  debugger
  return fetch("http://localhost:3000/itineraries/generate_random_itinerary", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(randomItinerary => {
        if(randomItinerary.error){
          return thunkAPI.rejectWithValue(randomItinerary.error)
        } else {
          return randomItinerary
        }
      })
})



// Reducer

const itinerariesSlice = createSlice({
    name: "itineraries",
    initialState,
    reducers: {
      clearItineraries(state, action){
        return initialState
      },
      filterItineraries(state, action){
        let removeSaved = action.payload.removeSaved
        let criteria = action.payload.criteria
        let filteredItineraries = [...state.allItineraries]

        if(removeSaved){
          state.myItineraries.forEach(myItinerary => {
            filteredItineraries = filteredItineraries.filter(itinerary => itinerary.id !== myItinerary.id)
          })
        }
        Object.keys(criteria).forEach(requirement => {
            let searchValue = criteria[`${requirement}`]
            if(requirement === "length" || requirement === "budget"){
                searchValue = parseInt(criteria[`${requirement}`])
            }
            filteredItineraries = filteredItineraries.filter(itinerary => {
                if(!!searchValue === false){
                    return true 
                } else if(searchValue && searchValue === itinerary[`${requirement}`]){
                    return true
                } else if (searchValue && searchValue !== itinerary[`${requirement}`]){
                    return false
                }
            })
        })
        state.filteredItineraries = filteredItineraries
      },
      clearFilters(state, action){
        state.filteredItineraries = state.allItineraries
      },
      recommendItineraries(state, action){
        if(state.allItineraries.length >= state.myItineraries.length){
          let loggedInUser = action.payload
          let unsavedItineraries = [...state.allItineraries]

          state.myItineraries.forEach(myItinerary => {
            let index = unsavedItineraries.findIndex(itinerary => itinerary.id === myItinerary.id)
            if(index >= 0){
              unsavedItineraries.splice(index, 1)
            }
          })

          let matched = unsavedItineraries.map(unsavedItinerary => {
            let matchNum = 0
            if(unsavedItinerary.season && unsavedItinerary.season === loggedInUser.travel_season){
              matchNum += 1
              unsavedItinerary = {...unsavedItinerary, match: matchNum}
            }
            if(unsavedItinerary.length && unsavedItinerary.length === loggedInUser.travel_length){
              matchNum += 1
              unsavedItinerary = {...unsavedItinerary, match: matchNum}
            }
            if(unsavedItinerary.locale && unsavedItinerary.locale === loggedInUser.travel_locale){

              matchNum += 1
              unsavedItinerary = {...unsavedItinerary, match: matchNum}
            }
            if(unsavedItinerary.classification && unsavedItinerary.classification === loggedInUser.travel_classification){
              matchNum += 1
              unsavedItinerary = {...unsavedItinerary, match: matchNum}
            }
            if(unsavedItinerary.budget && unsavedItinerary.budget === loggedInUser.budget){
              matchNum += 1
              unsavedItinerary = {...unsavedItinerary, match: matchNum}
            }
            return unsavedItinerary
          })

          let recommended = matched.filter(matchedItinerary => matchedItinerary.match > 0)
          recommended.sort((itineraryA, itineraryB) => {
              return itineraryB.match - itineraryA.match
          })

          state.recommendedItineraries = recommended
        }
      }
    },
    extraReducers: {
        [fetchAllItineraries.fulfilled](state, action){
          let itinerariesWithMatch = action.payload.map(itinerary => {return {...itinerary, match: 0}})
          state.allItineraries = itinerariesWithMatch
          state.filteredItineraries = itinerariesWithMatch       
        },
        [fetchMyItineraries.fulfilled](state, action){
          state.myItineraries = action.payload
        },
        [fetchMyPastItineraries.fulfilled](state, action){
          state.myPastItineraries = action.payload
        },
        [fetchMyFutureItineraries.fulfilled](state, action){
          state.myFutureItineraries = action.payload
        },
        // [submitItineraryDetails.fulfilled](state, action){
        //   state.allItineraries.push({...action.payload, match: 0})
        // },
        // [submitItineraryDetails.rejected](state, action){
        //   state.error = action.payload
        // },
        [createFullTrip.fulfilled](state, action){
          if(action.payload.error){
            console.log(action.payload.error)
          } else {
            state.allItineraries.push({...action.payload, match: 0})
          }
        },
        // [createFullTrip.rejected](state, action){
        //   state.error = action.payload
        // },
        [generateRandomItinerary.fulfilled](state, action){
          state.allItineraries.push({...action.payload, match: 0})
        },
        [generateRandomItinerary.rejected](state, action){
          state.error = action.payload
        }
    }
})

export const {clearFilters, clearItineraries, filterItineraries, recommendItineraries} = itinerariesSlice.actions
export default itinerariesSlice.reducer