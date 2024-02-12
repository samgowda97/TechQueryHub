
import { createSlice } from '@reduxjs/toolkit';

let nextAnswerId = 1;

const initialState = {
  answers: [
    { id: nextAnswerId++, questionId: 1,user:"Mark", text: 'The alt attribute in HTML <img> tags provides alternative text for an image, which is displayed in cases where the image cannot be rendered.' },
    { id: nextAnswerId++, questionId: 2,user:"Joe", text: 'Middleware is software that acts as a bridge between an operating system or database and applications,allows to communicate with each other.' },
  ],
};


const answersSlice = createSlice({
  name: 'answers',
  initialState: initialState,
  reducers: {
    addAnswer(state, action) {
      const { id, questionId, user, text } = action.payload;
      state.answers.push({ id, questionId, user, text });
    },
    deleteAnswer(state, action) {
      const { id } = action.payload;
      state.answers = state.answers.filter(answer => answer.id !== id);
    },
  },
});
export const { addAnswer,deleteAnswer} = answersSlice.actions;
export default answersSlice.reducer;