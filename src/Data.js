import React, {useEffect, useState} from 'react';

const Data = ()=> {
  const [apiData, setApiData] = useState([]);

  const api = async()=> {
    const response = await fetch('https://panorbit.in/api/users.json');
    const data = await response.json();
    setApiData(data.users);
  }

  useEffect(()=>{
    api();
  },[]);

  //console.log("apiData - ", apiData[2])

  return(
    <h1>Data</h1>
  )
}

export default Data;
