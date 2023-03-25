import React, {createContext, useState} from "react";
import "./style.css";
import Child from './Child';

export const GlobalContext = createContext();

export default function App() {
  const [color, setColor] = useState('red');


  return (
    <GlobalContext.Provider value={{appColor:color}}>
      <h1>App.js</h1>      
      <Child />
    </GlobalContext.Provider>
  );
}
