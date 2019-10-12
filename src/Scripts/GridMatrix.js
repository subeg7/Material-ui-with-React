const CellPadding=2;


const cellShapeSize=50  ;
const CellDimensions={
    height:cellShapeSize,
    width:cellShapeSize,
}
const CellsInGridRow = 2;
let GridMatrixJson={matrix:[]};

function InitalizeGridMatrix(){
    // console.log("Creating GridMatrix");

    let EmptyGridArray = new Array(CellsInGridRow).fill( new Array(CellsInGridRow).fill(false) );

    let colId=0;
    const mappedArray = EmptyGridArray.map((innerArray )=>{
        let rowId=0;
        let xPos = colId*(cellShapeSize+CellPadding)+CellPadding;


        let mappedInnerArray = innerArray.map((cell)=>{
        let yPos = rowId*(cellShapeSize+CellPadding)+CellPadding;

            let cellId = ""+rowId+"_"+colId;
            // console.warn("cellId::"+cellId+"  at position: ["+xPos+","+yPos+"]");

            rowId++;
            return {
                cellId:cellId,
                rowId:rowId-1,
                colId:colId,
                position:{x:xPos,y:yPos},
                cellShapeSize:cellShapeSize,
                isActivated:'false',
            }
        });
        colId++;
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
    GridMatrixJson.matrix[row][column].isActivated==='false'? GridMatrixJson.matrix[row][column].isActivated='true': GridMatrixJson.matrix[row][column].isActivated='false';
    console.log("Cell["+row+","+column+"] is set:"+ GridMatrixJson.matrix[row][column].isActivated+" after toggling");
}