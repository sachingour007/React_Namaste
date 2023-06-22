import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;

/*Create store
    -ConfigureStore() - RTK
    
*Provide my store to app
    -<Provider Store ={store}> -import from react - redux

*slice
    -RTK - createSlice({
        name: '',
        initialState: [],
        reducers : {
            addItem : (state, action) =>{
                //not return anything
                state = action.payload
            }
        }
    })
    export const {addItem, removeItem} = cartslice.actions
    export default cartslice.reducer

*put that slice into Store
    -{
        reducer: {
            cart : cartslice,
            user : userSlice,
        }
    }
 */
