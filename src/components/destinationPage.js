import React from 'react';
import {Typography, Grid, Paper, Box, Button} from '@material-ui/core'
import Image from '../images/destinationImages/background-destination-desktop.jpg';
import Moon from '../images/destinationImages/image-moon.png'
import Titan from '../images/destinationImages/image-titan.png'
import Mars from '../images/destinationImages/image-mars.png'
import Europa from '../images/destinationImages/image-europa.png'

class Destination extends React.Component {

  state = {
    title: 'Moon',
    description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: '384,400 km',
    travel: '3 days',
    image: '/static/media/image-moon.d287d07182de3015952f.png'
  }

  moon() {
    return this.setState({
      title: 'Moon',
      description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: '384,400 km',
      travel: '3 days',
      image: '/static/media/image-moon.d287d07182de3015952f.png'
    })
  }

  titan() {
    return this.setState({
      title: 'Titan',
      description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: '1.6 bil. km',
      travel: '7 years',
      image: '/static/media/image-titan.d4b078f9ce17e686ae99.png'
    })
  }

  mars() {
    return this.setState({
      title: 'Mars',
      description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: '225 mil. km',
      travel: '9 months',
      image: '/static/media/image-mars.1b224c8663251270d79f.png'
    })
  }

  europa() {
    return this.setState({
      title: 'Europa',
      description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.", 
      distance: '628 mil. km',
      travel: '3 years',
      image: '/static/media/image-europa.3e95f7d0a16fe2ebf4c6.png'
    })
  }

    render() {
      return (
      <Box style={{
         display: 'grid',
         gridTemplateColumns: "repeat(2, 1fr)",
         backgroundImage: `url(${Image})`,
         backgroundSize: "cover",
         height: "100vh",
         color: "#f5f5f5",
         padding: '12rem'
       }}>
        <Box>
          <Typography variant="h4">01 Pick Your Destination</Typography>
           <img style={{padding: '5rem'}} src={this.state.image}/>
        </Box>
        <Box>
          <Box style={{paddingTop: '7rem'}}> 
            <Button style={{color: 'white'}} onClick={this.moon.bind(this)}>MOON</Button>
            <Button onClick={this.mars.bind(this)}>MARS</Button>
            <Button onClick={this.europa.bind(this)}>EUROPA</Button>
            <Button onClick={this.titan.bind(this)}>TITAN</Button>
          </Box>
        <Typography variant="h1">{this.state.title}</Typography>
        <Typography style={{paddingTop: '1rem', width: '65%'}}>{this.state.description}</Typography>
            <Box style={{
                          display: 'grid', 
                          gridTemplateColumns: "repeat(2, 1fr)", 
                          paddingTop: "5rem"
                          }}>
              <Typography variant="h7">AVG. DISTANCE</Typography>
              <Typography variant="h7">EST. TRAVEL TIME</Typography>
              <Typography variant="h5">{this.state.distance}</Typography>
              <Typography variant="h5">{this.state.travel}</Typography>
            </Box>
        </Box>
      </Box>
        )
    }
  }

export default Destination;