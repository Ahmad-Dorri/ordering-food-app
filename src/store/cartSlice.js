import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If the item already exists, update its amount property
        existingItem.amount += action.payload.amount;
        state.totalAmount += action.payload.price * action.payload.amount;
      } else {
        // If the item does not exist, add it to the array
        state.items.push(action.payload);
        state.totalAmount += action.payload.price * action.payload.amount;
      }

      state.totalAmount = +state.totalAmount.toFixed(2);
    },
    removeItem(state, action) {
      state.items.filter((item) => item !== action.payload);
    },
  },
});
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice;
