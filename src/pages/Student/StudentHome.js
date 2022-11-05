
import NavBar from '../../components/NavBar';
import GameCard from '../../components/card';
import {Stack,Grid,Box,Paper} from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Image from '../../static/ReadingComprehesion.png'
import Image2 from '../../static/ColorTest.png'
import Image3 from '../../static/WritingTest.png'
import Image4 from '../../static/ImageIdentificationTest.png'



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const StudentHome=()=>{
    return (
        <>
        <NavBar/>
        <Grid container direction='row' margin='5px' rowSpacing='1vh'>
            <Grid item xs={12} justify='right' margin='auto' justifyContent='center' alignContent='center' display='flex' grid-template-columns='repeat(auto-fit)' >
                <Item justify='center'  elevation='0' margin='auto'>
                    <Card sx={{ maxWidth: 345}}  >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={Image}
                            />
                            <CardContent sx={{justifyContent:'center', color:"white"}}>
                            <Typography gutterBottom variant="h5" component="div" color="black">
                                Reading Comprehension Test
                            </Typography>
                            <Typography variant="body2" color="Grey" >
                                <div>A passage of text will be displayed and you have to read it aloud. Motive this will help then improve reading skills. </div>
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={{justifyContent:'center', backgroundColor:"Green", color:"black"}}>
                            <Button size="small" sx={{color:'white'}} >
                               Start Test
                            </Button>
                        </CardActions>
                    </Card>
                </Item>
                <Item elevation='0'>
                    <Card sx={{ maxWidth: 345}}  >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={Image2}
                            />
                            <CardContent sx={{justifyContent:'center', color:"white"}}>
                            <Typography gutterBottom variant="h5" component="div" color="black">
                                Color identification Test
                            </Typography>
                            <Typography variant="body2" color="Grey" >
                                <div> You have to quickly identify the color displayed over the screen. Motive is to improve performance under pressure sceniors.</div>
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={{justifyContent:'center', backgroundColor:"Green", color:"black"}}>
                            <Button size="small" sx={{color:'white'}} >
                            Start Test
                            </Button>
                        </CardActions>
                    </Card>
                </Item>
            </Grid>
            <Grid item xs={12} justify='right' margin='auto' justifyContent='center' alignContent='center' display='flex' grid-template-columns='repeat(auto-fit)'>
                <Item justify='center'  elevation='0' margin='auto'>
                    <Card sx={{ maxWidth: 345}}  >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={Image3}
                            
                            />
                            <CardContent sx={{justifyContent:'center', color:"white"}}>
                            <Typography gutterBottom variant="h5" component="div" color="black">
                            Writting Test
                            </Typography>
                            <Typography variant="body2" color="Grey" >
                                <div>A word will be voice out you have to write the given word. Motive This will help then improve Writing skills.</div>
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={{justifyContent:'center', backgroundColor:"Green", color:"black"}}>
                            <Button size="small" sx={{color:'white'}} >
                                Start Test
                            </Button>
                        </CardActions>
                    </Card>
                </Item>
                <Item elevation='0'>
                    <Card sx={{ maxWidth: 345}}  >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={Image4}
                            />
                            <CardContent sx={{justifyContent:'center', color:"white"}}>
                                <Typography gutterBottom variant="h5" component="div" color="black">
                                    <bold>Image Identification Test</bold>
                                </Typography>
                                <Typography variant="body2" color="Grey" >
                                    <div>Task is to identidy the image displayed on the screen . Motive this will improve identification skills and help them</div>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={{justifyContent:'center', backgroundColor:"Green", color:"black"}}>
                            <Button size="small" sx={{color:'white'}} >
                            Start Test
                            </Button>
                        </CardActions>
                    </Card>
                </Item>
            </Grid>
        </Grid>
    </>
    )
}

export default StudentHome; 