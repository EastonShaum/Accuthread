import { Link } from "react-router-dom";

import "./footer.css"

function Footer () {
    return (
        <div id="footer" className="container">
            <div className="row justify-content-md-center">
                <div className="col-2">
                    Get a quote
                </div>
                <div className="col-2">
                    <Link to="/AboutUs">AboutUs</Link>
                </div>
                <div className="col-2">
                    Accuthread Ball Screw
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h4>
                    Accuthread Ball Screw
                    </h4>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5>
                    123 Main Street, Beverly Hills, California 90210, United States
                    </h5>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5>
                    +1-800-000-0000
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Footer;