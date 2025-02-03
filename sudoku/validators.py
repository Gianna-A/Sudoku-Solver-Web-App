def check9x9(board):
    if checkElement(board) and checkValues(board):
        return True
    return False

def checkElement(board):
    if len(board) != 9:
        return False
    for row in board:
        if len(row) != 9:
            return False
    return True

def checkValues(board):
    for row in board:
        for element in row:
            if not element in range(0,10):
                return False
    return True