import {configureStore} from '@reduxjs/toolkit'
import itinerariesReducer from './reducers.js/itinerariesReducer'

const store = configureStore({
    reducer: {
        itineraries: itinerariesReducer
    }
})

export default store