import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            const isItemExist = state.value.find((item) => item.id === action.payload.id)
            if(isItemExist){
                state.value = state.value.filter((item) => item.id !== action.payload.id)
            }else{
                state.value.push({...action.payload})
            }
        },
        removeFavorite: (state, action) => {
            state.value = state.value.filter((item) => item.id !== action.payload.id)
        }
    }
})

export const { addToFavorite, removeFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer