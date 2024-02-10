import { Button, TextField } from "@mui/material";

const UserForm = ({ handleLoginSubmit, setUsername, username }) => {
    return (
      <div>
        <h2>Add User</h2>
        <form onSubmit={handleLoginSubmit}>
          <TextField
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
          label="Name"
          value={username} onChange={(e) => setUsername(e.target.value)}
        />
        <Button type="submit" variant="outlined">Add User</Button>
        </form>
      </div>
    );
  };

export default UserForm