const CellPadding=2;


const cellShapeSize=50  ;
const CellDimensions={
    height:cellShapeSize,
    width:cellShapeSize,
}
const CellsInGridRow = 3;
let GridMatrixJson={matrix:[]};

function InitalizeGridMatrix(){
    // console.log("Creating GridMatrix");

    let EmptyGridArray = new Array(CellsInGridRow).fill( new Array(CellsInGridRow).fill(false) );

    let rowId=0;
    const mappedArray = EmptyGridArray.map((innerArray )=>{
        let colId=0;
        let xPos = rowId*(cellShapeSize+CellPadding)+CellPadding;


        let mappedInnerArray = innerArray.map((cell)=>{
        let yPos = colId*(cellShapeSize+CellPadding)+CellPadding;

            let cellId = ""+colId+"_"+rowId;
            // console.warn("cellId::"+cellId+"  at position: ["+xPos+","+yPos+"]");

            colId++;
            return {
                cellId:cellId,
                colId:colId-1,
                rowId:rowId,
                position:{x:xPos,y:yPos},
                cellShapeSize:cellShapeSize,
                isActivated:"false",
            }
        });
        rowId++;
        return mappedInnerArray;
    });

    // console.log("mappedArray::"+mappedArray);
    GridMatrixJson.matrix=mappedArray  ;
}

export default  function GetGridMatrix(){
    // console.log("GetGridMatrix is called");
    if(GridMatrixJson.matrix.length==0){
        InitalizeGridMatrix();
    }else{
        // console.log("Matrix is already initialized");
    }
    return GridMatrixJson.matrix;
}


export function ToggleGridMatirxCell(row,column){
    // console.log("Cell["+row+","+column+"] is "+ GridMatrixJson.matrix[row][column].isActivated);
    GridMatrixJson.matrix[row][column].isActivated==="false"? GridMatrixJson.matrix[row][column].isActivated="true": GridMatrixJson.matrix[row][column].isActivated="false";
    console.log("Cell["+row+","+column+"] is set:"+ GridMatrixJson.matrix[row][column].isActivated+" after toggling");
}