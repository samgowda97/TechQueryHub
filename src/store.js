// // store.js

// import { configureStore } from '@reduxjs/toolkit';
// import questionsReducer from './questionsSlice';
// import answersReducer from './answersSlice';

// export default configureStore({
//   reducer: {
//     questions: questionsReducer,
//     answers: answersReducer,
//   },
// });

// store.js
import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from './questionsSlice';
import answersReducer from './answersSlice';
import userReducer from './userSlice';
const initialState = {
  user: null, // Initial state for the logged-in user
};

export default configureStore({
  reducer: {
    questions: questionsReducer,
    answers: answersReducer,
    user: userReducer,
  },
});

