
from .products import products
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.
class MyRoutes(APIView):
    def get(self,request):
        return Response("Hello")

class ProductsList(APIView):
    def get(self,request):
        return Response(products)

class ProductView(APIView):
    def get(self,request,pk):
        product=None
        for i in products:
            if i['_id']==pk:
                product=i
                break
        return Response(product)


