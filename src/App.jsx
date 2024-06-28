import React, { useState } from 'react';
import './App.css';
import Button from './components/Button.jsx'; // Ensure you have a Button component defined in Button.js

function App() {
  const [bgColor, setBgColor] = useState('');
  const handleClick=(color)=>{
    setBgColor(color);
  }
  return (
    <div className='main-container' style={{ backgroundColor: bgColor }}>
      <div className='button-container'>
        <Button className='red' onClick={()=>handleClick('red')} />
        <Button className='yellow' onClick={()=>handleClick('yellow')}/>
        <Button className='black' onClick={()=>handleClick('black')}/>
        <Button className='purple' onClick={()=>handleClick('purple')}/>
        <Button className='green' onClick={()=>handleClick('green')}/>
        <Button className='blue' onClick={()=>handleClick('blue')}/>
        <Button className='orange' onClick={()=>handleClick('orange')}/>
      </div>
    </div>
  )
}

export default App;
