import { createSlice } from "@reduxjs/toolkit"

const initialState={
    product:[],
    isProductInCart: false
}

export const productSlice = createSlice({
    name:"product/slice",
    initialState,
    reducers:{
        addToCard:(state,action) => {
         const existingProduct = state.product.find((item) => item._id === action.payload._id )
         if(!existingProduct){
            state.product.push(action.payload)
            state.isProductInCart = true
         }else{
            alert("This product is already in the cart!");
            
         }
        },
        deleteFromCard:(state,action) =>{
            state.product = state.product.filter((item) => item._id != action.payload)
            state.isProductInCart = state.product.length > 0;
        }
    }
})


export const {addToCard,deleteFromCard} = productSlice.actions
export default productSlice.reducer