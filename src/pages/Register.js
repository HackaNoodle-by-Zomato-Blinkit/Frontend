import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Grid,Stack,Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';


const Register = ()=>{
    return (
        <>
            <Grid container justifyContent="center">
            <Card sx={{ maxWidth: 1000, width:1000,my:10,border: '1px solid black'}}>
            <Typography variant="h3" align='center' fontWeight={"bold"}>Register</Typography>
            <CardContent>
            <Stack m={2} spacing={3}>
            <TextField  label="Username" type="text"/>
            <TextField  label="Email(@thapar.edu)" type="email"/>
            <TextField label="Password" type="password" />
            <TextField label="Confirm Password" type="password" />
            
            
        
                <Button  variant="contained" color="success">Register</Button>
                </Stack>
                <Typography variant="h6" align="center">Already have a account? <Link to="/login"><Button>Sign In</Button></Link></Typography>
                </CardContent>
                </Card>
                </Grid>
        </>
    )
}

export default Register;