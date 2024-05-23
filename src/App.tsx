import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { Routes, Route, Outlet, Link } from "react-router-dom";

import NavBar from './components/Header/NavBar';

import NoMatch from './pages/error404';
import HomePage from './pages/Home';

function App() {
  return (
    <>
      <div>
        <NavBar></NavBar>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Home" element={<HomePage />}></Route>
          <Route path="*" element={<NoMatch/>}></Route>
          
        </Route>
      </Routes>
      </div>
    </>
  )
}


function Layout() {
  return (
  <div>
    <nav>
      <p>
      This is the content
      </p>
    </nav>
  </div>
  )
}

export default App
