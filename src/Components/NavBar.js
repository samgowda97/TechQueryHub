import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';

const NavBar = ({handleLogout}) => {
  const user = useSelector((state) => state.user);

  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Welcome, {user}
          </Typography>
          {user && <Button onClick={handleLogout} variant="contained" size="medium">Logout</Button>}
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default NavBar