import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
    },
    reducers: {
        getProducts: (state, action) => {
            state.products.push({ ...action.payload });
        },

        incrementQty: (state, action) => {
            const itemPresent = state.products.find(
                (item) => item.id === action.payload.id
            );
            itemPresent.quantity++;
        },

        decrementQty: (state, action) => {
            const itemPresent = state.products.find(item => item.id === action.payload.id)
            if (itemPresent.quantity === 1) {
                itemPresent.quantity = 0;

                const removeItem = state.products.filter(item => item.id !== action.payload.id)
                state.products = removeItem
            } else {
                --itemPresent.quantity
            }
        },
    },
});

export const { getProducts, incrementQty, decrementQty } = productSlice.actions;
export default productSlice.reducer;
