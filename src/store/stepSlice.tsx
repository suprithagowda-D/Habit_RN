import {createSlice} from '@reduxjs/toolkit';

export const stepSlice = createSlice({
  name: 'step',
  initialState: {
    value:0,
    goal:5000
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement:state => {
      state.goal -= 1;
    }
  },
});

export const {increment,decrement} = stepSlice.actions;
export default stepSlice.reducer;
