import { Link } from "react-router-dom";

import "./nav.css";


function NavBar () {
    return (
        <div>
            <nav id="nav" className="nav-div">
                <div className="container text-center ">
                    <div className="row justify-content-around ">
                        <div className="col-1">
                            <Link to="/Home">AccuThread</Link>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-1">
                        <Link to="/Commercial">Commercial</Link>
                        </div>
                        <div className="col-1">
                        <Link to="/Industrial">Industrial</Link>
                        </div>
                        <div className="col-1">
                        <Link to="/Military">Military</Link>
                        </div>
                        <div className="col-1">
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