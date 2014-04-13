from django.db import models
from django.contrib.auth.models import User

class Pattern(models.Model):
    name = models.CharField(max_length=30)
    code = models.TextField()
    size = models.IntegerField() # Total number of squares
    creationDate = models.DateTimeField(auto_now=False, auto_now_add=True)
    owner = models.ForeignKey(User)
