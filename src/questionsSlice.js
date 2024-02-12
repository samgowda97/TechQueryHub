
import { createSlice } from '@reduxjs/toolkit';

let nextQuestionId = 1;

const initialState = {
  questions: [
    { id: nextQuestionId++,user:"john", text: ' What is the purpose of the alt attribute in HTML <img> tags?',category:'Frontend' },
    { id: nextQuestionId++,user:"David", text: 'What is the concept of middleware in the context of backend development',category:'Backend' },
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
