from django.db import models
from django.contrib.auth.models import User

class LabsUser(User):
    # Add any new Labs-specific properties here
    # Redo this using the UserProfile design
    authentigrid = models.CharField(blank=True, max_length=500)
