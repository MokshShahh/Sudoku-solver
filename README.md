# Sudoku-solver
A web-based Sudoku solver that uses a backtracking algorithm to solve and generate Sudoku puzzles.

The backtracking algorithm used in this project works as follows:

    Find the next empty cell in the Sudoku grid.
    Try placing the digits from 1 to 9 in that cell.
    For every digit that leads to a valid solution, recursively solve the remaining cells.
    If a solution is found, return True and update the Sudoku grid.
    If no solution is found, backtrack and try a different digit for the current cell.


