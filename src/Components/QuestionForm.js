import { Button, TextField } from "@mui/material"
import SelectQuestionCategory from "./SelectQuestionCategory"
import AlertSnackBar from "./AlertSnackBar";
import { useState } from "react";

const QuestionForm = ({handleQuestionSubmit, setNewQuestion,isLoggedin,newQuestion,selectedCategory,setSelectedCategory}) => {
  const [open, setOpen] = useState(false);
  const [snackMessage,setSnackMessage]=useState('')
  const[severityMsg,setSeverityMsg]=useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCategory.trim() === '') {
      setSnackMessage("Please select a question category before posting your question")
      setOpen(true);
      setSeverityMsg("info")
      return;
    }
    handleQuestionSubmit(e);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setOpen(false);
  };
  const handleChange=(e)=>{
    setNewQuestion(e.target.value)
  }
  return (
    <div>
    <h2 className="question-heading">Ask a Technical Question </h2>
    <AlertSnackBar open={open} handleClose={handleClose} severity={severityMsg} message={snackMessage}/>
    <form onSubmit={handleSubmit} className="questions-form">
    <SelectQuestionCategory  selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

      <TextField
        className="questions-textField"
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="Enter your question"
        value={newQuestion}
        onChange={handleChange}
        autoComplete="off"
        variant="outlined" 
        disabled={!isLoggedin}
      />
      <Button
        className="questions-button"
        disabled={!isLoggedin}
        variant="contained"
        type="submit"
        color="primary" 
        size="small"
      >
        Post Question
      </Button>

    </form>

    </div> )
}

export default QuestionForm