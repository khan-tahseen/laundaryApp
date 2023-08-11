import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            console.log("added to cart");
            const isItemPresent = state.cartItems.find(
                (item) => item.id === action.payload.id
            );

            if (isItemPresent) {
                isItemPresent.quantity++;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },

        removeFromCart: (state, action) => {
            console.log("removed");
            const removeItem = state.cartItems.filter(
                (item) => item.id !== action.payload.id
            );
            state.cartItems = removeItem;
        },

        incrementQuantity: (state, action) => {
            const isItemPresent = state.cartItems.find(
                (item) => item.id === action.payload.id
            );
            isItemPresent.quantity++;
        },

        decrementQuantity: (state, action) => {
            const isItemPresent = state.cartItems.find(
                (item) => item.id === action.payload.id
            );
            if (isItemPresent.quantity === 1) {
                isItemPresent.quantity = 0;
                const removeItem = state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                );
                state.cartItems = removeItem;
            } else {
                --isItemPresent.quantity;
            }
        },
    },
});

export const {addToCart, removeFromCart, incrementQuantity, decrementQuantity} = CartSlice.actions;
export default CartSlice.reducer;
