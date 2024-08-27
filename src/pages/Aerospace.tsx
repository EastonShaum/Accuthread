import "./pages.css";

import { HashLink } from 'react-router-hash-link';


import airplaneengine from "../assets/airplaneengine.jpeg";
import overheadairplane from "../assets/overheadairplane.jpg";

function Aerospace() {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -200;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }
  console.log(window.location.href)
  return (
    <div className="container align-center">
      <div className="row justify-content-md-center">
        <div id="mainContentRow" className="row justify-content-md-center align-items-center">
          <div className="col-md-6 imgRow rcorners1">
            <img className="img-fluid " src={airplaneengine}></img>
          </div>
          <div className="col-md-6 centerV">
            <h2>Our team of expert machinists and engineers have been involved in designing, manufacturing, and repairing mission-critical ball screw components for the aviation industry for over 30 years.</h2>
          </div>
        </div>
        <div id="mainContentRow" className="row justify-content-md-center align-items-center">
          <div className="col-md-6 centerV">
            <h2>Committed to excellence, we adhere to AS9100 and ITAR standards, ensuring the highest quality and reliability in our products.</h2>
          </div>
          <div className="col-md-6 imgRow rcorners1">
            <img className="img-fluid " src={overheadairplane}></img>
          </div>
        </div>
        <div id="mainContentRow" className="row justify-content-md-center align-items-center">
          <div className="col-md-3 centerV">
            <HashLink className="nav-link navText quoteLink border border-black p-3" to="/Home#QuoteForm" scroll={scrollWithOffset}>Get a Quote!</HashLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aerospace;
