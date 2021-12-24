import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
        </div>
      )
    }
  }

export default Navbar;