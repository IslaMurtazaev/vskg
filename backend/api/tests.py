import unittest

from django.test import Client


class CategoriesEndpointTest(unittest.TestCase):

    def setUp(self):
        self.client = Client()

    def test_api_v1_categories(self):
        response = self.client.get('/api/v1/categories/')
        self.assertEqual(response.status_code, 200)
