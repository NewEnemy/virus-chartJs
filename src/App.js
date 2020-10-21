import React , { useState } from 'react';
import './App.css';
import TestGraph from './features/Test/TestComponent'
var data = require('./Data/Data.json')
var oneRecord = data.MasterRecord[0].records

function App() {
  const [oneSample,setSample] = useState(oneRecord)
  const [count,setCount]= useState(0)

  function callback(val){
    
    setSample(data.MasterRecord[count].records)
    setCount(val.target.value)

  }
  return (
    <div className="App" style={{backgroundColor:"white"}}>


      <header className="App-header">


        <TestGraph count={count} id={"chart1"} oneRecord ={oneSample} dataPoint={"wynikDodatni"} label={"Wynik Dodatni"}  barColor={"rgba(155,0,0,0.5)"}></TestGraph>
        <TestGraph count={count} id={"chart2"} oneRecord ={oneSample} dataPoint={"zgony"} label={"Zgony"} barColor={"rgba(0,0,0,0.5)"}></TestGraph>

    <p> {data.MasterRecord[count].Data}
    <input type="range" min="0" max={data.MasterRecord.length-1} onChange={(val)=>{callback(val)}}></input>
    </p>
        
        
      </header>
    </div>
  );
}

export default App;
