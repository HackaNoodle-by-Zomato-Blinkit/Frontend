import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import {Link,useNavigate} from 'react-router-dom';
const NavBar = (props)=>{
  
  const naviagate = useNavigate()
    return (
        <>
         <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" color="success">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome, {props.name} !
          </Typography>
          <Button color="inherit"onClick={()=>{
              localStorage.clear();
              naviagate('/login')
          }}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
        </>
    )
}

export default NavBar;