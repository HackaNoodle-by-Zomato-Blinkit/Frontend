import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Grid,Stack,Button,FormControlLabel} from '@mui/material';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import {Link,useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';


let username = "",password = ""

const Login= ()=>{

    const [validateusername, setValidateUsername] = useState(false)
    const [validatePassword, setValidatePassword] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)


    const naviagate = useNavigate()
    return (
        <>
       <Grid container justifyContent="center">

         <Card sx={{ maxWidth: 1000, width:1000,my:10,border: '1px solid black'}}>
        <Typography variant="h3" align='center' fontWeight={"bold"}>Login</Typography>
        <CardContent>
        <Stack m={2} spacing={3}>
        <TextField  error={validateusername} onChange={(e)=>{
            username = e.target.value 
        }} label="Username" type="email"/>
        <TextField error={validatePassword} onChange={(e)=>{
            password = e.target.value
        }} label="Password" type="password" />
        <Grid container rowspacing={12}>
        <Grid item xs={11}>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
        </Grid>
        
        <Grid item xs={1}>
        
        <Link to="/register"><Button>Register</Button></Link>

        </Grid>
        </Grid>
       

        <Button onClick={()=>{
            setError(false);
            if(username === "") setValidateUsername(true)
            if(password === "") setValidatePassword(true)
            if(username !== "" && password !== "")
            {
                setLoading(true)
                var data = JSON.stringify({
                    "username": username,
                    "password": password
                  });
                  
                  var config = {
                    method: 'post',
                    url: 'http://localhost:8000/login/',
                    headers: { 
                      'Content-Type': 'application/json'
                    },
                    data : data
                  };
                  
                  axios(config)
                  .then(function (response) {
                    localStorage.clear()
                    console.log(response)
                    console.log(response.data.token)
                    localStorage.setItem('token',response.data.token)
                    setLoading(false)
                    naviagate('/studenthome')
                  })
                  .catch(function (error) {
                    console.log(error)
                        setLoading(false)
                        setError(true)
                });
                  

            }
            
        }} variant="contained" color="success">Sign In As Learner</Button>
         <Button onClick={()=>{
            setError(false);
            if(username === "") setValidateUsername(true)
            if(password === "") setValidatePassword(true)
            if(username !== "" && password !== "")
            {
                setLoading(true)
                var data = JSON.stringify({
                    "username": username,
                    "password": password
                  });
                  
                  var config = {
                    method: 'post',
                    url: 'http://localhost:8000/login/',
                    headers: { 
                      'Content-Type': 'application/json'
                    },
                    data : data
                  };
                  
                  axios(config)
                  .then(function (response) {
                    localStorage.clear()
                    console.log(response)
                    console.log(response.data.token)
                    localStorage.setItem('token',response.data.token)
                    setLoading(false)
                    naviagate('/doctorhome')
                  })
                  .catch(function (error) {
                    console.log(error)
                        setLoading(false)
                        setError(true)
                });
                  

            }
            
        }} variant="contained" color="success">Sign In As Doctor</Button>
      </Stack>
      {error?<h2 style={{textAlign:'center'}}>Invalid Credentials</h2>:null}
      {loading?<CircularProgress/>: null}
        </CardContent>
    </Card>
    </Grid>
        </>
    )
}

export default Login;