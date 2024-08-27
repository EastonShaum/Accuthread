// import { Link } from "react-router-dom";

import "./footer.css"

function Footer() {
    return (
        <div id="footer" className="container">
            <div className="row justify-content-md-center">
                {/* <div className="col-md-2">
                    <Link id="footerLink" to='#formDiv'><a href="formDiv">Get a quote</a></Link>
                    <a href="formDiv">Get a quote</a>
                </div> */}
                {/* <div className="col-md-2">
                    <Link id="footerLink" to="/AboutUs">About Us</Link>
                </div> */}
            </div>
            <div className="row">
                <div className="col">
                    <h4>
                        Accuthread Ballscrew
                    </h4>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5>
                        <a className="addressLink" href="http://maps.google.com/?q=2828 Diesel Park Dr Saginaw, MI 48601 United States">
                            2828 Diesel Park Dr <br />Saginaw, MI 48601<br /> United States
                        </a>
                    </h5>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5>
                        +1 (989) 498-6707
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Footer;