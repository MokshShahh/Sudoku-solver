//test test
//test test
//test test
function displayArray() {
  const arrayContainer = document.getElementById('arrayContainer');
  let arrayHTML = '<table>';

  for (let i = 0; i < 9; i++) {
    arrayHTML += '<tr>';
    for (let j = 0; j < 9; j++) {
      arrayHTML += '<td>' + sudokuPuzzle[i][j] + '</td>';
    }
    arrayHTML += '</tr>';
  }

  arrayHTML += '</table>';
  arrayContainer.innerHTML = arrayHTML;
}


const sudokuPuzzle = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function ong(){
  

  for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
      rr=i.toString()
      cc=j.toString()
      let but=document.getElementById(rr+','+cc)
      sudokuPuzzle[i][j]=parseInt(but.value);
      console.log(typeof(but.value))
      
    }
  }
  sudoku_solver(sudokuPuzzle)
  displayArray()
}

function generatevalid(row,colomn){
  const min=1
  const max=9
  let number=Math.floor(Math.random() * (max - min) + min)
  if (validnumber(row,colomn,number)){
    sudokuPuzzle[row][colomn]=number
    return true
  }
  else{
    number=Math.floor(Math.random() * (max - min) + min)
    generatevalid(row,colomn,number)

  }

}

function generate(){
  for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
      sudokuPuzzle[i][j]=0
    }}

    for(let i=0;i<9;i++){
      for(let j=0;j<9;j++){
        let td=document.getElementById(i.toString()+','+j.toString())
        td.value='0'
      }}

  
  
  generatevalid(1,1)
  generatevalid(1,4)
  generatevalid(1,7)
  
  generatevalid(4,1)
  generatevalid(4,4)
  generatevalid(4,7)

  generatevalid(7,1)
  generatevalid(7,4)
  generatevalid(7,7)

  sudoku_solver(sudokuPuzzle)
  const min=1
  const max=9
  for(let i=0;i<25;i++){
    let temp_row=Math.floor(Math.random() * (max - min) + min)
    let temp_colomn=Math.floor(Math.random() * (max - min) + min)
    let cell=document.getElementById(temp_row.toString()+','+temp_colomn.toString())
    cell.value=sudokuPuzzle[temp_row][temp_colomn]
  }
}
  







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




