# Generated by Django 4.2.10 on 2024-05-05 19:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0014_question_question_label"),
    ]

    operations = [
        migrations.AddField(
            model_name="survey",
            name="survey_notice",
            field=models.TextField(default=""),
        ),
    ]
