import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
    valueSearch: [],
    searchTerm: ''
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.value = action.payload
            state.searchTerm = ''
        },
        setCategory: (state, action) => {
            state.value = action.payload
            state.searchTerm = ''
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload 
            const data = state.value.filter((item) => {
                return item.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            })
            state.valueSearch = data
        }
    }
})

export const { setProducts, setCategory, setSearchTerm } = searchSlice.actions
export default searchSlice.reducer