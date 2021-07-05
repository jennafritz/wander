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
            if(userInfo.error){
                return thunkAPI.rejectWithValue(userInfo.error)
            } else {
                return userInfo
            }
        })
})

export const addCreditToUser = createAsyncThunk("user/addCreditToUser", (userObj, thunkAPI) => {
    return fetch(`http://localhost:3000/add_credits?userId=${userObj.id}`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${localStorage.token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            credits: userObj.credits + 1
        })
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

export const removeCreditFromUser = createAsyncThunk("user/removeCreditFromUser", (userObj, thunkAPI) => {
    return fetch(`http://localhost:3000/remove_credits?userId=${userObj.id}`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${localStorage.token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            credits: userObj.credits - 1
        })
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

export const setUpProfile = createAsyncThunk("user/setUpProfile", (userInfoObj, thunkAPI) => {
    return fetch(`http://localhost:3000/users/:${userInfoObj.userId}`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${localStorage.token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfoObj)
    })
        .then(res => res.json())
        .then(updatedUser => {
            if(updatedUser.error){
                return thunkAPI.rejectWithValue(updatedUser.error)
            } else {
                return updatedUser
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
        },
        [fetchUser.rejected](state, action){
            return action
        },
        [registerUser.fulfilled](state, action){
            return action.payload
        },
        [addCreditToUser.fulfilled](state, action){
            state.currentUser = action.payload
        },
        [removeCreditFromUser.fulfilled](state, action){
            state.currentUser = action.payload
        },
        [setUpProfile.fulfilled](state, action){
            state.currentUser = action.payload
        },
        [setUpProfile.rejected](state, action){
            return action
        }
    }
})

export default userSlice.reducer