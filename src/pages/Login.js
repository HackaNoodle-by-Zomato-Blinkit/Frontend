import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Grid,Stack,Button,FormControlLabel} from '@mui/material';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import {Link,useNavigate} from 'react-router-dom';




const Login= ()=>{

    const naviagate = useNavigate()
    return (
        <>
       <Grid container justifyContent="center">

         <Card sx={{ maxWidth: 1000, width:1000,my:10,border: '1px solid black'}}>
        <Typography variant="h3" align='center' fontWeight={"bold"}>Login</Typography>
        <CardContent>
        <Stack m={2} spacing={3}>
        <TextField  label="Email(@thapar.edu)" type="email"/>
        <TextField label="Password" type="password" />
        <Grid container rowspacing={12}>
        <Grid item xs={11}>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
        </Grid>
        
        <Grid item xs={1}>
        
        <Link to="/register"><Button>Register</Button></Link>

        </Grid>
        </Grid>
       
         
     
        

        <Button onClick={()=>{
            naviagate('/studenthome')
        }} variant="contained" color="success">Sign In As Learner</Button>
         <Button onClick={()=>{
            naviagate('/doctorhome')
        }} variant="contained" color="success">Sign In As Doctor</Button>
      </Stack>
        </CardContent>
    </Card>
    </Grid>
        </>
    )
}

export default Login;