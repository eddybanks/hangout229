import React, { useState }  from 'react'
import logo from '../../images/h229_img@2x.png'
import styles from '../../stylesheets/modules/Navigation.module.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

const NavigationBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
        <div className={styles.NavigationDiv}>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/"><img src={logo} alt="images" className={styles.LogoNav} /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/"><h4>Hi, {props.user.name}!</h4></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/"><h4>hangouts</h4></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/"><h4>games</h4></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/"><h4>log out</h4></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
  )
}

export default NavigationBar 