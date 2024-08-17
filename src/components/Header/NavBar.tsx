
import "./nav.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from "../../assets/accuthread Vector 200-80-png1.2.png";

function NavBar() {
    return (
        <div>
            {/* <nav id="nav" className="nav-div nav-full">
                <div className="container text-center">
                    <div className="row justify-content-around align-items-center">
                        <div className="col-1">
                            <Link to="/Home">
                                <img className="img-fluid" src={logo}></img>
                            </Link>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-2">
                            <Link to="/Aerospace">Aerospace</Link>
                        </div>
                        <div className="col-2">
                            <Link to="/Commercial">Commercial</Link>
                        </div>
                        <div className="col-2">
                            <Link to="/Military">Military</Link>
                        </div>
                        <div className="col-2">
                            <Link to="/Engineering">Engineering</Link>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-1">
                            <Link to="/AboutUs">AboutUs</Link>
                        </div>
                    </div>
                </div>
            </nav> */}
            <nav>
                <Navbar fixed="top" collapseOnSelect key={'md'} expand={'md'} className="bg-body mb-0">
                    <Container fluid>
                    <Navbar.Toggle aria-controls={`basic-navbar-nav`} />
                        <Nav.Link href="#/Home">
                            <img className="img-fluid nav-img" src={logo}></img>
                            {/* <div>AccuThread</div> */}
                        </Nav.Link>
                        
                        <Navbar.Collapse id={`basic-navbar-nav`}>
                            <Nav variant="underline" className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link className="navText" href="#/Home">Home</Nav.Link>
                                <Nav.Link className="navText" href="#/Aerospace">Aerospace</Nav.Link>
                                <Nav.Link className="navText" href="#/Commercial">Commercial</Nav.Link>
                                <Nav.Link className="navText" href="#/Military">Military</Nav.Link>
                                <Nav.Link className="navText" href="#/Engineering">Engineering</Nav.Link>
                                <Nav.Link className="navText" href="#/AboutUs">About Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>

        </div>
    );
}

export default NavBar;
