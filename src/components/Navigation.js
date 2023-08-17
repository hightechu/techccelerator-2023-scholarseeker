import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from './lmksolutionslogo.png'; // gives image path

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink  eventKey="1" as={Link} to="/"><img className=" mylogo" src={logo} alt="logo" /></NavLink>
                    <NavLink  eventKey="2" as={Link} to="/about">About</NavLink>
                    <NavLink  eventKey="3" as={Link} to="/scholarshippage">Scholarship</NavLink>
                    <NavLink  eventKey="3" as={Link} to="/savedscholarshippage">SavedScholarship</NavLink>
                    <NavLink  eventKey="4" as={Link} to="/applicationpage">Applications</NavLink>
                </Nav>
            </Navbar.Collapse>     
        </Navbar>
    );
}
 
export default Navigation;