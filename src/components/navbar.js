import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
      return (
        <div>

      <ul>
      <li> <Link to="/">00 HOME</Link></li> 
      <li> <Link to="/Destination">01 DESTINATION</Link></li>
      <li> <Link to="/Crew">02 CREW</Link></li> 
      <li> <Link to="/Technology">03 TECHNOLOGY</Link></li> 
      </ul>
        </div>
      )
    }
  }

export default Navbar;