import { useState, useEffect } from 'react';
import Scene from './Components/Scene';
import Prompt from './Components/Chat/Prompt';
import './App.css'
import {Route, Routes} from 'react-router'
import nav from './Components/Shared/nav'

const App = () => {
  

  return (
    <>
    <nav />
      <Routes>
        <Route path="/" element={<Prompt />} />
        <Route path="/lab" element={<Scene />} />
      </Routes>
      
    </>

  )};
export default App
