import React from 'react';
import { Typography, Button, Box } from "@material-ui/core"

class Crew extends React.Component {

  specialist() {
    return this.setState({
      title: 'Mission Specialist',
      name: 'Mark ShuttleWorth',
      description: 'Meet your crew Mission Specialist Mark Shuttleworth Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
    })
  }

  commander() {
    return this.setState({
      title: 'Commander',
      name: 'Douglas Hurley',
      description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
    })
  }

  pilot() {
    return this.setState({
      title: 'Pilot',
      name: 'Victor Glover',
      description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'
    })
  }

  engineer() {
    return this.setState({
      title: 'Flight Engineer',
      name: 'Anousheh Ansari',
      description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
    })
  }

  state = {
    title: 'Commander',
    name: 'Douglas Hurley',
    description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
  }
    render() {
      return (
      <Box component="span">
        <Typography variant='h1'>02 Meet Your Crew</Typography >
        <Typography variant='h1'>{this.state.title}</Typography >
        <Typography variant='h1'>{this.state.name}</Typography >
        <Typography variant='p'>{this.state.description}</Typography >
        <Button variant="text" onClick={this.specialist.bind(this)}>Mission Specialist</Button>
        <Button variant="text" onClick={this.commander.bind(this)}>Commander</Button>
        <Button variant="text" onClick={this.pilot.bind(this)}>Pilot</Button>
        <Button variant="text" onClick={this.engineer.bind(this)}>Flight Engineer</Button>
      </Box>      
      )
    }
  }

export default Crew;