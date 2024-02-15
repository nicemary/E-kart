import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice=createSlice({
    name:"wishlist",
    initialState:[],
    reducer:{
        //actions
        //function lodic to add item into wishlist
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        removeFromWishlist:(state,action)=>{
            return state.filter(item=>item.id!==action.payload)
        }
    }
})
export const {addToWishlist,removeFromWishlist}=wishlistSlice.actions;
export default wishlistSlice.reducer;
