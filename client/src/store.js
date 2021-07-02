import {configureStore} from '@reduxjs/toolkit'
import daysReducer from './reducers.js/daysReducer'
import itinerariesReducer from './reducers.js/itinerariesReducer'
import photosReducer from './reducers.js/photosReducer'
import userReducer from './reducers.js/userReducer'

const store = configureStore({
    reducer: {
        itineraries: itinerariesReducer,
        user: userReducer,
        photos: photosReducer,
        days: daysReducer
    }
})

export default store