from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(unique=True)
    mobile = models.CharField(max_length=50)
    department = models.CharField(max_length=100)
    course = models.CharField(max_length=100)

    def __str__(self):
        return self.name
