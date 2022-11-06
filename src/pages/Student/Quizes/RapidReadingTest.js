import React from 'react';
import Navbar2 from '../../../components/NavBar2';
import {Box, Grid,Paper,Container} from '@mui/material';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { useState} from 'react';
import StopIcon from '@mui/icons-material/Stop';





const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    height : '60px',
    fontSize: '50px',
    
}));

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    width : '100px',
    height : '100px'
};


let color = ['In recent years, handwritten digits recognition has been an important area due to its applications in several fields. This work is focusing on the recognition part of handwritten Arabic digits recognition that face several challenges, including the unlimited variation in human handwriting and the large public databases. The paper provided a deep',
'State-of-the-art offline handwriting text recognition systems tend to use neural networks and therefore require a large amount of annotated data to be trained. In order to partially satisfy this requirement, we propose a system based on Generative Adversarial Networks (GAN) to produce synthetic images of handwritten words. We use bidirectional LSTM',
'Recognition of handwritten digits has been an important area in recent years because of its uses in many fields. Arabic pattern digits, weak work is performed because Arabic digits (Indian) are more complicated than English patterns. This study focuses on the recognition component of the recognition of handwritten Arabic digits (Indian) that faces.',
'Arabic handwriting is slightly different from the handwriting of other languages; hence it is possible to distinguish the handwriting written by the native or non-native writer based on their handwriting. However, classifying Arabic handwriting is challenging using traditional text recognition algorithms. Thus, this study evaluated and validated the end.',
'The success of handwriting recognition methods based on digitizer-pen signal processing is mostly dependent on the defined features. The strong and discriminating feature descriptors can play a main role in improving the accuracy of pattern recognition. Moreover, most recognition studies utilize the local features or a sequence',
'Deep learning has increased the performance of classification and object detection, but it generally requires large amounts of labeled data for training. In this paper, we introduce a new data augmentation algorithm that promotes diversity between classes, representing the characters of the Arabic script, and can balance samples']

let check = ""
let data = []
for(var i = 0; i < 1; i++ ){
        data.push(color[Math.floor(Math.random() * 6)])
        check += data[data.length-1][0].toLocaleUpperCase()
}




const RapidReadingTest = () => {

    // const [timer, setTimer] = useState(30)
    const [rec,setRec] = useState(false)



    return (
        <>
            <Navbar2 />
            <Container sx={{my:5}}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {
                            data.map((elem)=>{
                                return (
                                    <Grid item xs={12}>
                                        <Item sx={{backgroundColor:elem}}>{elem}</Item>
                                    </Grid>
                                )
                            })
                        }  
                    </Grid>
                </Box>
            </Container>
            
            
            <Fab onClick={()=>{
                //  if(!rec) startRecording()
                //  else {
                //      stopRecording()
                     
                //  }
                setRec(!rec)
                
               
}} sx={style} color={rec?"error":"primary"} aria-label="add">
        {!rec?<KeyboardVoiceIcon sx={{width : '40px',height : '40px'}}/>:<StopIcon sx={{width : '40px',height : '40px'}}/>}
      </Fab>
      
         </>

    )
}
export default RapidReadingTest;