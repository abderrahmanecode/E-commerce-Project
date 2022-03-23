from django.urls import path
from . import views

urlpatterns=[
    path('',views.MyRoutes.as_view(),name="routes"),
    path('products/',views.ProductsList.as_view(),name="products"),
    path('products/<str:pk>',views.ProductView.as_view(),name="product "),
]