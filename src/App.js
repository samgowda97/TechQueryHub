// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import QuestionAndAnswers from './QuestionAndAnswers';

function App() {
  return (
    <Provider store={store}>
      <QuestionAndAnswers/>
    </Provider>
  );
}

export default App;
