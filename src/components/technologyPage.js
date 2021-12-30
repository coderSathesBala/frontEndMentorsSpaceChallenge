import React from 'react';
import {Typography, Box, Button, Paper} from '@material-ui/core';
import Image from '../images/technologyImages/background-technology-desktop.jpg'
import one from '../images/technologyImages/image-launch-vehicle-portrait.jpg'
import two from '../images/technologyImages/image-space-capsule-portrait.jpg'
import three from '../images/technologyImages/image-spaceport-portrait.jpg'

class Technology extends React.Component {

  state = {
    title: 'LAUNCH VEHICLE',
    description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: '/static/media/image-launch-vehicle-portrait.0c758955a178bdcc3230.jpg'
  }

  one() {
    return this.setState({
      title: 'LAUNCH VEHICLE',
      description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      image: '/static/media/image-launch-vehicle-portrait.0c758955a178bdcc3230.jpg'
    })
  }

  two() {
    return this.setState({
      title: 'SPACEPORT',
      description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      image: '/static/media/image-space-capsule-portrait.dd0ac138afef98c1666a.jpg'
    })
  }

  three() {
    return this.setState({
      title: 'SPACE CAPSULE',
      description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      image: '/static/media/image-spaceport-portrait.85523db5de13057f36ea.jpg'
    })
  }

    render() {
      return (
        <Box  style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5",
          paddingLeft: '15rem',
          paddingTop: '8rem'
        }}>
        <Typography variant="h4">03 SPACE LAUNCH 101</Typography>
          <Box style={{          
                display: 'grid',
                gridTemplateColumns: '0.2fr 6fr 2fr',
                justifyContent: 'flex-end',
                paddingTop: '5rem'}}>
            <Box style={{paddingTop: '4rem', paddingRight: '5rem'}}>
            <Button style={{backgroundColor: "#21b6ae"}} onClick={this.one.bind(this)}>1</Button>
            <Button style={{backgroundColor: "#21b6ae"}} onClick={this.two.bind(this)}>2</Button>
            <Button style={{backgroundColor: "#21b6ae"}} onClick={this.three.bind(this)}>3</Button>
            </Box>
            <Box style={{paddingTop: '4rem', width: '60%'}}>
            <Typography variant="h9">THE TERMINOLOGY...</Typography>
            <Typography variant="h2">{this.state.title}</Typography>
            <Typography variant="h7">{this.state.description}</Typography>
            </Box>
            <Box><img src={this.state.image} style={{alignItems: 'end'}}/></Box>
          </Box>
      </Box>
      )
    }
  }

export default Technology;