import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

// const CellLength = 50;


export default class Cell extends React.Component {
    state = {
      color: 'purple'
    };
    // handleClick = () => {
    //   this.setState({
    //     color: Konva.Util.getRandomColor()
    //   });
    // };
    render() {
    
      return (
        <Rect
          x={this.props.position.x}
          y={this.props.position.y}

          width={this.props.cellShapeSize}
          height={this.props.cellShapeSize}

          fill={this.state.color}
        //   fill={Konva.Util.getRandomColor()}

          
        //   shadowBlur={5}
          onClick={this.handleClick}
        />
      );
    }
  }