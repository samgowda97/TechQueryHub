import { Button, TextField } from "@mui/material"

const QuestionForm = ({handleQuestionSubmit, setNewQuestion,isLoggedin,newQuestion}) => {
  return (
    <div>
    <h2>Questions and Answers</h2>
    <form onSubmit={handleQuestionSubmit}>
      <TextField
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
          label="Enter your question"
          value={newQuestion} onChange={(e) => setNewQuestion(e.target.value)}
        />
      <Button disabled={!isLoggedin} variant="contained" type="submit">Add Question</Button>

    </form> 
    </div> )
}

export default QuestionForm