import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
let tempid="" 
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function NavBarDoc(props) {
  console.log('passed name is')
  console.log(props.name)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           Welcome {props.name}
          </Typography>
          <Search sx={{margin:'3vh'}}
             onChange={
                e => tempid=e.target.value
             }
          >

            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Button onClick={()=>{
                  console.log("value earlier")
                  console.log(tempid)
                  //here set the data for this person in data.js file as well a time series data should be returned 
                  //use api for getting patient time series data 
                  //then u need to extract and put it in data file 
                  //add token of doctor here 
                  console.log(localStorage.getItem('token'));
                  var config = {
                    method: 'get',
                    url: 'http://localhost:8000/score/',
                    headers: { 
                      'Authorization': `Token ${localStorage.getItem('token')}`
                    },
                    params: {
                      id : tempid, 
                      type : "Object Classification Test"
                    }
                  };
                  console.log('config created')
                  console.log(config)
                  axios(config)
                  .then(function (response) {
                    console.log('got response')
                    console.log(JSON.stringify(response.data));
                    //iterate on this data and store in a list of map 
                    //put this in first data list 
                    let data1=[]
                    response.data.forEach((elem)=>{
                      data1.push({
                        'datetime':elem.timestamp.substr(0,10),
                        'score1':elem.score,
                      })
                      console.log(elem.timestamp)
                      console.log(elem.timestamp.substr(0,10))
 
                    })
                    console.log(data1)
                    props.setList1(data1)
                  })
                  .catch(function (error) {
                    console.log(error);
                  });

                  //test 2

                  var config = {
                    method: 'get',
                    url: 'http://localhost:8000/score/',
                    headers: { 
                      'Authorization': `Token ${localStorage.getItem('token')}`
                    },
                    params: {
                      id : tempid, 
                      type : "Handwriting Recognition Test"
                    }
                  };
                  console.log('config created')
                  console.log(config)
                  axios(config)
                  .then(function (response) {
                    console.log('got response')
                    console.log(JSON.stringify(response.data));
                    //iterate on this data and store in a list of map 
                    //put this in first data list 
                    let data1=[]
                    response.data.forEach((elem)=>{
                      data1.push({
                        'datetime':elem.timestamp.substr(0,10),
                        'score1':elem.score,
                      })
                      console.log(elem.timestamp)
                      console.log(elem.timestamp.substr(0,10))
 
                    })
                    console.log('data for handwirting')
                    console.log(data1)
                    props.setList2(data1)
                  })
                  .catch(function (error) {
                    console.log(error);
                  });

                  //test 3

                  var config = {
                    method: 'get',
                    url: 'http://localhost:8000/score/',
                    headers: { 
                      'Authorization': `Token ${localStorage.getItem('token')}`
                    },
                    params: {
                      id : tempid, 
                      type : "Rapid Color Naming"
                    }
                  };
                  console.log('config created')
                  console.log(config)
                  axios(config)
                  .then(function (response) {
                    console.log('got response')
                    console.log(JSON.stringify(response.data));
                    //iterate on this data and store in a list of map 
                    //put this in first data list 
                    let data1=[]
                    response.data.forEach((elem)=>{
                      data1.push({
                        'datetime':elem.timestamp.substr(0,10),
                        'score1':elem.score,
                      })
                      console.log(elem.timestamp)
                      console.log(elem.timestamp.substr(0,10))
 
                    })
                    console.log(data1)
                    props.setList3(data1)
                    
                  })
                  .catch(function (error) {
                    console.log(error);
                  });

                  //test 4 
                  var config = {
                    method: 'get',
                    url: 'http://localhost:8000/score/',
                    headers: { 
                      'Authorization': `Token ${localStorage.getItem('token')}`
                    },
                    params: {
                      id : tempid, 
                      type : "Reading Comprehension Test"
                    }
                  };
                  console.log('config created')
                  console.log(config)
                  axios(config)
                  .then(function (response) {
                    console.log('got response')
                    console.log(JSON.stringify(response.data));
                    //iterate on this data and store in a list of map 
                    //put this in first data list 
                    let data1=[]
                    response.data.forEach((elem)=>{
                      data1.push({
                        'datetime':elem.timestamp.substr(0,10),
                        'score1':elem.score,
                      })
                      console.log(elem.timestamp)
                      console.log(elem.timestamp.substr(0,10))
 
                    })
                    console.log(data1)
                    props.setList4(data1)
                    
                  props.setId(tempid)
                  })
                  .catch(function (error) {
                    console.log(error);
                  });

                  console.log('done')

                  
                }}  color="inherit">View Plots</Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
