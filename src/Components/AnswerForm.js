import { Button, TextField} from '@mui/material'
import React from 'react'
import '../App.css'
const AnswerForm = ({handleAnswerSubmit,answerText,setAnswerText}) => {
  const handleChange=(e)=>{
    setAnswerText(e.target.value)
  }
  return (
    <div>
        <form onSubmit={handleAnswerSubmit} style={{ marginTop: '10px' }}>
        <TextField
          type="text"
          value={answerText}
          onChange={handleChange}
          placeholder="Enter your answer"
          variant="outlined"
          fullWidth
          size='small'
          autoComplete='off'
          style={{ margin: "0px 10px 10px 115px",
            width:"200px"}}
        />
        <Button type="submit" size='small'  variant="contained">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default AnswerForm