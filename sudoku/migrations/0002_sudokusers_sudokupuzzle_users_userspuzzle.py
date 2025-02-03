# Generated by Django 5.1.5 on 2025-01-24 19:25

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sudoku', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='SudokUsers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('display_name', models.CharField(max_length=512)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='sudokupuzzle',
            name='users',
            field=models.ManyToManyField(blank=True, related_name='puzzles', to='sudoku.sudokusers'),
        ),
        migrations.CreateModel(
            name='UsersPuzzle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('puzzle', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sudoku.sudokupuzzle')),
                ('sUser', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sudoku.sudokusers')),
            ],
        ),
    ]
