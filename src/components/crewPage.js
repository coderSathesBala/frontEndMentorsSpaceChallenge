import React from 'react';
import { Typography, Button, Box, Paper } from "@material-ui/core"
import Image from '../images/crew/background-crew-desktop.jpg';
import Ansari from '../images/crew/image-anousheh-ansari.png' 
import Hurley from '../images/crew/image-douglas-hurley.png'
import Shuttleworth from '../images/crew/image-mark-shuttleworth.png'
import Glover from '../images/crew/image-victor-glover.png'

class Crew extends React.Component {

  specialist() {
    return this.setState({
      title: 'Mission Specialist',
      name: 'Mark ShuttleWorth',
      description: 'Meet your crew Mission Specialist Mark Shuttleworth Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
      image: '/static/media/image-mark-shuttleworth.fc30f35b05fc0bc4ee47.png'
    })
  }

  commander() {
    return this.setState({
      title: 'Commander',
      name: 'Douglas Hurley',
      description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
      image: '/static/media/image-douglas-hurley.7540fbb61923064f065e.png'
    })
  }

  pilot() {
    return this.setState({
      title: 'Pilot',
      name: 'Victor Glover',
      description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
      image: '/static/media/image-victor-glover.8a9a5424588b73ec61c2.png'
    })
  }

  engineer() {
    return this.setState({
      title: 'Flight Engineer',
      name: 'Anousheh Ansari',
      description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
      image: '/static/media/image-anousheh-ansari.2d647128496ddc638acd.png'
    })
  }

  state = {
    title: 'Commander',
    name: 'Douglas Hurley',
    description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    image: '/static/media/image-douglas-hurley.7540fbb61923064f065e.png'
  }

    render() {
      return (
        <Box  style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5"
        }}>
        <Typography variant='h1'>02 Meet Your Crew</Typography >
        <Typography variant='h1'>{this.state.title}</Typography >
        <Typography variant='h1'>{this.state.name}</Typography >
        <Typography>{this.state.description}</Typography >
        <Button variant="text" onClick={this.specialist.bind(this)}>Mission Specialist</Button>
        <Button variant="text" onClick={this.commander.bind(this)}>Commander</Button>
        <Button variant="text" onClick={this.pilot.bind(this)}>Pilot</Button>
        <Button variant="text" onClick={this.engineer.bind(this)}>Flight Engineer</Button>
        <Paper variant="outlined"><img src={this.state.image}/></Paper>
      </Box>      
      )
    }
  }

export default Crew;