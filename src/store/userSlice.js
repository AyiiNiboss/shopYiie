import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {},
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        detailUser: (state, action) => {
            state.value = action.payload
        }
    }
}) 

export const { detailUser } = userSlice.actions
export default userSlice.reducer