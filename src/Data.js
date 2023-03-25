import React, {useEffect, useState} from 'react';

const Data = ()=> {
  const [apiData, setApiData] = useState([]);

  const data = async()=> {
    const response = await fetch('https://panorbit.in/api/users.json');
    const data = await response.json();
    setApiData(data);
  }

  useEffect(()=>{
    
  },[]);

  console.log("apiData - ", apiData)

  return(
    <h1>Data</h1>
  )
}

export default Data;
