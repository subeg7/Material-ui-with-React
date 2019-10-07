import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';


export default class Cell extends React.Component {
    state = {
      color: 'green'
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

          width={this.props.size.width}
          height={this.props.size.height}

          fill={this.state.color}
        //   shadowBlur={5}
          onClick={this.handleClick}
        />
      );
    }
  }