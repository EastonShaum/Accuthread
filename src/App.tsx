import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { Routes, Route, Outlet, Link } from "react-router-dom";

import NavBar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';

import NoMatch from './pages/error404';
import HomePage from './pages/Home';
import AboutUs from './pages/AboutUs';
import Commercial from './pages/Commercial';
import ContactUs from './pages/ContactUs';
import Engineering from './pages/Engineering';
import Industrial from './pages/Industrial';
import Military from './pages/Military';


function App() {
  return (
    <>
      <div>
        {/* <NavBar/>
      
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/Home" element={<HomePage />}></Route>
            <Route path="/AboutUs" element={<AboutUs />}></Route>
            <Route path="/Commercial" element={<Commercial />}></Route>
            <Route path="/ContactUs" element={<ContactUs />}></Route>
            <Route path="/Engineering" element={<Engineering />}></Route>
            <Route path="/Industrial" element={<Industrial />}></Route>
            <Route path="/Military" element={<Military />}></Route>
            <Route path="*" element={<NoMatch/>}></Route>       
          </Route>
        </Routes>

        <Footer/> */}
        <div style={{margin: "25%"}}>
          <h1>Accuthread Ballscrew Company</h1>
          <br/>
          <h5>A Ballscrew Manufacturing Company with State of the Art Equipment & with over 35 years experience making the highest quality ballscrews in both industrial and aviation spaces. </h5>
          <br/>
          <h3>Website coming soon</h3>
        </div>
      </div>
    </>
  )
}


function Layout() {
  return (
  <div>
    <Outlet />
  </div>
  )
}

export default App
