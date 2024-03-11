import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            console.log(action.payload)
            const quantity = action.payload.quantity
            const isItemExist = state.value.find((item) => item.id === action.payload.id)
            const filterCart = state.value.filter((item) => item.id !== action.payload.id)

            if(isItemExist){
                if(quantity <= 0){
                    state.value = filterCart
                }
                isItemExist.quantity = quantity ? quantity : 1
                return
            }else{
                state.value.push({...action.payload, quantity: 1, checked: false})
            }
        },
        deleteCart: (state, action) => {
            const filterCart = state.value.filter((item) => item.id !== action.payload)
            state.value = filterCart
        },
        sumTotalCart: (state, action) => {
            const isItemExist = state.value.find((item) => item.id === action.payload.id)
            if(isItemExist){
                isItemExist.checked = action.payload.checked
            }
            
        }
    }
})

export const { addToCart, deleteCart, sumTotalCart } = cartSlice.actions
export default cartSlice.reducer