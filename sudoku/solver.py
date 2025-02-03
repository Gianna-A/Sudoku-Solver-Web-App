def isBoardSolved(sBoard):
    for row in sBoard:
        for element in row:
            if element == 0:
                #checking for any zeros
                return True
    return False
                              
#actual function
def sudokuSolve(sboard):
    #base case
    if not isBoardSolved(sboard):
        return sboard
    #recursive case
    for i, row in enumerate(sboard):
        for j, element in enumerate(row):
             if element == 0:
                for c in range(1, 10):
                     if not isElementInRow(c,row) and not isElementInColumn(c, sboard, j) and not isElementInSquare(c, sboard, i, j):
                          row[j] = c
                          solved_board = sudokuSolve(sboard)
                          #if false continues solving, if true it exits
                          if solved_board:
                              return solved_board
                          row[j] = 0
                return None
    return None

#check if element is already in row
def isElementInRow(a, b):
    for element in b:
        if element == a:
             return True
    return False

def isElementInColumn(el, board, j):
    for row in board:
        if row[j] == el:
            return True
    return False

def isElementInSquare(el, board, i, j):
    #if element is in the square
    startRow = (i // 3)*3
    startCol = (j // 3)*3
    for r in range(startRow, startRow + 3):
        for c in range(startCol, startCol + 3):
            if board[r][c] == el:
                return True
    return False