import React, { useState, useEffect } from 'react';
import NavBar from './Components/Navbar.jsx'
import CompanyList from './Components/CompanyListItem.jsx'
import ProgressBar from './Components/ProgressBar/ProgressBar.jsx'
import { context } from './Context/context';


const App = () => {
  const [globalState, setGlobalState] = useState();
  //   {
  //   company: 'Google',
  //   step: 3,
  //   contact: [],
  //   toDo: '',
  //   techStack: '',
  //   notes: ''
  // },
  // { company: 'Netflix',
  //   step: 2,
  //   contact: [],
  //   toDo: '',
  //   techStack: '',
  //   notes: ''
  // },
  // { company: 'Facebook', 
  //   step: 4,
  //   contact: [],
  //   toDo: '',
  //   techStack: '',
  //   notes: ''
  // }
//  ]);
  
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
  }

  console.log('this is the state:', globalState)
  return (
    <div>
      <context.Provider value = { state }>
      <NavBar />
      <CompanyList />
      {/* <ProgressBar /> */}
      </context.Provider>
    </div>
  );
};

export default App;