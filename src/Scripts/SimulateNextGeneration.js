export const SimulateNextGeneration=(currentGeneration)=>{
    console.log(currentGeneration);
    const cell  = new Cell(232);
    const topCell = cell.getTopCell();
    const topLeftCell = cell.getTopLeftCell();
    const topRightCell = cell.getTopRightCell();

    const leftCell = cell.getLeftCell();
    const rightCell = cell.getRightCell();

    const bottomCell = cell.getBottomCell();
    const bottomLeftCell = cell.getBottomLeftCell();
    const bottomRightCell = cell.getBottomRightCell();
    
}
class Cell{
    constructor(id){
        this.id= id;
    }

    getTopCell=()=>{
    }
    getTopLeftCell=()=>{
    }
    getTopRightCell=()=>{
    }
    getLeftCell=()=>{
    }
    getRightCell=()=>{
    }
    getBottomCell=()=>{
    }
    getBottomLeftCell=()=>{
    }
    getBottomRightCell=()=>{
    }
}