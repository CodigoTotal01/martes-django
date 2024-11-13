# store/migrations/0012_add_brand_and_charging_time_to_product.py

from django.db import migrations, models

class Migration(migrations.Migration):

    dependencies = [
        ('store', '0011_remove_product_brand_remove_product_charging_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='brand',
            field=models.CharField(default='', max_length=25),
        ),
        migrations.AddField(
            model_name='product',
            name='charging_time',
            field=models.FloatField(default=0, blank=True, null=True),
        ),
    ]
