import React from 'react';

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
      <div>
        <h1>Pick Your Destination</h1>;
        <ul>
          <li onClick={this.moon.bind(this)}>MOON</li>
          <li onClick={this.mars.bind(this)}>MARS</li>
          <li onClick={this.europa.bind(this)}>EUROPA</li>
          <li onClick={this.titan.bind(this)}>TITAN</li>
        </ul>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        <h1>AVG. DISTANCE</h1>
        <h1>EST. TRAVEL TIME</h1>
        <h1>{this.state.distance}</h1>
        <h1>{this.state.travel}</h1>
      </div>
        )
    }
  }

export default Destination;