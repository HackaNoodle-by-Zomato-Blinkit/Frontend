
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Grid,Stack,Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import {Link,useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
let username="",name="",password="",gender="Select Gender",age="",confirmpassword="",specialization="",experience="",charges="";
const DoctorRegister=()=>{
    const [validateConfirmPassword, setValidateConfirmPassword] = useState(false)
    const [validatePassword, setValidatePassword] = useState(false)
    const [validateUsername, setValidateUsername] = useState(false)
    const [validateName, setValidateName] = useState(false)
    const [validateAge, setValidateAge] = useState(false)
    const [validateSpecialization, setValidateSpecialization] = useState(false)
    const [validateExperience,setValidateExperience]=useState(false)
    const [validateCharges,setValidateCharges]=useState(false)
    const [validateGender,setValidateGender] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const naviagate = useNavigate()
    return (
        <>
            <Grid container justifyContent="center">
            <Card sx={{ maxWidth: 1000, width:1000,my:10,border: '1px solid black'}}>
            <Typography variant="h3" align='center' fontWeight={"bold"}>Register</Typography>
            <CardContent>
            <Stack m={2} spacing={3}>
            <TextField  error={validateUsername} onChange={(e)=>{
                username = e.target.value 
            }}  label="Username" type="text"/>
            <TextField  error={validateName} onChange={(e)=>{
                name = e.target.value 
            }}  label="Name" type="text"/>
            <TextField  error={validateAge} onChange={(e)=>{
                age = e.target.value 
            }}  label="Age" type="text"/>
            <TextField  error={validateSpecialization} onChange={(e)=>{
                specialization = e.target.value 
            }}  label="Specialization" type="text"/>
            <TextField  error={validateExperience} onChange={(e)=>{
                experience = e.target.value 
            }}  label="Experience" type="text"/>
            <TextField  error={validateCharges} onChange={(e)=>{
                charges = e.target.value 
            }}  label="Charges" type="text"/>
            <select   error={validateGender} onChange={(e)=>{
                gender = e.target.value 
            }} style={{height:'8vh',borderRadius:'5px'}} >
                <option value="Female"  selected={gender == "female"}>Female</option>
                <option value="Male"  selected={gender == "male"}>Male</option>
                <option value="Select Gender"  selected={gender == "Select Gender"} disabled hidden>Select Gender</option>
            </select>
            <TextField error={validatePassword} onChange={(e)=>{
                password = e.target.value 
            }} label="Password" type="password" />
            <TextField error={validateConfirmPassword} onChange={(e)=>{
                confirmpassword = e.target.value 
            }} label="Confirm Password" type="password" />
            
            
              <Button onClick={()=>{
                    setError(false);
                    if(password!==confirmpassword){
                        setValidateConfirmPassword(true)
                        setError(true);
                    }
                    if(username==="")setValidateUsername(true);
                    if(name==="")setValidateName(true);
                    if(age==="")setValidateAge(true);
                    if(password==="")setValidatePassword(true);
                    if(confirmpassword==="")setValidateConfirmPassword(true);
                    if(gender==="")setValidateGender(true);
                    if(specialization==="")setValidateSpecialization(true);
                    if(experience==="")setValidateExperience(true);
                    if(charges==="")setValidateCharges(true);
                    if(username !=""  && name!="" && age!="" && password!="" && confirmpassword!="" && gender!="" && specialization!="" && experience!="" && charges!="" && password===confirmpassword ){
                        setLoading(true)
                        var data = JSON.stringify({
                            "username": username,
                            "password": password,
                            "is_mentor": true,
                            "name": name,
                            "age": age,
                            "gender": gender,
                            "specialization": specialization,
                            "experience": experience,
                            "consultation_charges": charges
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
                            console.log('successfully register doctor');
                            console.log(JSON.stringify(response.data));
                            setLoading(false)
                            naviagate('/login')
                          })
                          .catch(function (error) {
                            setLoading(false)
                            console.log(error);
                          });
                          
                    }
                    
                }} variant="contained" color="success">Register</Button>
                <Button  onClick={()=>{
                    naviagate('/register')
                }}  variant="contained" color="success">Register As Learner</Button>
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

export default DoctorRegister;

