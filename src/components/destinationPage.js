import React from 'react';
import {Typography, Grid, Paper, Box} from '@material-ui/core'
import Image from '../images/destinationImages/background-destination-desktop.jpg';

class Destination extends React.Component {

  state = {
    title: 'Moon',
    description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: '384,400 km',
    travel: '3 days'
  }

  moon() {
    return this.setState({
      title: 'Moon',
      description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: '384,400 km',
      travel: '3 days'
    })
  }

  titan() {
    return this.setState({
      title: 'Titan',
      description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: '1.6 bil. km',
      travel: '7 years'
    })
  }

  mars() {
    return this.setState({
      title: 'Mars',
      description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: '225 mil. km',
      travel: '9 months'
    })
  }

  europa() {
    return this.setState({
      title: 'Europa',
      description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.", 
      distance: '628 mil. km',
      travel: '3 years'
    })
  }


    render() {
      return (
        <Box  style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5"
        }}>
        <Typography variant="h1">Pick Your Destination</Typography>;
        <Grid container spacing={4}> 
          <Grid item xs="1" onClick={this.moon.bind(this)}>MOON</Grid>
          <Grid item xs="1" onClick={this.mars.bind(this)}>MARS</Grid>
          <Grid item xs="1" onClick={this.europa.bind(this)}>EUROPA</Grid>
          <Grid item xs="1" onClick={this.titan.bind(this)}>TITAN</Grid>
        </Grid>
        <Typography variant="h2">{this.state.title}</Typography>
        <Typography variant="p">{this.state.description}</Typography>
        <Typography variant="h2">AVG. DISTANCE</Typography>
        <Typography variant="h2">EST. TRAVEL TIME</Typography>
        <Typography variant="h2">{this.state.distance}</Typography>
        <Typography variant="h2">{this.state.travel}</Typography>
      </Box>
        )
    }
  }

export default Destination;