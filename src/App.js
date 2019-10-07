import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Cell from "./Components/Cell";

const CellLength = 50;
const CellProps={
  height:CellLength,
  width:CellLength,
}

export default class App extends Component {
  render() {
    // Stage is a div container
    // Layer is actual canvas element (so you may have several canvases in the stage)
    // And then we have canvas shapes inside the Layer
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
            <Cell position = {{x:0,y:0}} size= {CellProps}/>
            <Cell position = {{x: 60,y:0}} size= {CellProps}/>
            <Cell position = {{x: 120,y:0}} size= {CellProps}/>
            <Cell position = {{x: 180,y:0}} size= {CellProps}/>
            <Cell position = {{x: 240,y:0}} size= {CellProps}/>
        </Layer>
      </Stage>
    );
  }
}

render(<App />, document.getElementById('root'));