from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import SudokuPuzzle
from .serializers import SudokuPuzzleSerializer
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.exceptions import NotFound



class SudokuViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = SudokuPuzzle.objects.all()
        serializer = SudokuPuzzleSerializer(queryset, many = True, context={'request': request})
        return Response(serializer.data)
    
    def create(self, request):
        serializer = SudokuPuzzleSerializer(data = request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
 
    def retrieve(self, request, pk_id=None):
        queryset = SudokuPuzzle.objects.all()
        puzzle = get_object_or_404(queryset, pk=pk_id)
        serializer = SudokuPuzzleSerializer(puzzle, context={'request': request})
        return Response(serializer.data)
    
    def destroy(self, request, pk_id=None):
        try:
            puzzle = SudokuPuzzle.objects.get(pk = pk_id)
            puzzle.delete()
            return Response({"message": "Successfully deleted"}, status=status.HTTP_204_NO_CONTENT)
        except:
            raise NotFound(detail="Puzzle not found")

    def partial_update(self, request, pk_id=None):
        try:
            puzzle = SudokuPuzzle.objects.get(pk = pk_id)
        except SudokuPuzzle.DoesNotExist:
            return Response({"detail": "Puzzle not found."}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = SudokuPuzzleSerializer(puzzle, data=request.data, partial=True, context={'request': request})
        if serializer.is_valid():
            serializer.save() 
            return Response(serializer.data) 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def full_update(self, request, pk_id=None):
        try:
            puzzle = SudokuPuzzle.objects.get(pk = pk_id)
        except SudokuPuzzle.DoesNotExist:
            return Response({"detail": "Puzzle not found."}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = SudokuPuzzleSerializer(puzzle, data=request.data, partial=False, context={'request': request})
        if serializer.is_valid():
            serializer.save() 
            return Response(serializer.data) 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)