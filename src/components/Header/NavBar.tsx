import { Routes, Route, Outlet, Link } from "react-router-dom";


function NavBar () {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-teritory">
                <div className="container-fluid">
                <Link to="/Home">AccuThread</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/Commercial">Commercial</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Industrial">Industrial</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Military">Military</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Engineering">Engineering</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/AboutUs">AboutUs</Link>
                    </li>
                    
                </ul>
      
                    </div>
                </div>
            </nav> 
        </div>
    )
}



export default NavBar;