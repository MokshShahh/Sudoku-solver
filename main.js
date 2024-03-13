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
  row_validation=!sudokuPuzzle[r].includes(k)
  colomn_arr=[]
  for(let i=0;i<9;i++){
    colomn_arr.push(sudokuPuzzle[i][c])

  }
  colomn_validation=!colomn_arr.includes(k)
  subgrid_row_start=Math.floor(r/3)*3
  subgrid_row_end=subgrid_row_start+3
  subgrid_colomn_start=Math.floor(c/3)*3
  subgrid_colomn_end=subgrid_colomn_start+3
  
  for(i=0;i<subgrid_row_end;i++){
    for(j=0;j<subgrid_colomn_end;j++){
      
        subgrid_arr.push(sudokuPuzzle[i][j])

      
    }
  }
  subgrid_validation=!subgrid_arr.includes(k)
  
  return(row_validation && colomn_validation && subgrid_validation)
  }


  
    
  



document.addEventListener("DOMContentLoaded", () => {
    console.clear()
    validnumber(0,8,2)
    
    




    let r=0
    let c=0
    // for(r=0;r<9;r++){
    //   for(c=0;c<9;c++){
    //     if (sudokuPuzzle[r][c]==0){
    //       sudokuPuzzle[r][c]=validnumber(r,c)
    //     }
    //   }
    // }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
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