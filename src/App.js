import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Grid from "./Components/Grid";
// import { ReactComponent } from '*.svg';




export default class App extends Component {

  render() {
    console.log("rendering");

    return(
      <Grid/>
    );    
  }
}



render(<App />, document.getElementById('root'));