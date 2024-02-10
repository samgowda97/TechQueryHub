
import { createSlice } from '@reduxjs/toolkit';

let nextQuestionId = 1;

const initialState = {
  questions: [
    { id: nextQuestionId++,user:"john", text: 'What is Redux?',category:'Library' },
    { id: nextQuestionId++,user:"David", text: 'How to use React Hooks?',category:'React' },
  ],
};


const questionsSlice = createSlice({
  name: 'questions',
  initialState: initialState,
  reducers: {
    addQuestion(state, action) {
      const { id, user, text, category } = action.payload;
      state.questions.push({ id, user, text, category });
    },
  },
});

export const { addQuestion } = questionsSlice.actions;

export default questionsSlice.reducer;
