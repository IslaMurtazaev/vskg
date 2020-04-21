from django.db import models
from django.utils import timezone

from api.common.custom_models import JSONField


class Category(models.Model):
    name = models.CharField(max_length=265)
    created_at = models.DateTimeField(default=timezone.now)
    photo_url = models.URLField(max_length=1000, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "categories"


class Type(models.Model):
    name = models.CharField(max_length=265)
    type = models.CharField(max_length=265)

    def __str__(self):
        return self.name


class Field(models.Model):
    type = models.ForeignKey(Type, related_name='fields', on_delete=models.DO_NOTHING)
    category = models.ForeignKey(Category, related_name='fields', on_delete=models.DO_NOTHING)
    name = models.CharField(max_length=265)

    def __str__(self):
        return self.name


class Product(models.Model):
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    name = models.CharField(max_length=265)
    photo_url = models.URLField(max_length=1000)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name


class FieldValue(models.Model):
    product = models.ForeignKey(Product, related_name='field_values', on_delete=models.DO_NOTHING)
    field = models.ForeignKey(Field, related_name='field_values', on_delete=models.DO_NOTHING)
    data = JSONField(null=True, blank=True)

    def __str__(self):
        return str(self.data)

