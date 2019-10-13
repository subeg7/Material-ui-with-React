
export const SimulateNextGeneration=(currentGenMatrix)=>{
    console.log("simulating next generation");
    let nextGenerationMatrix = currentGenMatrix; 

    let currGenObjectArray = _createCellObjectArray(currentGenMatrix);

    currGenObjectArray.map((innerArray )=>{
       innerArray.map((cell)=>{
            let activeStatus = _getActiveStatusDueToNeighbours(cell,currGenObjectArray);
            // console.log("_getActiveStatusDueToNeighbours of Cell["+cell.rowId+","+cell.colId+"] returned:"+activeStatus);
            nextGenerationMatrix[cell.rowId][cell.colId].isActivated= activeStatus;
        });
    });
    return nextGenerationMatrix;
}



class Cell{
    constructor(rowId,colId,isActivated){
        this.rowId= rowId;
        this.colId= colId;
        this.isActivated= isActivated;
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

function _getActiveStatusDueToNeighbours(cell,cellObjArr){
    let activeNeigbourCellCount = _countActiveNeigbours(cell,cellObjArr);
    //  activeNeigbourCellCount = 2;
    // let activeNeigbourCellCount = 2;

    let activeStatus="notSet";
    if(cell.isActivated=="true"){
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
    console.log(" activeNeigbourCellCount of Cell["+cell.rowId+","+cell.colId+"] ["+ cell.isActivated+"] is:"+activeNeigbourCellCount+"hence is set:"+activeStatus);
    return activeStatus;
}

function _countActiveNeigbours(cell,cellObjArr){
    let activeNeigbourCellCount = 0;

    console.log("!!!!!!!!!!!!!");
    try{// top cell
        if(cellObjArr[cell.rowId-1][cell.colId]=="true") activeNeigbourCellCount+=1;
        // console.log("TopCell of  Cell:["+cell.rowId+","+cell.colId+"] is Cell:["+(cell.rowId-1)+","+cell.colId+"]");
    }catch (error){
        console.log("No TopCell of Cell:["+cell.rowId+","+cell.colId+"]");
    }
   
    try{ // topLeft cell
        if(cellObjArr[cell.rowId-1][cell.colId-1]=="true") activeNeigbourCellCount+=1;
    }catch (error){
        console.log("No Top-Left of Cell:["+cell.rowId+","+cell.colId+"]");
    }
 
    try{// topRight cell
        if(cellObjArr[cell.rowId-1][cell.colId+1]=="true") activeNeigbourCellCount+=1;
    }catch (error){
        console.log("No Top-Right of Cell:["+cell.rowId+","+cell.colId+"]");
    }

    try{// direct left cell
        if(cellObjArr[cell.rowId][cell.colId-1]=="true") activeNeigbourCellCount+=1;
    }catch (error){
        console.log("No Direct-Left of Cell:["+cell.rowId+","+cell.colId+"]");        
    }
    
    try{// direct right cell
        if(cellObjArr[cell.rowId][cell.colId+1]=="true") activeNeigbourCellCount+=1;
    }catch (error){
        console.log("No Direct-Right of Cell:["+cell.rowId+","+cell.colId+"]");
    }
   
    try{ // direct bottom cell
        if(cellObjArr[cell.rowId+1][cell.colId]=="true") activeNeigbourCellCount+=1;
    }catch (error){
        console.log("No Direct-Bottom of Cell:["+cell.rowId+","+cell.colId+"]");
    }
    
    try{// bottom left cell
        if(cellObjArr[cell.rowId+1][cell.colId-1]=="true") activeNeigbourCellCount+=1;
    }catch (error){
        console.log("No Bottom-Left for Cell:["+cell.rowId+","+cell.colId+"]");
    }

    try{// bottom right cell
        if(cellObjArr[cell.rowId][cell.colId+1]=="true") activeNeigbourCellCount+=1;
    }catch (error){
        console.log("No Bottom-Right for Cell:["+cell.rowId+","+cell.colId+"]");
    }
    console.log("!!!!!!!!!!!!!");

   
    
    return activeNeigbourCellCount;

}