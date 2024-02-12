import { Button, TextField } from "@mui/material";

const UserForm = ({ handleLoginSubmit, setUsername, username }) => {
    return (
      <div >
      <form onSubmit={handleLoginSubmit} >
        <div style={{display:'flex',flexDirection:"column",marginTop:"10px"}}>
        <TextField
          helperText={username.length > 0?"":"Add User to post Question or Answer"}
          id="demo-helper-text-aligned-no-helper"
          label="Name"
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="off"
        />
        {username.length > 0 && 
          <Button type="submit" size="small" variant="outlined" style={{alignItems:"right",width:"90px",margin:"10px 0px 0px 150px" }}>Login</Button>
        }
        </div>
      </form>
    </div>
    
    );
  };

export default UserForm