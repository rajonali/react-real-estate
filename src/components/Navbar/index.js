import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';


const Navbar = ({ toggle }) => {
  return (
      <Nav>
        <NavLink to='/'>tinybnb</NavLink>

        <NavIcon onClick={toggle}>
        <div>  <p>Menu</p></div>
          <Bars />
        </NavIcon>
      </Nav>
  );
};

export default Navbar;
