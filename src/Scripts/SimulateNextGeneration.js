
export const SimulateNextGeneration=(currentGenMatrix)=>{
    console.log("simulating next generation");
    let nextGenerationMatrix = currentGenMatrix; 

    let currGenObjectArray = _createCellObjectArray(currentGenMatrix);

    currGenObjectArray.map((innerArray )=>{
       innerArray.map((cell)=>{
            let activeStatus = _getActiveStatusDueToNeighbours(cell);
            console.log("_getActiveStatusDueToNeighbours of Cell["+cell.rowId+","+cell.colId+"] returned"+activeStatus);
            nextGenerationMatrix[cell.rowId][cell.colId].isActivated= activeStatus;
        });
    });
    return nextGenerationMatrix;
}



class Cell{
    constructor(rowId,colId,activeStatus){
        this.rowId= rowId;
        this.colId= colId;
        this.activeStatus= activeStatus;
    }

    getTopCellActiveStatus=()=>{
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

function _createCellObjectArray(matrix){
    const cellObjectArray = matrix.map((innerArray )=>{
        let mappedInnerArray = innerArray.map((cellData)=>{
            return new Cell(cellData.rowId,cellData.colId,cellData.isActivated);
        });
        return mappedInnerArray;
    });
    return cellObjectArray;
}

function _getActiveStatusDueToNeighbours(cell){
    let activeNeigbourCellCount = 0;
    cell.getTopCellActiveStatus()=="true"?activeNeigbourCellCount++:activeNeigbourCellCount+=0;
    cell.getTopLeftCellActiveStatus()=="true"?activeNeigbourCellCount++:activeNeigbourCellCount+=0;
    cell.getTopRightCellActiveStatus()=="true"?activeNeigbourCellCount++:activeNeigbourCellCount+=0;

    cell.getLeftCellActiveStatus()=="true"?activeNeigbourCellCount++:activeNeigbourCellCount+=0;
    cell.getRightCellActiveStatus()=="true"?activeNeigbourCellCount++:activeNeigbourCellCount+=0;

    cell.getBottomCellActiveStatus()=="true"?activeNeigbourCellCount++:activeNeigbourCellCount+=0;
    cell.getBottomLeftCellActiveStatus()=="true"?activeNeigbourCellCount++:activeNeigbourCellCount+=0;
    cell.getBottomRightCellActiveStatus()=="true"?activeNeigbourCellCount++:activeNeigbourCellCount+=0;

    let activeStatus="notSet";

    if(cell.activeStatus=="true"){
        if((activeNeigbourCellCount==2 || activeNeigbourCellCount==3)){
            activeStatus="true";
        }else{
            activeStatus="false";
        }
    }else{
        if(activeNeigbourCellCount==3){
            activeStatus="true";
        }else{
            activeStatus="false";
        }
    }
    
    return activeStatus;
}