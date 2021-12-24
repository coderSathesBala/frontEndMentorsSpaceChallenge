import React from 'react';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  div: {
    backgroundColor: 'blue'
  }
})

function Landing() {
      const classes = useStyles()

      return (
        <div>
        <h1>SO, YOU WANT TO TRAVEL TO </h1>;
        <h1>SPACE</h1>
        <p>Let's face it: if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back,
          and relax because we'll give you a truly out of this world experience!
        </p>
      </div>
        )
}

export default Landing;