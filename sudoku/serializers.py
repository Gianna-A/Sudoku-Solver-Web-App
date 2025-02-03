from rest_framework import serializers
from .models import SudokuPuzzle

class SudokuPuzzleSerializer(serializers.ModelSerializer):
    class Meta:
        model = SudokuPuzzle
        fields = '__all__'
    '''
    def to_representation(self, instance):
        representation = {
            'id' : instance.id,
            'initial_puzzle' : instance.initial_puzzle,
            'solved_puzzle' : instance.solved_puzzle,
            'created_at' : instance.created_at,
        }
        return representation
    '''
    