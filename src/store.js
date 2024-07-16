import { configureStore, createSlice } from '@reduxjs/toolkit';
import user from './store/userSlick.js';

let basketItem = createSlice({
  name: 'basket',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 1, name: 'Grey Yordan', count: 1 },
  ],
  reducer: {
    countAdd(state, action) {
      let checkId = state.findIndex((data) => data.id === action.payload);
      state[checkId].count++;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export let { countAdd, addItem } = basketItem.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    basketItem: basketItem.reducer,
  },
});
