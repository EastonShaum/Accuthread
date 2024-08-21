
import "./nav.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavHashLink } from 'react-router-hash-link';

import logo from "../../assets/accuthread Vector 200-80-png1.2.png";

function NavBar() {
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -200; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }


    return (
        <div>
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
                                <NavHashLink className="nav-link navText quoteLink" to="#QuoteForm" scroll={scrollWithOffset}>Get a Quote</NavHashLink>
                                {/* <Nav.Link className="navText" href="#/AboutUs">About Us</Nav.Link> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
        </div>
    );
}

export default NavBar;
