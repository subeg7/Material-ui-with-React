import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import Cell from "./Cell";

const CellPadding=5;


const cellShapeSize=50  ;
const CellDimensions={
    height:cellShapeSize,
    width:cellShapeSize,
}

export default class Grid extends Component{
    render(){
        console.log("..............Rendering Grid.............");
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
              <Layer>
                {/* <Cell position={{x:23,y:23}}/> */}
                  {_createGrid(this.props.gridMatrix)}
              </Layer>
            </Stage>
          );
    }
}



function _createGrid(gridMatrix){
    
    const mappedArray = gridMatrix.map((innerArray )=>{
      
        let mappedInnerArray = innerArray.map((cellData)=>{
      
            return <Cell  
                    cellId={cellData.cellId} 
                    key={cellData.cellId} 
                    position={cellData.position} 
                    cellShapeSize={cellData.cellShapeSize} 
                    isActivated={cellData.isActivated}
                    rowId={cellData.rowId}
                    colId={cellData.colId}
                    />
        });
        return mappedInnerArray;
    });

    return mappedArray;
}

  