import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TechStack from './TechStack.jsx'

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
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

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
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
            {/* Conditionally render company name */}
          <Typography className={classes.heading}>Company Name</Typography>
          {/* progress bar */}
          <Typography className={classes.secondaryHeading}>Location of Progress Bar</Typography>
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

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
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


