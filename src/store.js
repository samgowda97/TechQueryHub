
import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from './questionsSlice';
import answersReducer from './answersSlice';
import userReducer from './userSlice';
const initialState = {
  user: null, 
};

export default configureStore({
  reducer: {
    questions: questionsReducer,
    answers: answersReducer,
    user: userReducer,
  },
});

