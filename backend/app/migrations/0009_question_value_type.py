# Generated by Django 4.2.10 on 2024-04-08 14:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0008_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="question",
            name="value_type",
            field=models.CharField(default="int", max_length=100),
        ),
    ]
