import React from 'react';

class Technology extends React.Component {

  state = {
    title: 'LAUNCH VEHICLE',
    description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  }

  one() {
    return this.setState({
      title: 'LAUNCH VEHICLE',
      description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    })
  }

  two() {
    return this.setState({
      title: 'SPACEPORT',
      description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    })
  }

  three() {
    return this.setState({
      title: 'SPACE CAPSULE',
      description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    })
  }

    render() {
      return (
      <div>
        <h1>SPACE LAUNCH 101</h1>
        <button onClick={this.one.bind(this)}>1</button>
        <button onClick={this.two.bind(this)}>2</button>
        <button onClick={this.three.bind(this)}>3</button>
        <h2>THE TERMINOLOGY...</h2>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
      </div>
      )
    }
  }

export default Technology;