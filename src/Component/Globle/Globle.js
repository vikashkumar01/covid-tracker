import React, { useState, useEffect } from 'react';
import './global.css'
import CountryWiseCase from '../CountryWiseCase/CountryWiseCase';


const Globle = () => {

  const [data, setDate] = useState("")

  const getCovidData = async () => {
    const res = await fetch('https://disease.sh/v3/covid-19/all');
    const actualData = await res.json();
    setDate(actualData)
  }

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <div className="container1">
      
        <h1 ><span >GLOBLE</span> COVID-19 DASHBOARD</h1>
      
      <div className="containerdetails">
      <div style={{backgroundColor:"red",padding:'10px',color:'white',textAlign:'center'}}>
        <div >
          <h2>Total Globle Cases</h2>
        </div>
        <div >
          <h4 >{data.cases}</h4>
        </div>
      </div>

      <div style={{backgroundColor:"blue",padding:'10px',color:'white',textAlign:'center'}} >
        <div >
          <h2>Total Active Cases</h2>
        </div>
        <div >
          <h4 >{data.active}</h4>
        </div>
      </div>

      <div style={{backgroundColor:"coral",padding:'10px',color:'white',textAlign:'center'}} >
        <div >
          <h2>Total Death Cases</h2>
        </div>
        <div >
          <h4 >{data.deaths}</h4>
        </div>
      </div>

      <div style={{backgroundColor:"green",padding:'10px',color:'white',textAlign:'center'}}>
        <div>
          <h2>Total Recover Cases</h2>
        </div>
        <div>
          <h4>{data.recovered}</h4>
        </div>
      </div>
    </div>
    
    </div>
    

  );
}

export default Globle;
