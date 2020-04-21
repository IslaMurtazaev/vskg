from rest_framework import serializers
from api.models import Category, Product, FieldValue, Type


class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    def to_representation(self, obj):
        """
        Override ModelSerializer.to_representation function to include fields_data in product
        """
        data = super().to_representation(obj)
        field_values = FieldValue.objects.filter(product=data['id'])
        fields_data = [
            {**field_value.data, 'name': field_value.field.name, 'type': field_value.field.type.name}
            for field_value in field_values
        ]
        data['fields'] = fields_data
        return data

    class Meta:
        model = Product
        fields = ('id', 'category', 'name', 'photo_url', 'created_at')


class CategoryListSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True)

    class Meta:
        model = Category
        fields = ('id', 'name', 'created_at', 'photo_url', 'products')

