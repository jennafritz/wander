import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentUser: {},
    token: ""
}

// Action Creators

export const fetchUser = createAsyncThunk("user/fetchUser", (loginObj,thunkAPI) => {
    return fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(loginObj)
    })
        .then(res => res.json())
        .then(userInfo => {
            if(userInfo.error){
                return thunkAPI.rejectWithValue(userInfo.error)
            } else {
                return userInfo
            }
        })
})

export const registerUser = createAsyncThunk("user/registerUser", (registerObj,thunkAPI) => {
    return fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(registerObj)
    })
        .then(res => res.json())
        .then(userInfo => {
            debugger
            if(userInfo.error){
                return thunkAPI.rejectWithValue(userInfo.error)
            } else {
                return userInfo
            }
        })
})


// Reducer

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchUser.fulfilled](state, action){
            state.currentUser = action.payload.user
            state.token = action.payload.token

            // debugger
            // if(action.payload.user){
            //     state.currentUser = action.payload.user
            //     state.token = action.payload.token
            // } else {
            //     return action.payload
            // }
        },
        [fetchUser.rejected](state, action){
            return action
        },
        [registerUser.fulfilled](state, action){
            return action.payload
        }
    }
})

export default userSlice.reducer