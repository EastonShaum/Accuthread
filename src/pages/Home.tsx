import "./pages.css";

import Carousel  from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


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
                            <h2>Where precision meets innovation. With over 35 years of combined experience in Ball Screw design and manufacturing, our team stands at the forefront of the industry, bringing unparalleled expertise and dedication to every project.</h2>
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
                    <p>Quality is paramount, but we understand that speed and reliability are equally crucial. By combining superior craftsmanship with rapid turnaround times, Accuthread stands as a trusted partner for all your ball screw needs. Whether you're working on a complex engineering project or require standard components, you can count on us for precision, speed, and reliability.</p>
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
            <div className="row justify-content-md-center formText">
                <div className="col-7 formTitle">
                    <h2>Repair Request</h2>
                </div>
                <div className="col-7 centerV">
                    <Form>
                        <Form.Group>
                            <Form.Label className="mb-3 " controlId="formBasicContactName">Contact Name</Form.Label>
                            <Form.Control type="text" placeholder="Contact Name"></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="mb-3 " controlId="formBasicCompanyName">Company Name</Form.Label>
                            <Form.Control type="text" placeholder="Company Name"></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="mb-3 " controlId="formBasicEmail">Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Email Address"></Form.Control>
                            <Form.Text className="text-muted">We will never share your email with anyone else.</Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="mb-3 " controlId="formBasicPhone">Phone</Form.Label>
                            <Form.Control type="phone" placeholder="Phone"></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>File upload</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check this box if you would like expedited services at an additional rate" />
                        </Form.Group>

                        <Button type="submit">Submit</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default HomePage;