// questionsSlice.js

import { createSlice } from '@reduxjs/toolkit';

let nextQuestionId = 1;

const initialState = {
  questions: [
    { id: nextQuestionId++,user:"john", text: 'What is Redux?' },
    { id: nextQuestionId++,user:"David", text: 'How to use React Hooks?' },
    // Add more dummy questions here if needed
  ],
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    addQuestion(state, action) {
      state.questions.push(action.payload);
    },
  },
});

export const { addQuestion } = questionsSlice.actions;
export default questionsSlice.reducer;
