import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const SelectQuestionCategory = ({selectedCategory,setSelectedCategory}) => {
  let categories=["Programming Languages","Library","Frontend","Backend","Frameworks", "Databases", "Networking"]
  return (
    <div style={{alignSelf:"flex-start"}}>
      
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Type</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={selectedCategory}
        label={"question category"}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
      
        {categories.map((category, index) => (
          <MenuItem key={index} value={category}>{category}</MenuItem>

        ))}
      </Select>
      <FormHelperText>Question Category</FormHelperText>
    </FormControl>
    </div>
  )
}

export default SelectQuestionCategory