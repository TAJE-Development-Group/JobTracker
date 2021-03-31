import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TechStack from './TechStack.jsx'
import ProgressBar from './ProgressBar/ProgressBar.jsx'
import { context } from '../Context/context.js'

  // dummy functions to be deleted

  function Contacts() {
    return (
      <div>
        <h2>our list of contacts</h2>
        <h2>name</h2>
        <h2>phone</h2>
        <h2>email</h2>
        <h2>linkedin</h2>
        <h2>etc</h2>
      </div>
    );
  }
  
  // function TechStack() {
  //   return (
  //     <div>
  //       <h2>tech stack list</h2>
  //       <h2>- react</h2>
  //       <h2>- react</h2>
  //       <h2>- react</h2>
  //       <h2>- react</h2>
  //       <h2>- react</h2>
  //     </div>
  //   );
  // }
  
function Notes() {
  return (
        <div>
        <h2>Notes</h2>
        <h2>- note </h2>
        <h2>- note</h2>
        <h2>- note</h2>
        <h2>- to do</h2>
        <h2>- to do</h2>
        <h2>- to do</h2>
        </div>
  );
}

function ToDo() {
    return (
      <div>
        <h2>to do list</h2>
        <h2>- to do</h2>
        <h2>- to do</h2>
        <h2>- to do</h2>
        <h2>- to do</h2>
        <h2>- to do</h2>
        <h2>- to do</h2>
      </div>
    );
}

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

// const { globalState } = useContext(context)
// const companyAccordianArray = []
// for(let i = 0; i < globalState.length; i++){
//   companyAccordianArray.push(
//   <div className={classes.root}>
//     <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
//       <AccordionSummary
//         expandIcon={<ExpandMoreIcon />}
//         aria-controls="expandIcon"
//         id="panel1bh-header"
//       >
//           {/* Conditionally render company name */}
//         <div>
//           {/* <Typography className={classes.heading}>Company Name</Typography> */}
//           <h2>COMPANY NAME</h2>
//         </div>
//         {/* progress bar */}
//         <div style={{width: '100%'}}>
//           <ProgressBar index={i}/>
//         </div>
//         {/* <Typography className={classes.secondaryHeading}>Location of Progress Bar</Typography> */}
//         {/* <ExpandMoreIcon /> */}
//       </AccordionSummary>

//       <AccordionDetails>
//       <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/contacts">Contacts</Link>
//         </li>
//         <li>
//           <Link to="/techStack">Tech Stack</Link>
//         </li>
//         <li>
//           <Link to="/notes">Notes</Link>
//         </li>
//         <li>
//           <Link to="/toDo">To-Do</Link>
//         </li>
//       </ul>

//       <hr />

//       <Switch>
//         <Route path="/contacts">
//           <Contacts />
//         </Route>
//         <Route path="/techStack">
//           <TechStack />
//         </Route>
//         <Route path="/notes">
//           <Notes />
//         </Route>
//         <Route path="/toDo">
//           <ToDo />
//         </Route>
//       </Switch>
//     </div>
//   </Router>
//       </AccordionDetails>
//     </Accordion>
//   </div>)
// }

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
      <div className={classes.root}>
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="expandIcon"
        id="panel1bh-header"
      >
          {/* Conditionally render company name */}
        <div>
          {/* <Typography className={classes.heading}>Company Name</Typography> */}
          <h2>COMPANY NAME</h2>
        </div>
        {/* progress bar */}
        <div style={{width: '100%'}}>
          <ProgressBar />
        </div>
        {/* <Typography className={classes.secondaryHeading}>Location of Progress Bar</Typography> */}
        {/* <ExpandMoreIcon /> */}
      </AccordionSummary>

      <AccordionDetails>
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
          <Link to="/toDo">To-Do</Link>
        </li>
      </ul>

      <hr />

      <Switch>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/techStack">
          <TechStack />
        </Route>
        <Route path="/notes">
          <Notes />
        </Route>
        <Route path="/toDo">
          <ToDo />
        </Route>
      </Switch>
    </div>
  </Router>
      </AccordionDetails>
    </Accordion>
  </div>
  );
};


