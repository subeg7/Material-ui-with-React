import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Grid from "./Components/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {SimulateNextGeneration} from "./Scripts/SimulateNextGeneration";
import GetGridMatrix from "./Scripts/GridMatrix";
import { statement } from '@babel/template';



const styles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));



export default class App extends Component {
  // _simulateNextGeneration=()=>{
  // }

  state={
    gridMatrix:GetGridMatrix()
  }
  
  
  render() {
    // console.log("rendering App");

    return(
     <div class="container-fluid">
       <div class="row">
          <div class="col-2">
            <h1>Controls</h1>
              <Button variant="contained" color="secondary" className={styles.button} onClick={()=>this._SimulateNextGeneration()}>
                Next Step
              </Button>
          </div>

          <div class="col-10">
            <h1>  Simulator</h1>
            <div><Grid gridMatrix={this.state.gridMatrix}/></div>
          </div>

        

     </div>
     </div>
    );    
  }

  _SimulateNextGeneration=()=>{
    // GetGridMatrix()
    let newMatrix = GetGridMatrix();
    // newMatrix==this.state.gridMatrix?console.log("new martix is same as old"):console.log("new martix is different than old");
    // console.log("newMartrix[0][0]"+newMatrix[0][0].isActivated);
    SimulateNextGeneration(newMatrix);
    this.setState(this.setState({gridMatrix:newMatrix}));
  }

  
}



render(<App />, document.getElementById('root'));