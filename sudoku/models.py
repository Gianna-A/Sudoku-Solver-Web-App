from django.db import models
from .solver import sudokuSolve
from .validators import check9x9
from django.contrib.auth.models import User
import copy

# Create your models here.

class SudokuPuzzle(models.Model):
    initial_puzzle = models.JSONField(validators=[check9x9])
    temp_puzzle = models.JSONField(validators=[check9x9], blank=True, null = True)
    solved_puzzle = models.JSONField(null = True, blank = True)
    created_at = models.DateTimeField(auto_now_add=True)
    users = models.ManyToManyField(User, related_name="puzzles", blank=True)
    def save(self, *args, **kwargs):
        self.full_clean()
        if not self.solved_puzzle:
            intial_puzzle_copy = copy.deepcopy(self.initial_puzzle)
            self.solved_puzzle = sudokuSolve(intial_puzzle_copy)
        return super().save(*args, **kwargs)
    
    def __str__(self):
        return f"Sudoku Puzzle {self.id} created on {self.created_at}"

'''
class UsersPuzzle(models.Model):
    puzzle = models.ForeignKey(SudokuPuzzle, on_delete=models.CASCADE)
    sUser = models.ForeignKey(SudokUsers, on_delete = models.CASCADE)
'''