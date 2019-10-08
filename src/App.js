import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Grid from "./Components/Grid";

export default class App extends Component {

  render() {
    console.log("rendering");

    return(
     <div>
       <h1>  Simulator</h1>
       <div>
        <Grid/>
       </div>
     </div>
    );    
  }
}



render(<App />, document.getElementById('root'));