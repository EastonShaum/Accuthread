import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Routes, Route, Outlet, Link } from "react-router-dom";

import NavBar from './components/Header/NavBar';

import NoMatch from './pages/error404';

function App() {
  return (
    <>
      <div style={{"width" : "100%"}}>
        <NavBar></NavBar>
      <h1>Title test</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
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
      <Link to="/nothing-here">Nothing Here</Link>
    </nav>
  </div>
  )
}

export default App
