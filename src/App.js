// App.js
import React from 'react';
//import './App.css';
import Mindmap from './Mindmap';
import image from './Car.png'
//import Mindmap1 from './Mindmap1';
function App() {
  return (
    <div className="app-container bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex flex-col text-center" >
      <h1 className="text-3xl font-bold mb-4 bg-sky-950 text-white p-4 flex justify-center items-center">
      <img src={image} alt="Car Icon" className="h-17 w-12 mr-2"/>
        Car Manufacturing Mindmap
      </h1>
      <Mindmap />
    </div>
  );
}

export default App;

