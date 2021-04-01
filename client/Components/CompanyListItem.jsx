import { names } from 'debug';
import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { context } from '../Context/context.js';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ProgressBar from './ProgressBar/ProgressBar.jsx';
import Contacts from './Contacts.jsx';
import TechStack from './TechStack.jsx';
import Location from './location.jsx';
import Notes from './notes.jsx'; 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// imt Typo[raphy from '@materia]li/corSyager[{Name: 'personA'}, {Name: 'personB'}]aphy';
// im
//   furc poa dnSubmit(data)o{
//     // reIr'ateri/icons/ExpandMore';
// imimlet oldCor actT= ceckact
//  r  oldContact.pushom './tack.jsx'
// import CtntactactsContact)
// m.  // but alst caal the resderSubmit .unctijnxpassing in '
// import ProgressBar from './ProgressBar/ProgressBar.jsx'
// cntactay
//    dumy functions to cdntacteleted
// contactArray.push(
//     //bascally the wat the style o the renderSubmit inside this f loop to dynamically ender multile component of te "render sumbit"
//       // RenerSubmt props={data}/
//     <div>
// dv
// cotact
// dv
// dv
// functicontactontapts() {
//   retdrvn (
//     ddviv>
//       cohtactour eist of contacts</h2>
//      d<vh2>name</h2>
//     d v<h2>phone</h2>
//       cohtactemaip</h2>
//      d<vh2>linkedin</h2>
//     d v<h2>etc</h2>
//     </coitactli
//   );dv



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    // flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));


export default function ControlledAccordions({props}) {
  // const { globalState } = useContext(context)
  const {globalState} = props;
  // const step = globalState[i].progress
  console.log('GS from Accordian', globalState)
  const companyAccordianArray = []
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

    if (globalState !== undefined){
      for(let i = 0; i < globalState.length; i++) {
        companyAccordianArray.push( 
    <div className={classes.root} key={`key${i}`}>
  <Accordion expanded={expanded === `panel${i+1}`} onChange={handleChange(`panel${i+1}`)}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1bh-content"
      id="panel1bh-header"
      >
        {/* Conditionally render company name */}
      <div>
        {/* <Typography className={classes.heading}>Company Name</Typography> */}
        <h2>{globalState[i].company_name}</h2>
      </div>
      {/* progress bar */}
      <div style={{width: '100%'}}>
        <ProgressBar props={globalState[i]}/>
      </div>
      {/* <Typography className={classes.secondaryHeading}>Location of Progress Bar</Typography> */}
      {/* <ExpandMoreIcon /> */}
    </AccordionSummary>

    <AccordionDetails >
    <Router>
  <div>
    <ul>
      <li>
        <Link to="/contacts">Contacts</Link>
      </li>
      <li>
        <Link to="/techStack">Tech Stack</Link>
      </li>
      <li>
        <Link to="/notes">Notes</Link>
      </li>
      <li>
        <Link to="/location">Location</Link>
      </li>
    </ul>

    <hr />

    <Switch>
      <Route path="/contacts">
        <Contacts props = {globalState[i]}/>
      </Route>
      <Route path="/techStack">
        <TechStack props = {globalState[i]} />
      </Route>
      <Route path="/notes">
        <Notes props = {globalState[i]} />
      </Route>
      <Route path="/location">
        <Location props={globalState[i]}/>
      </Route>
    </Switch>
  </div>
</Router>
    </AccordionDetails>
  </Accordion>
</div>)}};

  return (
      <div>
        {companyAccordianArray}
      </div>
  );
};
