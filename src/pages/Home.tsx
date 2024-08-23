import "./pages.css";

import Carousel from "react-bootstrap/Carousel";

import RepairRequestForm from "../components/Forms/BasicForm";

import BallScrewimg from "../assets/ball-screw-stock.jpg";
import ScrewCloseUp from "../assets/screwcloseup.jpeg";
import ScrewWithLeadShift from "../assets/screwithleadshift.jpeg";
import ScrewMachineing from "../assets/screwmachineing.jpeg";
import ScrewOnDisplay from "../assets/screwondisplay.jpeg";
import ScrewBallDark from "../assets/screwballdark.jpeg"

function HomePage() {
    return (
        <>
        {/* Carousel for mobile */}
            <div id="fullwidthcarousel" >
                <div style={{ position: "relative" }}>
                    <Carousel>
                        <Carousel.Item>
                            <img src={ScrewMachineing} style={{ opacity: "0.5" }} className="d-block w-100" ></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={ScrewCloseUp} style={{ opacity: "0.5" }} className="d-block w-100" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={ScrewWithLeadShift} style={{ opacity: "0.5" }} className="d-block w-100" ></img>
                        </Carousel.Item>

                    </Carousel>
                    <div className="center">
                        <div id="carouselText" >
                            <h1>Welcome to Accuthread</h1>
                            <h2>Where precision meets innovation. With over 35 years of combined experience in Ball Screw design and manufacturing, our team stands at the forefront of the industry, bringing unparalleled expertise and dedication to every project.</h2>
                        </div>
                    </div>
                </div>
            </div>
        {/* Carousel for Webpage */}
            <div className="container text-center">
                <div id="WebCarousel" className="container rcorners1">
                    <div style={{ position: "relative" }}>
                        <Carousel>
                            <Carousel.Item>
                                <img src={ScrewMachineing} style={{ opacity: "0.5" }} className="d-block w-100" ></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={ScrewCloseUp} style={{ opacity: "0.5" }} className="d-block w-100" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={ScrewWithLeadShift} style={{ opacity: "0.5" }} className="d-block w-100" ></img>
                            </Carousel.Item>

                        </Carousel>
                        <div className="center">
                            <div id="carouselText" >
                                <h1>Welcome to Accuthread</h1>
                                <h2>Where precision meets innovation. </h2>
                                <h3>With over 35 years of combined experience in Ball Screw design and manufacturing, our team stands at the forefront of the industry, bringing unparalleled expertise and dedication to every project.</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="mainContentRow" className="row justify-content-md-center align-items-center">
                    <div className="col-md-6 imgRow">
                        <img className="img-fluid" src={BallScrewimg}></img>
                    </div>
                    <div className="col-md-6 centerV">
                        <h2>Our Legacy</h2>
                        <p>Our journey began with the legacy of the Saginaw Ball Screw Company. Specializing in the design and manufacture of precision ground ball screws, we are committed to delivering products that exceed the highest standards of accuracy and performance.</p>
                    </div>
                </div>
                <div id="mainContentRow" className="row justify-content-md-center align-items-center">
                    <div className="col-md-6 imgRow">
                        <img className="img-fluid " src={ScrewOnDisplay}></img>
                    </div>
                    <div className="col-md-6 centerV">
                        <h2>Trusted by Customers</h2>
                        <p>Quality is paramount, but we understand that speed and reliability are equally crucial. By combining superior craftsmanship with rapid turnaround times, Accuthread stands as a trusted partner for all your ball screw needs. Whether you're working on a complex engineering project or require standard components, you can count on us for precision, speed, and reliability.</p>
                    </div>
                </div>
                <div id="mainContentRow" className="row justify-content-md-center align-items-center">
                    <div className="col-md-6 imgRow">
                        <img className="img-fluid " src={ScrewBallDark}></img>
                    </div>
                    <div className="col-md-6 centerV">
                        <h2>Precise Machines, Precise Results</h2>
                        <br />
                        <p>At Accuthread, we blend time-honored craftsmanship with cutting-edge technology to provide solutions that meet the evolving needs of our clients. Discover how our passion for precision can help drive your success.</p>
                    </div>
                </div>
                <div id="QuoteForm">
                    <RepairRequestForm />
                </div>
            </div>
        </>
    );
}

export default HomePage;