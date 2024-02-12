import { Button, TextField} from '@mui/material'
import React from 'react'

const AnswerForm = ({handleAnswerSubmit,answerText,setAnswerText}) => {
  return (
    <div>
        <form onSubmit={handleAnswerSubmit} style={{ marginTop: '10px' }}>
        <TextField
          type="text"
          value={answerText}
          onChange={(e) => setAnswerText(e.target.value)}
          placeholder="Enter your answer"
          variant="outlined"
          fullWidth
          style={{ margin: '0px 10px 10px 115px',width:"200px" }}
          size='small'
          autoComplete='off'
        />
        <Button type="submit" size='small' variant="contained">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default AnswerForm