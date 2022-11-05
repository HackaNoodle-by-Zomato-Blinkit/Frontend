import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Grid,Stack,Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import {Link,useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
let username="",name="",password="",gender="Select Gender",age="",date="",confirmpassword="";


const Register = ()=>{
    const [validateConfirmPassword, setValidateConfirmPassword] = useState(false)
    const [validatePassword, setValidatePassword] = useState(false)
    const [validateUsername, setValidateUsername] = useState(false)
    const [validateName, setValidateName] = useState(false)
    const [validateAge, setValidateAge] = useState(false)
    const [validateDateOfBirth, setValidateDateOfBirth] = useState(false)
    const [validateGender,setValidateGender] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const naviagate = useNavigate()
    return (
        <>
            <Grid container justifyContent="center">
            <Card sx={{ maxWidth: 800, width:1000,my:10,border: '1px solid black'}}>
            <Typography variant="h3" align='center' fontWeight={"bold"}>Register</Typography>
            <CardContent>
            <Stack m={2} spacing={3}>
            <TextField  error={validateUsername} onChange={(e)=>{
                username = e.target.value 
            }} label="Username" type="text"/>
            <TextField  error={validateName} onChange={(e)=>{
                name = e.target.value 
            }} label="Name" type="text"/>
            <TextField  error={validatePassword} onChange={(e)=>{
                password = e.target.value 
            }}label="Password" type="password" />
            <select   error={validateGender} onChange={(e)=>{
                gender = e.target.value 
            }} style={{height:'8vh',borderRadius:'5px'}} >
                <option value="Female"  selected={gender == "female"}>Female</option>
                <option value="Male"  selected={gender == "male"}>Male</option>
                <option value="Select Gender"  selected={gender == "Select Gender"} disabled hidden>Select Gender</option>
            </select>
            {/* <Select error={validateGender} onChange={(e)=>{
                gender = e.target.value  
                labell=e.target.label
            }} options={options}   value={{label:labell,value:gender}}  /> */}
            <TextField error={validateAge}  onChange={(e)=>{
                age = e.target.value 
            }}label="Age" type="text"></TextField>
            <TextField error={validateDateOfBirth}  onChange={(e)=>{
                date = e.target.value 
            }}type="date" ></TextField>
            <TextField error={validateConfirmPassword} onChange={(e)=>{
                confirmpassword = e.target.value 
            }}label="Confirm Password" type="password" />
            
            
              <Button onClick={()=>{
                console.log(password)
                console.log(confirmpassword)
                console.log(date)
                setError(false);
                    if(password!==confirmpassword){
                        setValidateConfirmPassword(true)
                        setError(true);
                    }
                    if(username==="")setValidateUsername(true)
                    if(password==="")setValidatePassword(true)
                    if(gender==="")setValidateGender(true)
                    if(age==="")setValidateAge(true)
                    if(date==="")setValidateDateOfBirth(true)
                    if(name==="")setValidateName(true)
                    if(username!==""  && name!=="" && date!=="" && age!=="" && password!=="" && gender!=="" && password===confirmpassword){
                        setLoading(true)
                        var data = JSON.stringify({
                            "username": username,
                            "password": password,
                            "is_patient": true,
                            "name": name,
                            "age": age,
                            "gender": gender,
                            "dob": date
                          });
                          
                          var config = {
                            method: 'post',
                            url: 'http://localhost:8000/register/',
                            headers: { 
                              'Content-Type': 'application/json'
                            },
                            data : data
                          };
                          
                          axios(config)
                          .then(function (response) {
                            console.log('user successfully registered');
                            console.log(JSON.stringify(response.data));
                            setLoading(false)
                            naviagate('/login')
                          })
                          .catch(function (error) {
                            console.log(error);
                            setLoading(false)
                          });
                          
                    }
                   
                }} variant="contained" color="success">Register</Button>
                <Button  onClick={()=>{
                    naviagate('/doctorregister')
                }}  variant="contained" color="success">Register As Doctor</Button>
                </Stack>
                {error?<h2 style={{textAlign:'center'}}>Passwords did not match</h2>:null}
                {loading?<CircularProgress/>: null}
                <Typography variant="h6" align="center">Already have a account? <Link to="/login">
                    <Button>Sign In</Button></Link></Typography>
                </CardContent>
                </Card>
                </Grid>
        </>
    )
}

export default Register;