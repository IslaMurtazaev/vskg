from rest_framework import viewsets
from api.models import Category, Type
from api.serializers import CategoryListSerializer, TypeSerializer


class CategoryListViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all().order_by('name')
    serializer_class = CategoryListSerializer


class TypeFieldViewSet(viewsets.ModelViewSet):
    queryset = Type.objects.all().order_by('name')
    serializer_class = TypeSerializer
