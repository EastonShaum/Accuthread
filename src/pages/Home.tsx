import "./pages.css";

import BallScrewimg from "../assets/ball-screw-stock.jpg"

function HomePage () {
    return(
        <div className="container text-center">
            <div id="rcorners1">
                <div className="rcornersImg">
                    <img className="img-fluid rcornersImg" src={BallScrewimg}></img>
                </div>                
            </div>
            <div className="row">
                <div className="col">
                    Column 1
                </div>
                <div className="col">
                    Column 2
                </div>
                <div className="col">
                    Column 3
                </div>
            </div>
        </div>
    );
}

export default HomePage;