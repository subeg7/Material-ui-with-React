import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Grid from "./Components/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {SimulateNextGeneration} from "./Scripts/SimulateNextGeneration";


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
  
  render() {
    console.log("rendering");

    return(
     <div class="container-fluid">
       <div class="row">
          <div class="col-2">
            <h1>Controls</h1>
              <Button variant="contained" color="secondary" className={styles.button} onClick={SimulateNextGeneration}>
                Next Step
              </Button>
          </div>

          <Title/>
       

        

     </div>
     </div>
    );    
  }

}
  class Title extends Component{

    state={
      title:"Simulator STate  "
    };

    changeTitle=()=>{
      this.setState({
        title:"newTitle"
      });
    }


    render(){
      return(
        <div class="col-10">
          <h1>  {this.state.title}</h1>
          <div><Grid/></div>
        </div>
      )
    }
  }

  




render(<App />, document.getElementById('root'));