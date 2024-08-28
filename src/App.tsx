import './App.css'


import { Routes, Route, Outlet } from "react-router-dom";

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
// import PlaceHolder from './pages/PlaceHolder';
import ThankYou from './pages/ThankYou';


function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<PlaceHolder />}></Route> */}
          <Route index element={<HomePage />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/Aerospace" element={<Aerospace />}></Route>
          <Route path="/Commercial" element={<Commercial />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/Engineering" element={<Engineering />}></Route>
          <Route path="/Industrial" element={<Industrial />}></Route>
          <Route path="/Military" element={<Military />}></Route>
          <Route path="/ThankYou" element={<ThankYou />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Route>
      </Routes>

      <Footer />
    </>
  )
}


function Layout() {
  return (

    <Outlet />

  )
}

export default App
