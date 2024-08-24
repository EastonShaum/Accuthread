import "./pages.css";

import airplaneengine from "../assets/airplaneengine.jpeg";
import overheadairplane from "../assets/overheadairplane.jpg";

function Aerospace() {
  return (
    <div className="container">
      <div id="" className="container rcorners1">
        <div style={{ position: "relative" }}>
          <img src={airplaneengine}></img>
        </div>
      </div>

      <div id="" className="container rcorners1">
        <div style={{ position: "relative" }}>
          <img src={overheadairplane}></img>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aerospace;
