//test test
//test test
//test test

const sudokuPuzzle = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];

function validnumber(r,c,k){
  const subgrid_arr=[]
  // checks if number is the row
  row_validation=!sudokuPuzzle[r].includes(k)
  colomn_arr=[]
  // checks if number is in colomn
  for(let i=0;i<9;i++){
    colomn_arr.push(sudokuPuzzle[i][c])

  }
  // used "!" as this returns true if value is in list but we want it to return true if value is not in list
  colomn_validation=!colomn_arr.includes(k)
    //gets the row and colomn start and end points for the current cell
  subgrid_row_start=Math.floor(r/3)*3
  subgrid_row_end=subgrid_row_start+3
  subgrid_colomn_start=Math.floor(c/3)*3
  subgrid_colomn_end=subgrid_colomn_start+3
  

  //checks if number is repeated anywhere in subgrid
  for(let i=subgrid_row_start;i<subgrid_row_end;i++){
    for(let j=subgrid_colomn_start;j<subgrid_colomn_end;j++){
      
        subgrid_arr.push(sudokuPuzzle[i][j])

      
    }
  }
  subgrid_validation=!subgrid_arr.includes(k)
  
  return(row_validation && colomn_validation && subgrid_validation)
  }
//solves the  sudoku
function sudoku_solver(sudoku,r=0,c=0){
  if(r===9){
    return true
  }
  else if(c===9){
    return sudoku_solver(sudoku,r+1,0)
  }
  else if(sudoku[r][c]!==0){
    return sudoku_solver(sudoku,r,c+1)
  }
  else{
    for(let i=1;i<10;i++){
      if(validnumber(r,c,i)){
        sudoku[r][c]=i;
        if(sudoku_solver(sudoku,r,c+1)){
          return true
        }
        sudoku[r][c]=0;
      }
    
    }
    return false
  }
  

  

}


  
    
  



document.addEventListener("DOMContentLoaded", () => {
    
    sudoku_solver(sudokuPuzzle,0,0)
 
    
    function displayArray() {
        const arrayContainer = document.getElementById('arrayContainer');
        let arrayHTML = 'ARRAY<table>';
    
        for (let i = 0; i < sudokuPuzzle.length; i++) {
          arrayHTML += '<tr>';
          for (let j = 0; j < sudokuPuzzle[i].length; j++) {
            arrayHTML += '<td>' + sudokuPuzzle[i][j] + '</td>';
          }
          arrayHTML += '</tr>';
        }
    
        arrayHTML += '</table>';
        arrayContainer.innerHTML = arrayHTML;
      }
      // Call the function to display the array
      displayArray();
    })