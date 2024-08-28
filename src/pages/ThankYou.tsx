import { Link } from 'react-router-dom';

function ThankYou() {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    return (
        <>
            <div className="container align-center">
                <div className="row justify-content-md-center">
                    <div id="mainContentRow" className="row justify-content-md-center align-items-center">
                        <div className="col-md-6 centerV">
                            <h2>Thank you for submitting your request. <br/> We will be in contact soon.</h2>
                        </div>
                    </div>
                    <div id="mainContentRow" className="row justify-content-md-center align-items-center">
                        <div className="col-md-3 centerV">
                            <Link className="nav-link navText quoteLink border border-black p-3" to="/" >Home</Link>
                        </div>
                    </div>
                    <div style={{height: "275px"}}>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThankYou;