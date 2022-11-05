

import NavBarDoc from '../../components/NavBarDoc';
import GameCard from '../../components/card';
import {Stack,Grid,Box,Paper} from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PlotArea from '../../components/PlotArea'

const DoctorHome=()=>{
    return (
        <>
        <NavBarDoc name="Doctor name"/>
       
        <div>
            <div>
                <h2 style={{textAlign:'center'}}>Object Classification Score:</h2>
               <PlotArea id=""/>
            </div>
            <div>
               <h2 style={{textAlign:'center'}}>HandWriting Recognition Score:</h2>
               <PlotArea id=""/>
            </div>
            <div>
               <h2 style={{textAlign:'center'}}>Rapid Color Test Score:</h2>
               <PlotArea id=""/>
            </div>
            <div>
               <h2 style={{textAlign:'center'}}>Reading Comprehension Score:</h2>
               <PlotArea id=""/>
            </div>
        </div>
    </>
    )
}

export default DoctorHome; 