import "./pages.css";

import BallScrewimg from "../assets/ball-screw-stock.jpg"

function HomePage () {
    return(
        <div className="container text-center">
            <div id="rcorners1">
                <div >
                    <img className="img-fluid rcornersImg" src={BallScrewimg}></img>
                </div>                
            </div>
            <div id="mainContentRow" className="row justify-content-md-center">
                <div className="col-4 imgRow">
                    <img className="img-fluid " src={BallScrewimg}></img>
                </div>
                <div className="col-4">
                    <h2>Lorum Ipsum</h2>
                    <h5>Small description</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>               
            </div>
            <div id="mainContentRow" className="row justify-content-md-center">
               <div className="col-4">
                    <h2>Lorum Ipsum</h2>
                    <h5>Small description</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="col-4 imgRow">
                    <img className="img-fluid " src={BallScrewimg}></img>
                </div>               
            </div>
        </div>
    );
}

export default HomePage;