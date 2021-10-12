import * as React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useState, useContext } from "react";
import AddPost from './addPost';

const style = {
    margin: 0,
    top: 'auto',
    right: 'auto',
    bottom: 20,
    left: 20,
    position: 'fixed',
};


export default function Add(){
    
    const [addState,setAddState]=useState(false);
        
    return (
    <div>
    <Fab style={style} onClick={()=>setAddState(true)}>
        <AddIcon />
        </Fab>

    <AddPost show={addState} 
    onHide={()=>setAddState(false)}/>
    </div>
    )
           
}


