import { Link } from "react-router-dom";

import "./nav.css";

import logo from "../../assets/accuthread Vector 200-80-png1.2.png";


function NavBar () {
    return (
        <div>
            <nav id="nav" className="nav-div">
                <div className="container text-center">
                    <div className="row justify-content-around align-items-center">
                        <div className="col-1">
                            <Link to="/"><img className="img-fluid" src={logo}></img></Link>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-2">
                        <Link to="/Commercial">Commercial</Link>
                        </div>
                        <div className="col-2">
                        <Link to="/Industrial">Industrial</Link>
                        </div>
                        <div className="col-2">
                        <Link to="/Military">Military</Link>
                        </div>
                        <div className="col-2">
                        <Link to="/Engineering">Engineering</Link>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-1">
                        <Link to="/AboutUs">AboutUs</Link>
                        </div>                
                    </div>
                </div>
            </nav> 
        </div>
    )
}



export default NavBar;