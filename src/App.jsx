import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [bgColor, setBgColor] = useState('bg-secondary');

  const changeBgColor = (color) => {
    setBgColor(color);
    
  };

  return (
    <>
      <div className={`fullscreen ${bgColor}`}>
        <h1 className="text-center">Background Color</h1>
        <div className="text-center">
          <button onClick={() => changeBgColor('bg-danger')} className="btn btn-secondary ms-5">Red</button>
          <button onClick={() => changeBgColor('bg-primary')} className="btn btn-secondary ms-5">Blue</button>
          <button onClick={() => changeBgColor('bg-warning')} className="btn btn-secondary ms-5">Yellow</button>
          <button onClick={() => changeBgColor('bg-success')} className="btn btn-secondary ms-5">Green</button>
        </div>
      </div>
    </>
  );
}


export default App
