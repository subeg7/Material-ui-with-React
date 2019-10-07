import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

// const CellLength = 50;


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
        var complexText = new Konva.Text({
            x: 20,
            y: 60,
            text:
              "COMPLEX TEXT\n\nAll the world's a stage, and all the men and women merely players. They have their exits and their entrances.",
            fontSize: 18,
            fontFamily: 'Calibri',
            fill: '#555',
            width: 300,
            padding: 20,
            align: 'center'
          });
    
      return (
        <Rect
          x={this.props.position.x}
          y={this.props.position.y}

          width={this.props.cellShapeSize}
          height={this.props.cellShapeSize}

        //   fill={this.state.color}
          fill={Konva.Util.getRandomColor()}

          
        //   shadowBlur={5}
          onClick={this.handleClick}
        />
      );
    }
  }