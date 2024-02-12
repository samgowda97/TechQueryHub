import { Checkbox, FormControl, FormHelperText, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from '@mui/material';
import React, { useState } from 'react'

const CategoryFilter = ({onSelectCategories}) => {
    const categories = ["Programming Languages","Concepts","Library","Frontend","Backend","Frameworks", "Databases", "Networking"];
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleChange = (event) => {
      setSelectedCategories(event.target.value);
      onSelectCategories(event.target.value);
    };
  return (
    <div>
       <FormControl sx={{ m: 1, width: 150 }}>
        <InputLabel id="demo-multiple-checkbox-label">Filter</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedCategories}
          onChange={handleChange}
          input={<OutlinedInput label="Category" />}
          renderValue={(selected) => selected.join(', ')}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              <Checkbox checked={selectedCategories.indexOf(category) > -1} />
              <ListItemText primary={category} />
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Filter Category</FormHelperText>
      </FormControl>
    </div>
  )
}
export default CategoryFilter;
