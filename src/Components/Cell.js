import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import {ToggleGridMatirxCell} from "./../Scripts/GridMatrix";

// const CellLength = 50;
const Color = {
  default:"black",
  active:"green"
}

export default class Cell extends React.Component {
    state = {
      fillColor:Color.default,
      isActive:false,
      isClicked:false,
    };
    
    handleClick = () => {
      ToggleGridMatirxCell(this.props.rowId,this.props.colId);
      // console.log("Cell["+this.props.rowId+","+this.props.colId+"] is clicked");
      // console.log("you clicked the cell"+this.props.cellId);
        // this.setState({isClicked:true});
        // color: Konva.Util.getRandomColor()
        this.state.fillColor===Color.default?this.setState({fillColor:Color.active,isActive:true,isClicked:true}):this.setState({fillColor:Color.default,isActive:false,isClicked:true})
    };

    render() {
    
      return (
        <Rect
          x={this.props.position.x}
          y={this.props.position.y}

          width={this.props.cellShapeSize}
          height={this.props.cellShapeSize}

          fill={this.state.isClicked?this.state.fillColor:(this.props.isActivated=="true"?Color.active:Color.default)}
        //   fill={Konva.Util.getRandomColor()}

          
        //   shadowBlur={5}
          onClick={this.handleClick}
        />
      );


    }


    
  }