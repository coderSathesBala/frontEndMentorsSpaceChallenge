import React from 'react';
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
    render() {
      return (
        <div>

      <ul>
        <li>00 HOME</li>
        <li>01 DESTINATION</li>
        <li>02 CREW</li>
        <li>03 TECHNOLOGY</li>
      </ul>

<NavLink to="/" >
    Home
</NavLink>
<NavLink to="/about" >
    About
</NavLink>
<NavLink to="/contact" >
    Contact
</NavLink>
<NavLink to="/signin" >
    Sign In
</NavLink>
        </div>
      )
    }
  }

export default Navbar;