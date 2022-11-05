
import NavBar from '../../components/NavBar';
import GameCard from '../../components/card';
import {Stack,Grid,Box,Paper} from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
        {/* <Grid container spacing={2}>
        <Grid item xs={6}>
            <Item><GameCard/></Item>
        </Grid>
        <Grid item xs={6}>
            <Item><GameCard/></Item>
        </Grid>
        <Grid item xs={6}>
            <Item><GameCard/></Item>
        </Grid>
        <Grid item xs={6}>
            <Item><GameCard/></Item>
        </Grid>
        </Grid> */}
        {/* <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, sm: 8, md: 8 }}>
        <Grid item xs={2} sm={4} md={4}>
        <Item><GameCard/></Item>
        <Item><GameCard/></Item>
        <Item><GameCard/></Item>
        <Item><GameCard/></Item>
        </Grid>
      </Grid>
    </Box> */}
        {/* <Container fluid>
      <Row xs={2} md={2} lg={2}>
        <Col ><GameCard/></Col>
        <Col ><GameCard/></Col>
      </Row>
      <Row xs={2} md={2} lg={2}>
        <Col ><GameCard/></Col>
        <Col ><GameCard/></Col>
      </Row>
    </Container> */}
    {/* <div sx={{minWidth:'100vh'}}>
        <div sx={{maxWidth:'50vh',display:'flex',flexdirection:'column'}}>
            <GameCard/>
            <GameCard/>
        </div>
        <div  sx={{maxWidth:'50vh',display:'flex',flexdirection:'row'}}>
            <GameCard/>
            <GameCard/>
        </div>
    </div> */}
    
    <Grid container  direction='row'   margin='10px' rowSpacing='5vh'  >
        <Grid item xs={12} justify='right' margin='auto' justifyContent='center' alignContent='center' display='flex' grid-template-columns='repeat(auto-fit)' >
            <Item justify='center'  elevation='0' margin='auto' ><GameCard/></Item>
            <Item elevation='0'><GameCard/></Item>
        </Grid>
        <Grid item xs={12} justify='right' margin='auto' justifyContent='center' alignContent='center' display='flex' grid-template-columns='repeat(auto-fit)'>
            <Item justify='center'  elevation='0' margin='auto'><GameCard/></Item>
            <Item elevation='0'><GameCard/></Item>
        </Grid>
    </Grid>
    <Grid lg={12} item container spacing={2}>
        <Grid item lg={3} sm={6} xs={12} ><h1 style={{backgroundColor:'green'}}></h1></Grid>
        <Grid item lg={3} sm={6} xs={12} ><h1 style={{backgroundColor:'green'}}></h1></Grid>
        <Grid item lg={3} sm={6} xs={12} ><h1 style={{backgroundColor:'green'}}></h1></Grid>
        <Grid item lg={3} sm={6} xs={12} ><h1 style={{backgroundColor:'green'}}></h1></Grid>
    </Grid>
    </>
    )
}

export default StudentHome; 