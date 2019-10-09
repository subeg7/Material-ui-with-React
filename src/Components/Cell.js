import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

// const CellLength = 50;
const Color = {
  default:"purple",
  active:"green"
}

export default class Cell extends React.Component {
    state = {
      fillColor:Color.default,
      isActive:false,
    };
    
    handleClick = () => {
      console.log("you clicked the cell"+this.props.cellId);
        // color: Konva.Util.getRandomColor()
      this.state.fillColor==Color.default?this.setState({fillColor:Color.active,isActive:true}):this.setState({fillColor:Color.default,isActive:false})
    };

    render() {
    
      return (
        <Rect
          x={this.props.position.x}
          y={this.props.position.y}

          width={this.props.cellShapeSize}
          height={this.props.cellShapeSize}

          fill={this.state.fillColor}
        //   fill={Konva.Util.getRandomColor()}

          
        //   shadowBlur={5}
          onClick={this.handleClick}
        />
      );


    }


    
  }