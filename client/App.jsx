import React, { Component, useState } from 'react';
import NavBar from './Components/Navbar.jsx'
import { context } from './Context/context';


const App = () => {
  const [globalState, setGlobalState] = useState();
  
  // useEffect(() => {
  //   // fetch

  //   //-->
  //   // setGlobalState(whatever we get back)
  // })

  const state = {
    globalState,
    setGlobalState
  }

  return (
    <div>
      <context.Provider value = { state }>
      <NavBar />
      </context.Provider>
    </div>
  );
};

export default App;