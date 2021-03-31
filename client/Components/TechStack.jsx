import React, { Component, useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    button: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function handleClick (el) {
    setTechStack(el)
};
// const techStackArr = []
// for(let i = 0; i < techStack.length; i++){
    //     techStackArr.push(<h2>-{techStack[i]}</h2>)
    // }
    
export default function TechStack () {
  const [techStack, setTechStack] = useState('add tech here');
    return (
        <div>
          <form>
            <TextField
            id="filled-textarea"
            label="Tech Stack"
            placeholder={techStack}
            multiline
            variant="filled"
            onChange={event => setTechStack(event.target.value)}
            />
            <Button variant="outlined" color="secondary" onClick={handleClick()}>
            Add Tech
            </Button>
          </form>
        </div>
    );
};

// considering removing the button