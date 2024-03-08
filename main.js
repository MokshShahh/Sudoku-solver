document.addEventListener("DOMContentLoaded", () => {
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
    console.log("hello")
      // Call the function to display the array
      displayArray();
    })