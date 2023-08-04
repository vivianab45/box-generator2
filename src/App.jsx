
import './App.css';
import ColorForm from './Components/ColorForm';
import BoxDisplay from './Components/BoxDisplay'
import React, { useState } from 'react';

function App() {
  const[boxList, setBoxList]=useState([])

  const receiveNewBox=(newBox)=>{
    setBoxList([...boxList, newBox]);
  }

  return (
    <div className="App">
      <ColorForm onCreateNewBox={receiveNewBox}/>
      <BoxDisplay boxList={boxList}/>

    </div>
  );
}

export default App;
