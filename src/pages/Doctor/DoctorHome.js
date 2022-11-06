

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
import { useEffect,useState } from 'react';
import axios from 'axios';
const DoctorHome=()=>{
    const [id,setId]=useState(false)
    //get doctor getails over here 
    const [list1,setList1]=useState(false)
    const [list2,setList2]=useState(false)
    const [list3,setList3]=useState(false)
    const [list4,setList4]=useState(false)
    const [obj,setObj]=useState(false)
    useEffect(() => {
        var config = {
            method: 'get',
            url: 'http://localhost:8000/mentor/',
            headers: { 
                'Authorization':`Token ${localStorage.getItem('token')}`,
            }
        };
        const dojob=async()=>{
            axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            console.log(obj.name)
            setObj(obj);
        })
        .catch(function (error) {
            console.log(error);
        });
        }
        dojob();
      }, []);
    
    console.log('name of the doctor')
    console.log(obj);
    return (
        <>
        <NavBarDoc setId={setId} setList1={setList1} setList2={setList2} setList3={setList3} setList4={setList4} name="${}"/>
        {id?
        <div>
            <div>
                <h2 style={{textAlign:'center'}}>Object Classification Score:</h2>
               <PlotArea UserData={list1} id=""/>
            </div>
            <div>
               <h2 style={{textAlign:'center'}}>HandWriting Recognition Score:</h2>
               <PlotArea UserData={list2} id=""/>
            </div>
            <div>
               <h2 style={{textAlign:'center'}}>Rapid Color Test Score:</h2>
               <PlotArea UserData={list3} id=""/>
            </div>
            <div>
               <h2 style={{textAlign:'center'}}>Reading Comprehension Score:</h2>
               <PlotArea UserData={list4}id=""/>
            </div>
        </div>
        :null
       }
    </>
    );
}

export default DoctorHome; 