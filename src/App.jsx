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
          <button onClick={() => changeBgColor('bg-danger')} className="btn btn-danger ms-5 rounded-pill border border-dark">Red</button>
          <button onClick={() => changeBgColor('bg-primary')} className="btn btn-primary ms-5 rounded-pill border border-dark">Blue</button>
          <button onClick={() => changeBgColor('bg-warning')} className="btn btn-warning ms-5 rounded-pill border border-dark">Yellow</button>
          <button onClick={() => changeBgColor('bg-success')} className="btn btn-success ms-5 rounded-pill border border-dark">Green</button>
        </div>
      </div>
    </>
  );
}


export default App
