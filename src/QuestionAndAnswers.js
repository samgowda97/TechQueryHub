import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addQuestion } from './questionsSlice';
import { addAnswer } from './answersSlice';
import { loginUser, logoutUser } from './userSlice'; 
import { Avatar, Button, TextField, Tooltip } from '@mui/material';
import AlertSnackBar from './Components/AlertSnackBar';
import UserForm from './Components/UserForm';
import SearchBar from "material-ui-search-bar";
import QuestionForm from './Components/QuestionForm';
import NavBar from './Components/NavBar';
import { stringAvatar } from './commonFunctionalities';
import CategoryFilter from './Components/CategoryFilter';
import { v4 as uuidv4 } from 'uuid';


const QuestionsAndAnswers = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const questions = useSelector((state) => state.questions.questions);
  const answers = useSelector((state) => state.answers.answers);
  const [newQuestion, setNewQuestion] = useState('');
  const [open, setOpen] = useState(false);

  const [answerText, setAnswerText] = useState('');
  const [selectedQuestionId, setSelectedQuestionId] = useState('');
  const [snackMessage,setSnackMessage]=useState('')
    const[username,setUsername]=useState('')
    const[severityMsg,setSeverityMsg]=useState('')
const [isLoggedin,setisLoggedin]=useState(false)
const handleClick = () => {
  setOpen(true);
};
const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};
  const handleLogin = (username) => {
    dispatch(loginUser(username));
  };
  const handleLoginSubmit=(e)=>{
    console.log(e,":eee")
    dispatch(loginUser(username));
    setisLoggedin(true)
    setSnackMessage("User Added")
    setOpen(true);
    setSeverityMsg("success")
  }

  const handleLogout = () => {
    // dispatch(logoutUser());
    setisLoggedin(false)
    setSnackMessage("Logged out")
    setOpen(true);
    setSeverityMsg("warning")
    setUsername('')
  };


  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (newQuestion.trim() !== '') {
      const questionId = uuidv4(); 
      dispatch(addQuestion({ id: questionId, user, text: newQuestion, category: selectedCategories }));
      setSnackMessage("Question Posted");
      setOpen(true);
      setSeverityMsg("success");
      setNewQuestion('');
      setSelectedCategories([]);
    }
  };
  
  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    if (answerText.trim() !== '') {
      const answerId = uuidv4(); 
      dispatch(addAnswer({ id: answerId, questionId: selectedQuestionId, user, text: answerText }));
      setSnackMessage("Answer Posted");
      setOpen(true);
      setSeverityMsg("success");
      setAnswerText('');
      setSelectedQuestionId('');
    }
  };
  const [searchTerm, setSearchTerm] = useState('');

  let filteredQuestions = questions.filter(question =>
    question.text.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredAnswers = answers.filter(answer =>
    answer.text.toLowerCase().includes(searchTerm.toLowerCase())
  );
console.log(questions,"questions")

const [selectedCategories, setSelectedCategories] = useState('');

const handleSelectCategories = (categories) => {
  setSelectedCategories(categories);
};

filteredQuestions = selectedCategories.length > 0
? questions.filter(question => selectedCategories.includes(question.category))
: questions;
  return (
    <div>
      <NavBar handleLogout={handleLogout} handleLoginSubmit={handleLoginSubmit} setUsername={setUsername} username={username}/>
   
      <SearchBar
        value={searchTerm}
        onChange={(value) => setSearchTerm(value)}
        onCancelSearch={() =>setSearchTerm('')}
      />
    <AlertSnackBar open={open} handleClose={handleClose} severity={severityMsg} message={snackMessage} />

      {isLoggedin ? (
        <div>
          
        </div>
      ) : (
        <UserForm handleLoginSubmit={handleLoginSubmit} setUsername={setUsername} username={username} />

      )}
      <CategoryFilter onSelectCategories={handleSelectCategories} />
      <QuestionForm handleQuestionSubmit={handleQuestionSubmit}  setNewQuestion={setNewQuestion} isLoggedin={isLoggedin} newQuestion={newQuestion}/>

{filteredQuestions.map((question) => (
  <div key={question.id} style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column' }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <Avatar variant="square" {...stringAvatar(question.user)} />
      <strong style={{ marginLeft: '10px' }}>Question:</strong>
      <span style={{ marginLeft: '10px' }}>{question.text}</span>
    </div>
    <ul>
      {filteredAnswers
        .filter(answer => answer.questionId === question.id)
        .map(answer => (
          <div key={answer.id}>
            <p style={{ display: 'flex', alignItems: 'center' }}>
              <Avatar {...stringAvatar(answer.user)} />
              <span style={{ marginLeft: '10px' }}>{answer.text}</span>
            </p>
          </div>
        ))}
    </ul>
    <Tooltip title="Answer" arrow>
      <Button
        size="small"
        variant="contained"
        onClick={() => setSelectedQuestionId(question.id)}
        style={{ alignSelf: 'flex-start' }} // Align the button to the start of the flex container
      >
        Answer
      </Button>
    </Tooltip>
    {selectedQuestionId === question.id && (
      <form onSubmit={handleAnswerSubmit} style={{ marginTop: '10px' }}>
        <TextField
          type="text"
          value={answerText}
          onChange={(e) => setAnswerText(e.target.value)}
          placeholder="Enter your answer"
          variant="outlined"
          fullWidth
          style={{ marginRight: '10px' }}
        />
        <Button type="submit" variant="contained">
          Submit Answer
        </Button>
      </form>
    )}
  </div>))}
  </div>)
};

export default QuestionsAndAnswers;
