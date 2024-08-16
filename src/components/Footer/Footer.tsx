import { Link } from "react-router-dom";

import "./footer.css"

function Footer () {
    return (
        <div id="footer" className="container">
            <div className="row justify-content-md-center">
                {/* <div className="col-md-2">
                    <Link id="footerLink" to='#formDiv'><a href="formDiv">Get a quote</a></Link>
                    <a href="formDiv">Get a quote</a>
                </div> */}
                <div className="col-md-2">
                    <Link id="footerLink" to="/AboutUs">AboutUs</Link>
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
                    2828 Diesel Park DrSaginaw, MI 48601, United States
                    </h5>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5>
                    989-498-6707
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Footer;