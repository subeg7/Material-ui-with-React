import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import Cell from "./Cell";


const CellPadding=5;


const cellShapeSize=100  ;
const CellDimensions={
    height:cellShapeSize,
    width:cellShapeSize,
}
const CellsInGridRow = 3;

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
    let GridArray = new Array(CellsInGridRow).fill( new Array(CellsInGridRow).fill(false) );

    let colId=0;
    const mappedArray = GridArray.map((innerArray )=>{
        let rowId=0;
        let xPos = colId*(cellShapeSize+CellPadding)+CellPadding;


        let mappedInnerArray = innerArray.map((cell)=>{
        let yPos = rowId*(cellShapeSize+CellPadding)+CellPadding;

            let cellId = ""+rowId+"_"+colId;
            console.warn("cellId::"+cellId+"  at position: ["+xPos+","+yPos+"]");

            rowId++;
            return <Cell  key={cellId} position={{x:xPos,y:yPos}} cellShapeSize={cellShapeSize}/>
        });
        colId++;
        return mappedInnerArray;
    });

    console.log("mappedArray::"+mappedArray);
    return mappedArray;
}
  
function getXPos(){
    return 100;
}
  