import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
   
  } from 'reactstrap';



const Header = (props) => {

const [isOpen,setisOpen] = useState(false);

const toggle = () => setisOpen(!isOpen);

return(
    <Navbar fixed="top" id="header" color="light" light expand="md">
        <NavbarBrand href="/">Movie App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
    
                    <NavItem>
                        <NavLink activeClassName="active" className="nav-link" to="/home">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/favorie">Favoris</NavLink>
                    </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
)

}

export default Header