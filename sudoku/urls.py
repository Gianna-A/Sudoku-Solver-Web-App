from django.urls import path
from sudoku.api_views import SudokuViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

sudoku_list_view = SudokuViewSet.as_view({'get': 'list', 'post': 'create'})
sudoku_detail_view = SudokuViewSet.as_view({'get': 'retrieve', 'delete': 'destroy', 'patch': 'partial_update', 'put': 'full_update'})

urlpatterns = [
    #api routes
    path('api/puzzles/', sudoku_list_view, name ='puzzle-list'),
    path('api/puzzles/<int:pk_id>/', sudoku_detail_view, name='puzzle-detail'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]