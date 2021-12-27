import React from 'react';
import { Typography, Box} from '@material-ui/core'
import Image from '../images/homeImages/background-home-desktop.jpg'

function Landing() {
      return (
      <Box  style={{
            backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
            height: "100vh",
            color: "#f5f5f5"
        }}>
        <Typography variant="h2">SO, YOU WANT TO TRAVEL TO </Typography>
        <Typography variant="h2">SPACE</Typography>
        <Typography>Let's face it: if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back,
          and relax because we'll give you a truly out of this world experience!
        </Typography>
      </Box>
        )
}

export default Landing;