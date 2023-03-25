import React, {useContext} from 'react';
import {GlobalContext} from './App';

const Child = ()=> {
  const {appColor} = useContext(GlobalContext);
  console.log("appColor - ", appColor);
  return(
    <h1 style={{color: appColor}}>Child.js</h1>
  )
}

export default Child;
