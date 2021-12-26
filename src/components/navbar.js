import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


class Navbar extends React.Component {
  render() {
    return (
     <div>
      <AppBar>
        <Toolbar>
          <Typography> <Link to="/">00 HOME</Link> </Typography> 
          <Typography> <Link to="/Destination">01 DESTINATION</Link> </Typography>
          <Typography> <Link to="/Crew">02 CREW</Link> </Typography> 
          <Typography> <Link to="/Technology">03 TECHNOLOGY</Link> </Typography>
        </Toolbar>
      </AppBar>
    </div>
      )
    }
  }

export default Navbar;