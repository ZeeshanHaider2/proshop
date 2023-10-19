import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('cart')
? JSON.parse(localStorage.getItem('cart'))
: {cartItems : []};

const addDecimals = (num) => {
    return (Math.round(num * 100) /100 ).toFixed(2);
}

const cartSlice = createSlice({
   name : 'cart',
   initialState,
   reducers:{
     addToCart:(state, action) => {
       const item = action.payload;

       const existItem = state.cartItem.find((x)=> x._id === item._id);

       if(existItem){
        state.cartItems = state.cartItems.map((x) => x.Id ===
        existItem._id ? item : x
        );
       } else {
        state.cartItem = [...state.cartItems, item];
       }
       //Calculate item price
       state.itemPrice = addDecimals(state.cartItems.reduce((acc,item) => acc + item.price * item.qty,0));
       
       //calculate shipping price (id order > $100 then free else $10 charges)
       state.shippingPrice = addDecimals(state.itemPrice > 100 ? 0 : 10);
    
       //calculate tax price (15% tax)
       state.taxPrice = addDecimals(Number((0.15 * state.itemPrice).toFixed(2)));
    
       //Calculate total price
       state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number (state.taxPrice)
       ).toFixed(2);
       localStorage.setItem('cart', JSON.stringify(state))
    },
   },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;