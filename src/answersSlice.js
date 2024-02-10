
import { createSlice } from '@reduxjs/toolkit';

let nextAnswerId = 1;

const initialState = {
  answers: [
    { id: nextAnswerId++, questionId: 1,user:"Mark", text: 'Redux is a predictable state container for JavaScript apps.' },
    { id: nextAnswerId++, questionId: 2,user:"Joe", text: 'React Hooks allow you to use state and other React features without writing a class.' },
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
  },
});
export const { addAnswer } = answersSlice.actions;
export default answersSlice.reducer;