import React from 'react'
import {Link} from 'react-router-dom';
import {Navbar,Nav,NavbarBrand,NavItem,Image} from 'react-bootstrap';



function Navigation() {
    return(
        <Navbar collapseOnSelect expand="lg" >
        <NavbarBrand>
            <Link to="/"><Image src="/image/CULinc.jpg" width="30px"/><Image src="/image/CULinc Cropped.jpg" width="200px"/></Link>
        </NavbarBrand>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end" justify="true"  >
            <Nav >
                <NavItem className="nav-items" as={Link} to="/about">About</NavItem>
                <NavItem className="nav-items" as={Link} to="/artists">Artists</NavItem>
                <NavItem className="nav-items" as={Link} to="/music">Music</NavItem>
                <NavItem className="nav-items" as={Link} to="/videos">Videos</NavItem>
                <NavItem className="nav-items" as={Link} to="/contact">Contact Us</NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default Navigation