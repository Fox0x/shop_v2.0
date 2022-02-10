import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    uid: null,
    phone: null,
    email: null,
    isEmailVerified: false,
    creationTime: null,
    lastSignInTime: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

        setUser: (state, action) => {
            state.uid = action.payload.uid;
            state.phone = action.payload.phone;
            state.email = action.payload.email;
            state.isEmailVerified = action.payload.isEmailVerified;
            state.creationTime = action.payload.creationTime;
            state.lastSignInTime = action.payload.lastSignInTime;
        },

        removeUser: (state) => {
            state.uid = null;
            state.phone = null;
            state.email = null;
            state.isEmailVerified = false;
            state.creationTime = null;
            state.lastSignInTime = null;
        }
    }
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
