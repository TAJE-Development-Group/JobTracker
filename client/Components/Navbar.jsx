import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 3,
    color: '#F8F8FF',
    fontWeight: '500',
    fontSize: '2em',
    fontFamily: 'Cabin, sans-serif',
  },
  emptyField: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  navbar: {
    backgroundColor: '#3873F6',
  }
}));

export default function NavBar({props}) {
  const classes = useStyles();
  const {register, handleSubmit} = useForm();
  const [navState, setNavState] = useState({});
  const { globalState, setGlobalState } = props;
  

  function onSubmit(data) {
   // Name, Position, Email, Phone, LinkedIn
  //  setNavState(data);
  //  const {companyName, contact, techStack, note, todo} = data;
  // fetch('/api/jobs', {
  //   method: 'POST', 
  //   headers: {'ContentType': 'application/json'}, 
  //   body: JSON.stringify({
  //     company_name, 
  //     location, 
  //     tech,
  //     notes,
  //     progress
  //   })
  // })
  // .then(job => job.json())
  // .then(job => {
  //   console.log(job); 
    setGlobalState(oldJobs => [...oldJobs, data]);
  // })
  // .catch(err => console.log(err)); 

  };
  // <input placeholder="Name" type="text" ref={register} name="Name"/>
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Software Developer Job Tracker by TAJE
          </Typography>
          {/* <div> */}
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <fieldset>
          <label>
            <input className='text-box' placeholder="Company Name" type="text" ref={register} name="company_name"/> 
            <input className='text-box' placeholder="Location" type="text" ref={register} name="location"/>
            <input className='text-box' placeholder="Contact" type="text" ref={register} name="contact"/>
            <input className='text-box' placeholder="Tech Stack" type="text" ref={register} name="tech"/>
            <input className='text-box' placeholder="Note" type="text" ref={register} name="notes"/>
          </label>
            <Button className='add-company' type="submit" color="inherit">Add Company</Button>
        </fieldset>
          </form>
        </Toolbar>
      </AppBar>
    </div>
  );
}