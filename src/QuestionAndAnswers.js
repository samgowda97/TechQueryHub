import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addQuestion } from './questionsSlice';
import { addAnswer } from './answersSlice';
import { loginUser, logoutUser } from './userSlice'; 

const QuestionsAndAnswers = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const questions = useSelector((state) => state.questions.questions);
  const answers = useSelector((state) => state.answers.answers);
  const [newQuestion, setNewQuestion] = useState('');
  const [answerText, setAnswerText] = useState('');
  const [selectedQuestionId, setSelectedQuestionId] = useState('');
    const[username,setUsername]=useState('')
const [isLoggedin,setisLoggedin]=useState(false)
  const handleLogin = (username) => {
    dispatch(loginUser(username));
  };
  const handleLoginSubmit=(e)=>{
    console.log(e,":eee")
    dispatch(loginUser(username));
    setisLoggedin(true)
  }

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (newQuestion.trim() !== '') {
      dispatch(addQuestion({ text: newQuestion, user: user }));
      setNewQuestion('');
    }
  };

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    dispatch(addAnswer({ questionId: selectedQuestionId, text: answerText, user: user }));
    setAnswerText('');
    setSelectedQuestionId('');
  };
console.log(questions,"questions")
  return (
    <div>
      {isLoggedin ? (
        <div>
          <h2>Welcome, {username}</h2>
          <button onClick={()=>setisLoggedin(false)}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Login</h2>

          <form onSubmit={handleLoginSubmit}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <button type="submit">Login</button>
        </form>
        </div>
      )}
      <h2>Questions and Answers</h2>
      <form onSubmit={handleQuestionSubmit}>
        <input type="text" value={newQuestion} onChange={(e) => setNewQuestion(e.target.value)} placeholder="Enter your question" />
        <button type="submit">Add Question</button>
      </form>
      {questions.map((question) => (
        <div key={question.id}>
          <p>
            <span style={{ backgroundColor: 'red' }}>{question.user}</span> <strong>Question:</strong> {question.text}
          </p>
          <ul>
            {answers.filter((answer) => answer.questionId === question.id).map((answer) => (
              <div>
                <p key={answer.id}>
                  <span style={{ backgroundColor: 'blue' }}>{`${answer.user}`}</span>
                  {answer.text}
                </p>
              </div>
            ))}
          </ul>
          <button onClick={() => setSelectedQuestionId(question.id)}>Answer</button>
          {selectedQuestionId === question.id && (
            <form onSubmit={handleAnswerSubmit}>
              <input type="text" value={answerText} onChange={(e) => setAnswerText(e.target.value)} placeholder="Enter your answer" />
              <button type="submit">Submit Answer</button>
            </form>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionsAndAnswers;
