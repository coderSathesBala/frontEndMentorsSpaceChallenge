import React from 'react';

class Crew extends React.Component {

  state = {
    commanderTitle: 'Commander',
    commanderName: 'Douglas Hurley',
    commanderDescription: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    engineerTitle: 'Flight Engineer',
    engineerName: 'Anousheh Ansari',
    engineeerDescription: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    pilotTitle: 'Pilot',
    pilotName: 'Victor Glover',
    pilotDescription: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
    specialistTitle: 'Mission Specialist',
    specialistName: 'Mark Shuttleworth',
    specialistDescription: 'Meet your crew Mission Specialist Mark Shuttleworth Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
  }
    render() {
      return (
      <div>
        <h1>02 Meet Your Crew</h1>
        <h1>{this.state.commanderTitle}</h1>
        <p></p>
      </div>
      
      )
    }
  }

export default Crew;