import React from 'react';
import { Typography, Box, Button} from '@material-ui/core'
import Image from '../images/homeImages/background-home-desktop.jpg'

function Landing() {
      return (
      <Box  display="grid" direction="column" gridTemplateColumns="repeat(3, 1fr)" 
            sx={{
            backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
            height: "100vh",
            color: "#f5f5f5"
        }}>
        
        <Box style={{paddingTop: '21rem', paddingLeft: '12rem'}}>
        <Typography variant="h2" style={{ fontSize: '1.5rem'}}>SO, YOU WANT TO TRAVEL TO </Typography>
        <Typography variant="h1" style={{ fontSize: '10rem', paddingTop: '1rem' }}>SPACE</Typography>
        <Typography style={{paddingTop: '1.5rem'}}>Let's face it: if you want to go to space, you might as well</Typography> 
        <Typography>genuinely go to outer space and not hover not hover kind of on</Typography> 
        <Typography>the edge of it. Well sit back, and relax because we'll give you</Typography> 
        <Typography>a truly out of this world experience!</Typography>
        </Box>
        <Box></Box>  
          <Box style={{paddingTop: '27rem'}}><Button 
                  style={{
                    color: 'black', 
                    fontSize: '1.4rem', 
                    backgroundColor: "white",
                    padding: '7.5rem 6rem',
                    borderRadius: '50%'
                    }}> Explore</Button></Box>
      </Box>
        )
}

export default Landing;