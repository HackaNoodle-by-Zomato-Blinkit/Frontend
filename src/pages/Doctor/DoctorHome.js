
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

const DoctorHome=()=>{
    return (
        <>
        <NavBar name="Doctor name"/>
    </>
    )
}

export default DoctorHome; 