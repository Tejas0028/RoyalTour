# Generated by Django 4.1.7 on 2023-03-12 06:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Tours', '0003_delete_city_delete_country'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='destination',
            name='visa_required',
        ),
        migrations.AddField(
            model_name='destination',
            name='itinerary',
            field=models.TextField(default=1, help_text='Enter a description of the destination.'),
            preserve_default=False,
        ),
    ]
