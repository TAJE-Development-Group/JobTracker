import React, { useState, useEffect } from 'react';
import NavBar from './Components/Navbar.jsx'
import CompanyList from './Components/CompanyListItem.jsx'
import ProgressBar from './Components/ProgressBar/ProgressBar.jsx'
import { context } from './Context/context';


const App = () => {
  const [globalState, setGlobalState] = useState();
  
  useEffect(() => {
    fetch('/api/jobs')
      .then(data => data.json())
      .then(data => {
        // console.log('data',data);
        if(data!==globalState){
          setGlobalState(data)
        }})
        // console.log('globalstate', globalState)})
      // .then(data => console.log('responded', globalState))
      .catch(err => console.log(err))
      // console.log('globalState:', globalState)
  }, []);

  const state = {
    globalState,
    setGlobalState
  };

  console.log('this is the state:', globalState)
  return (
    <div>
      <NavBar props={state}/>
      <CompanyList props = { state }/>
      {/* <ProgressBar /> */}
    </div>
  );
};

export default App;