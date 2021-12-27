import React from 'react';
import { Typography, Box, Button} from '@material-ui/core'
import Image from '../images/homeImages/background-home-desktop.jpg'

function Landing() {
      return (
      <Box  style={{
            backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
            height: "100vh",
            color: "#f5f5f5"
        }}>
        <Typography variant="h2" style={{ fontSize: '1.5rem'}}>SO, YOU WANT TO TRAVEL TO </Typography>
        <Typography variant="h1" style={{ fontSize: '10rem' }}>SPACE</Typography>
        <Typography>Let's face it: if you want to go to space, you might as well</Typography> 
        <Typography>genuinely go to outer space and not hover not hover kind of on</Typography> 
        <Typography>the edge of it. Well sit back, and relax because we'll give you</Typography> 
        <Typography>a truly out of this world experience!</Typography>
        <Button style={{color: 'white', fontSize: '1rem' }}> Explore</Button>
      </Box>
        )
}

export default Landing;