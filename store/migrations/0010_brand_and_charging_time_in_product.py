from django.db import migrations, models

class Migration(migrations.Migration):

    dependencies = [
        ('store', '0009_alter_customer_id_alter_order_id_alter_orderitem_id_and_more'),
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
