from django.contrib import admin

# Register your models here.
from api.models import Category, Type, Field, Product, FieldValue

admin.site.register(Category)
admin.site.register(Type)
admin.site.register(Field)
admin.site.register(Product)
admin.site.register(FieldValue)
