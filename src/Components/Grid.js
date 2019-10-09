import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import Cell from "./Cell";
import GetGridMatrix from "./../Scripts/GridMatrix";


const CellPadding=5;


const cellShapeSize=50  ;
const CellDimensions={
    height:cellShapeSize,
    width:cellShapeSize,
}
const CellsInGridRow = 20;

export default class Grid extends Component{
    render(){
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
              <Layer>
                {/* <Cell position={{x:23,y:23}}/> */}
                  {_createGrid()}
              </Layer>
            </Stage>
          );
    }
}



function _createGrid(){
    
    const mappedArray = GetGridMatrix().map((innerArray )=>{
      
        let mappedInnerArray = innerArray.map((cellData)=>{
      
            return <Cell  cellId={cellData.cellId} key={cellData.cellId} position={cellData.position} cellShapeSize={cellData.cellShapeSize} isActivated={cellData.isActivated}/>
        });
        return mappedInnerArray;
    });

    return mappedArray;
}

  