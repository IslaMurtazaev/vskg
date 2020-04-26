from django.contrib import admin
from api.models import Category, Type, Field, Product, FieldValue


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at', 'photo_url')
    list_filter = ('created_at',)
    search_fields = ('name', 'created_at')
    date_hierarchy = 'created_at'
    ordering = ('name', 'created_at')


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at', 'category', 'photo_url')
    list_filter = ('created_at',)
    search_fields = ('name', 'created_at')
    raw_id_fields = ('category',)
    date_hierarchy = 'created_at'
    ordering = ('name', 'created_at')


@admin.register(Type)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'type')
    list_filter = ('type',)
    search_fields = ('name', 'type')
    ordering = ('name', 'type')


@admin.register(Field)
class FieldAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'type')
    list_filter = ('category', 'type')
    search_fields = ('name', 'category', 'type')
    raw_id_fields = ('type', 'category')
    ordering = ('name', 'category', 'type')


@admin.register(FieldValue)
class FieldValueAdmin(admin.ModelAdmin):
    list_display = ('product', 'field', 'data')
    search_fields = ('product', 'field', 'data')
    raw_id_fields = ('product', 'field')
    ordering = ('product',)
