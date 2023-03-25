import React, {createContext, useState} from "react";
import "./style.css";
import Child from './Child';
import Data from './Data';
import AllUsers from './pages/AllUsers';

export const GlobalContext = createContext();

 const App = ()=> {
  const [color, setColor] = useState('red');

  return (
    <GlobalContext.Provider value={{appColor:color}}>
      <h1>App.js</h1>      
      <Child />
      <Data />
      <AllUsers />
    </GlobalContext.Provider>
  );
}

export default App;