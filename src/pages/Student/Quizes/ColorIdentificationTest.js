import React from 'react';
import Navbar2 from '../../../components/NavBar2';
import {Box, Grid,Paper,Container,Typography} from '@mui/material';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { useState } from 'react';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    height : '60px'

}));

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};




let color = ['red','green','blue','pink','black','yellow']
let check = ""
let data = []
for(var i = 0; i < 20; i++ ){
        data.push(color[Math.floor(Math.random() * 6)])
        check += data[data.length-1][0].toLocaleUpperCase()
    
}

const ColorIdentificationTest = () => {

    // const [timer, setTimer] = useState(30)
    const [showtimer, setShowTimer] = useState(false)
    const [showTime, setTime] = useState(30)

    if(showTime> 0  && showtimer){
        setTimeout(() => {
            setTime(showTime - 1)
        }, 1000)
    }

    

    return (
        <>
            <Navbar2 />

            {showtimer?<Typography variant="h3" fontWeight={"bold"} align="center" sx={{my:5}}>Time Remaining : {showTime} Seconds</Typography>: null}
            
            <Container sx={{my:5}}>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            {
                data.map((elem)=>{
                    return (
                        <Grid item xs={2.5}>
                            <Item sx={{backgroundColor:elem}}></Item>
                        </Grid>
                    )
                })
            }
           
            
        </Grid>
        </Box>
            </Container>
            <Fab onClick={()=>{
                setShowTimer(true)
            }} sx={style} color="primary" aria-label="add">
        <KeyboardVoiceIcon />
      </Fab>
         </>

    )
}
export default ColorIdentificationTest;
