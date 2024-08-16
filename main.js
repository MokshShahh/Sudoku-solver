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

function checkValid(){
for (let row = 0; row < 9; row++) {
  for (let col = 0; col < 9; col++) {

      if (sudokuPuzzle[row][col] !== 0) {
          // Print current value being checked (for debugging purposes)
          console.log(sudokuPuzzle[row][col]);

          // Check the row
          let rowList = sudokuPuzzle[row].slice();
          rowList.splice(col, 1);  // Remove the current cell from the list
          let rowTrue = !rowList.includes(sudokuPuzzle[row][col]);

          // Check the column
          let columnList = [];
          for (let i = 0; i < 9; i++) {
              columnList.push(sudokuPuzzle[i][col]);
          }
          columnList.splice(row, 1);  // Remove the current cell from the list
          let columnTrue = !columnList.includes(sudokuPuzzle[row][col]);

          // Check the 3x3 subgrid
          let subgridList = [];
          for (let r = Math.floor(row / 3) * 3; r < Math.floor(row / 3) * 3 + 3; r++) {
              for (let c = Math.floor(col / 3) * 3; c < Math.floor(col / 3) * 3 + 3; c++) {
                  subgridList.push(sudokuPuzzle[r][c]);
              }
          }
          subgridList.splice(subgridList.indexOf(sudokuPuzzle[row][col]), 1);  // Remove the current cell from the list
          let subgridTrue = !subgridList.includes(sudokuPuzzle[row][col]);

          // Check if all conditions are true
          //todo bug exists here fix when back
          let condition=rowTrue && columnTrue && subgridTrue
          if(rowTrue==false || columnTrue==false || subgridTrue==false){
            return false
          }
          // if(!condition){
          //   return condition
          // }
          console.log(condition)


          
      }
  }
}
return true

}



function displayArray() {
  //displays the sudoku by inputing the value of the individual cells of the sudokupuzzle and putting
//these values into the respective td elemnts in the hrtml
  for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
      let td=document.getElementById(i.toString()+','+j.toString())
      td.value=sudokuPuzzle[i][j]
    }}
}



function reset(){
  //sets the value of all the td elements in html to null and changes their background colour to white
  for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
      let td=document.getElementById(i.toString()+','+j.toString())
      td.value=''
      td.style.backgroundColor='#ffffff'
    }}
    
}



function ong(){
//on clicking the sudoku solve button this functoin is run
//idk why i called it ong
//it takes the values entered int he td elements, puts it into the sudokupuzzle array
//solves the sudoku puzzle
//then displayes the answer
for(let i=0;i<9;i++){
  for(let j=0;j<9;j++){
    rr=i.toString()
    cc=j.toString()
    let but=document.getElementById(rr+','+cc)
    if(but.value===''){
      sudokuPuzzle[i][j]=0;
    }
    else{
      sudokuPuzzle[i][j]=parseInt(but.value);
    }
    
    
    
  }
}
  if (checkValid()){
  
  sudoku_solver(sudokuPuzzle)
  displayArray()
  
}
else{
  document.getElementById("check").innerHTML="not valid sudoku"
  setTimeout(() => {
    document.getElementById("check").innerHTML="hello";
  }, 2000);
  
  
}
  
}



function generatevalid(row,colomn){
  //takes row and colomn as a parameters are generates a random value for that row and colomn
  //the value will satify the sudoku conditions
  //used to generate a random sudoku for the user to solve
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
    for(let i=0;i<9;i++){
      for(let j=0;j<9;j++){
        sudokuPuzzle[i][j]=0
      }}
      
  }

}

function generate(){
  //assigns a random value to the middle cells in each of the sudoku subgrids using the generateValid function
  //now we have a sudoku (that only has numbers in the middle cells of the subgrids) that can be solved
  //solves the sudoku
  //reveals 25 random numbers on the main sudokugrid 
  //user can solve this sudoku now


  //sets the 2d array to be empty
  for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
      sudokuPuzzle[i][j]=0
    }}

    //sets the table to have no values
    for(let i=0;i<9;i++){
      for(let j=0;j<9;j++){
        let td=document.getElementById(i.toString()+','+j.toString())
        td.value=''
      }}

  
  //generating a valid number for the middel of each  subgrid
  generatevalid(1,1)
  generatevalid(1,4)
  generatevalid(1,7)
  
  generatevalid(4,1)
  generatevalid(4,4)
  generatevalid(4,7)

  generatevalid(7,1)
  generatevalid(7,4)
  generatevalid(7,7)

  //solving the sudoku with a valid number in the middle of each subgrid    
  sudoku_solver(sudokuPuzzle)
  
  //setting the bg colour of every cell to be white
  const max=9
  const min2=0
  for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
      let td=document.getElementById(i.toString()+','+j.toString())
      td.style.backgroundColor='#ffffff'
    }}
  

  //revealing 30 random umbers of the solved sudoku and setting the bg colour of the 
  //revealed numbers to be cyan
  for(let i=0;i<30;i++){
    let temp_row=Math.floor(Math.random() * (max - min2) + min2)
    let temp_colomn=Math.floor(Math.random() * (max - min2) + min2)
    let cell=document.getElementById(temp_row.toString()+','+temp_colomn.toString())
    cell.value=sudokuPuzzle[temp_row][temp_colomn]
    cell.style.backgroundColor='#00FFFF'

  }
  
}
  







function validnumber(r,c,k){
  //accepts row colomn and number parameter
  //checks if the number can be put into that row and colomn without breaking the rules of sukodu
  //returs true if it can and false if it cannot
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




function sudoku_solver(sudoku,r=0,c=0){
  //solves the  sudoku using backtracking and the validnumber function

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




