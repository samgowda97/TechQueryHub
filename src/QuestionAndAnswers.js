import React, { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addQuestion } from './questionsSlice';
import { addAnswer } from './answersSlice';
import { loginUser, logoutUser } from './userSlice'; 
import { Avatar, Button, IconButton, Tooltip } from '@mui/material';
import AlertSnackBar from './Components/AlertSnackBar';
import UserForm from './Components/UserForm';
import QuestionForm from './Components/QuestionForm';
import NavBar from './Components/NavBar';
import { stringAvatar } from './commonFunctionalities';
import CategoryFilter from './Components/CategoryFilter';
import { v4 as uuidv4 } from 'uuid';
import AnswerForm from './Components/AnswerForm';
import SearchItem from './Components/SearchItem';
import { deleteQuestion } from './questionsSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteAnswer } from './answersSlice';

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
  const [username,setUsername]=useState('')
  const [severityMsg,setSeverityMsg]=useState('')
  const [isLoggedin,setisLoggedin]=useState(false)
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState('');


const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};
 
  const handleLoginSubmit=()=>{
    if(username.length===0){
      setSnackMessage("Type Name")
      setOpen(true);
      setSeverityMsg("error")
    }
    else{
      dispatch(loginUser(username));
      setisLoggedin(true)
      setSnackMessage("Logged in")
      setOpen(true);
      setSeverityMsg("success")
    }
   
  }

  const handleLogout = () => {
    dispatch(logoutUser());
    setisLoggedin(false)
    setSnackMessage("Logged out")
    setOpen(true);
    setSeverityMsg("warning")
    setUsername('')
    setSelectedQuestionId('')
  };


  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (newQuestion.trim() !== '') {
      const questionId = uuidv4(); 
      dispatch(addQuestion({ id: questionId, user, text: newQuestion, category: selectedCategory }));
      setSnackMessage("Question Posted");
      setOpen(true);
      setSeverityMsg("success");
      setNewQuestion('');
      setSelectedCategories([]);
      setSelectedCategory('')
    }
  };
  const handleDeleteQuestion = (currentUser,id) => {
      if (currentUser === user) { 
        dispatch(deleteQuestion({ id }));
        setSnackMessage("Question Deleted");
        setOpen(true);
        setSeverityMsg("info");
      } else {
        alert("You can only delete your own questions.");
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
  const handleDeleteAnswer = (currentUser,answerid) => {
    if (currentUser === user) {
      dispatch(deleteAnswer({ id: answerid }));
      setSnackMessage("Answer Deleted");
      setOpen(true);
      setSeverityMsg("info");
    } else {
      alert("You can only delete your own answers.");
    }
  };
 

const handleSelectCategories = (categories) => {
  setSelectedCategories(categories);
};

const filteredQuestions = useMemo(() => {
  let filtered = questions;

  if (selectedCategories.length > 0 || searchTerm.trim() !== '') {
    filtered = filtered.filter(question => selectedCategories.includes(question.category));
  }

  if (searchTerm.trim() !== '') {
    const searchTermLC = searchTerm.toLowerCase();
    filtered = filtered.filter(question =>
      question.text.toLowerCase().includes(searchTermLC)
    );
  }

  return filtered;
}, [questions, selectedCategories, searchTerm]);
console.log(questions)
  return (
    <div>
      <NavBar handleLogout={handleLogout} handleLoginSubmit={handleLoginSubmit} setUsername={setUsername} username={username}/>
    <div style={{margin:"20px"}}>
      <div style={{ display: 'flex',justifyContent:"space-between" }}> 
      {!isLoggedin && (
        <UserForm handleLoginSubmit={handleLoginSubmit} setUsername={setUsername} username={username} />)}
        <SearchItem searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <CategoryFilter onSelectCategories={handleSelectCategories} />
      </div>

    <AlertSnackBar open={open} handleClose={handleClose} severity={severityMsg} message={snackMessage} />
   
      <QuestionForm selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} handleQuestionSubmit={handleQuestionSubmit}  setNewQuestion={setNewQuestion} isLoggedin={isLoggedin} newQuestion={newQuestion}/>
      <div style={{ border: '1px solid #ccc',marginTop:"10px", borderRadius: '8px', padding: '16px',boxShadow: "5px 5px 10px 1px #93afcb" }}>
{filteredQuestions.length > 0 ? (
filteredQuestions.map((question) => (
  <div key={question.id}>
    <div  style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
    <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
    <Tooltip title={`${question.user}`} arrow>
 <Avatar variant="square" {...stringAvatar(question.user)} /></Tooltip>
 <Tooltip title="Question" arrow><strong style={{ marginLeft: '10px' }}>Q:</strong></Tooltip>
     <span className='question-container'> <span className='question-text' style={{ marginLeft: '10px' }}>{question.text}</span></span>
    {question.user === user && 
    (<Tooltip title="Delete" arrow><IconButton size="small" aria-label="delete" style={{margin:"0px 10px 10px 10px"}} onClick={() => handleDeleteQuestion(question.user,question.id)}>
    <DeleteIcon fontSize="inherit" />
  </IconButton></Tooltip>)
    }

    </div>
      <Button
        size="small"
        variant="outlined"
        onClick={() => setSelectedQuestionId(question.id)}
        disabled={!isLoggedin}
      >
        Answer
      </Button>
  </div>
    <ul>
      {answers
        .filter(answer => answer.questionId === question.id)
        .map(answer => (
          <div key={answer.id}>
            <div style={{ display: 'flex', alignItems: 'center',marginBottom:"10px" }}>
                 <Tooltip title={`${answer.user}`} arrow>
 <Avatar {...stringAvatar(answer.user)} />
 </Tooltip>   
 <Tooltip title="Answer" arrow><strong style={{ marginLeft: '10px' }}>A:</strong></Tooltip>
              <span className='answer-container'>
              <span className='answer-text' style={{ marginLeft: '10px' }}>{answer.text}</span>
            

              </span>
              {answer.user === user && (
        (<Tooltip title="Delete" arrow><IconButton size='small' aria-label="delete" style={{margin:"0px 10px 10px 10px"}} onClick={() => handleDeleteAnswer(answer.user,answer.id)}>
    <DeleteIcon fontSize="inherit"/>
  </IconButton></Tooltip>)
      )}
            </div>
          </div>
        ))}
    </ul>
    
    {selectedQuestionId === question.id && (
     isLoggedin &&  <AnswerForm isLoggedin={isLoggedin} handleAnswerSubmit={handleAnswerSubmit} answerText={answerText} setAnswerText={setAnswerText}/>    
    )}
  </div>))):(
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h3>No data found</h3>
    </div>
  )}
  </div>
  </div>
  </div>   
  ); 
};

export default QuestionsAndAnswers;
