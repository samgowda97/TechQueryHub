import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import QuestionAndAnswers from './QuestionAndAnswers';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomeScreen from './Components/WelcomeScreen';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path='/' element={<WelcomeScreen />} />
        <Route path='/main' element={<QuestionAndAnswers />} />
      </Routes>
    </Router>
  </Provider>
  );
}

export default App;
