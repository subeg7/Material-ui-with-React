import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import Cell from "./Cell";

const CellLength = 50;
const CellProps={
  height:CellLength,
  width:CellLength,
}
const TotalCellsInRow = 5;

export default class Grid extends Component{
    render(){
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
              <Layer>
                  {_createGrid()}
              </Layer>
            </Stage>
          );
    }
}

function _createGrid(){
    // let GridArray = new Array(2).fill( new Array(2).fill( 
      
    //   <Cell position = {{x: getXPos(),y:0}} size= {CellProps}/>
    // ) );
     console.log("mappedArray::"+GridArray[0][1]);
    return GridArray[0][1];
}
  
function getXPos(){
    return 100;
}
  