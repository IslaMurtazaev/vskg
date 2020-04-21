from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from api import views

router = routers.DefaultRouter()
router.register('v1/categories', views.CategoryListViewSet, basename="categories")
router.register('v1/types', views.TypeFieldViewSet, basename="types")

urlpatterns = [
    # path('', include('api.urls')),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('admin/', admin.site.urls),


]
