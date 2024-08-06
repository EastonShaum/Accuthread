import "./pages.css";

import Carousel  from "react-bootstrap/Carousel";


import BallScrewimg from "../assets/ball-screw-stock.jpg";
import ScrewCloseUp from "../assets/screwcloseup.jpeg";
import ScrewWithLeadShift from "../assets/screwithleadshift.jpeg";
import ScrewMachineing from "../assets/screwmachineing.jpeg";
import ScrewOnDisplay from "../assets/screwondisplay.jpeg";
import ScrewBallDark from "../assets/screwballdark.jpeg"

function HomePage () {
    return(
        <div className="container text-center">
            <div id="rcorners1" className="container">
                <div style={{position: "relative"}}>
                    <Carousel>            
                        <Carousel.Item>
                            <img src={ScrewMachineing} style={{opacity: "0.7"}} className="d-block w-100" ></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={ScrewCloseUp} style={{opacity: "0.7"}} className="d-block w-100" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={ScrewWithLeadShift} style={{opacity: "0.7"}} className="d-block w-100" ></img>
                        </Carousel.Item>
                                               
                    </Carousel>
                    <div className="center">
                        <div style={{width: "75%", margin: "auto"}}>
                            <h1>Welcome to Accuthread</h1>
                            <h2>Where precision meets innovation. With over 100 years of combined experience in Ball Screw design and manufacturing, our team stands at the forefront of the industry, bringing unparalleled expertise and dedication to every project.</h2>
                        </div>
                    </div> 
                </div>             
            </div>
            <div id="mainContentRow" className="row justify-content-md-center">
                <div className="col-5 imgRow">
                    <img className="img-fluid" src={BallScrewimg}></img>
                </div>
                <div className="col-5 centerV">
                    <h2>Our Legacy</h2>
                    <p>Our journey began with the legacy of the Saginaw Ball Screw Company. Specializing in the design and manufacture of precision ground ball screws, we are committed to delivering products that exceed the highest standards of accuracy and performance.</p>
                </div>               
            </div>
            <div id="mainContentRow" className="row justify-content-md-center">
               <div className="col-5 centerV">
                    <h2>Trusted by Customers</h2>
                    <p>From our state-of-the-art facility in the USA, we proudly serve a diverse and extensive customer base spanning the globe. Our commitment to quality and customer satisfaction has earned us a reputation for excellence in the industry.</p>
                </div>
                <div className="col-5 imgRow">
                    <img className="img-fluid " src={ScrewOnDisplay}></img>
                </div>               
            </div>
            <div id="mainContentRow" className="row justify-content-md-center">
                <div className="col-5 imgRow">
                    <img className="img-fluid " src={ScrewBallDark}></img>
                </div> 
               <div className="col-5 centerV">
                    <h2>Precise Machines, Precise Results</h2>
                    <br/>
                    <p>At Accuthread, we blend time-honored craftsmanship with cutting-edge technology to provide solutions that meet the evolving needs of our clients. Discover how our passion for precision can help drive your success.</p>
                </div>                              
            </div>
            {/* <div id="mainContentRow" className="row justify-content-md-center">
                <input></input>
            </div> */}
        </div>
    );
}

export default HomePage;