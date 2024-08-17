import './App.css'


import { Routes, Route, Outlet, useLocation } from "react-router-dom";

import NavBar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';

import NoMatch from './pages/error404';
import HomePage from './pages/Home';
import AboutUs from './pages/AboutUs';
import Aerospace from './pages/Aerospace';
import Commercial from './pages/Commercial';
import ContactUs from './pages/ContactUs';
import Engineering from './pages/Engineering';
import Industrial from './pages/Industrial';
import Military from './pages/Military';
import PlaceHolder from './pages/PlaceHolder';


function App() {
  const location = useLocation();

  return (
    <>
      <div>
        <div style={{}}>
        {location.pathname === '/' ? <div></div> : <NavBar/> } 
             
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PlaceHolder />}></Route>
            <Route path="/Home" element={<HomePage />}></Route>
            <Route path="/AboutUs" element={<AboutUs />}></Route>
            <Route path="/Aerospace" element={<Aerospace />}></Route>
            <Route path="/Commercial" element={<Commercial />}></Route>
            <Route path="/ContactUs" element={<ContactUs />}></Route>
            <Route path="/Engineering" element={<Engineering />}></Route>
            <Route path="/Industrial" element={<Industrial />}></Route>
            <Route path="/Military" element={<Military />}></Route>
            <Route path="*" element={<NoMatch/>}></Route>       
          </Route>
        </Routes>

        {location.pathname === '/' ? <div></div> : <Footer/> }
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
