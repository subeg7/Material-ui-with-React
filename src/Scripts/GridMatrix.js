const CellPadding=5;


const cellShapeSize=50  ;
const CellDimensions={
    height:cellShapeSize,
    width:cellShapeSize,
}
const CellsInGridRow = 20;



export default  function GetGridMatrix(){

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
                position:{x:xPos,y:yPos},
                cellShapeSize:cellShapeSize,
                isActivated:"false",
            }
        });
        colId++;
        return mappedInnerArray;
    });

    // console.log("mappedArray::"+mappedArray);
    return mappedArray;
     
}