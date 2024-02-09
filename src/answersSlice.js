// answersSlice.js

import { createSlice } from '@reduxjs/toolkit';

let nextAnswerId = 1;

const initialState = {
  answers: [
    { id: nextAnswerId++, questionId: 1,user:"Mark", text: 'Redux is a predictable state container for JavaScript apps.' },
    { id: nextAnswerId++, questionId: 2,user:"Joe", text: 'React Hooks allow you to use state and other React features without writing a class.' },
    // Add more dummy answers here if needed
  ],
};

const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    addAnswer(state, action) {
      state.answers.push(action.payload);
    },
  },
});

export const { addAnswer } = answersSlice.actions;
export default answersSlice.reducer;
