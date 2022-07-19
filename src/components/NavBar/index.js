import { Nav } from "react-bootstrap";

const NavBar = () => {
    return (
        <div className="intro-porfolio-nav col-12">
            <Nav className="nav intro-porfolio-nav-item">
                <Nav.Link 
                    className="nav-link" 
                    href="#about"
                >
                    About
                </Nav.Link>

                <Nav.Link 
                    className="nav-link" 
                    href="#resume"
                >
                    Resume
                </Nav.Link>

                <Nav.Link 
                    className="nav-link" 
                    href="#project-section"
                >
                    Projects
                </Nav.Link>

                <Nav.Link 
                    className="nav-link" 
                    href="#contact"
                >
                    Contact
                </Nav.Link>
            </Nav>
            <div className="intro-porfolio-nav-menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
    )
}

export default NavBar;