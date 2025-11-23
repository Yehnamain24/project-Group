from django.db import models
from django.contrib.auth.models import User



class Region(models.Model):
    nom = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.nom


class Met(models.Model):
    region = models.ForeignKey(Region, on_delete=models.CASCADE)
    nom = models.CharField(max_length=100)
    prix = models.PositiveIntegerField()
    stock=models.PositiveIntegerField(default=10)

    def __str__(self):
        return self.nom

class Commande(models.Model):
    met = models.ForeignKey(Met, on_delete=models.CASCADE, related_name='commandes')
    utilisateur = models.ForeignKey(User, on_delete=models.CASCADE, related_name='commandes')
    quantite = models.PositiveIntegerField(default=1)
    total = models.PositiveIntegerField()
    date_commande = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.utilisateur.username} - {self.met.nom} - {self.quantite}"
class contact(models.Model):
    nom=models.CharField(max_length=200)
    prenom=models.CharField(max_length=200)
    telephone=models.IntegerField()
    email=models.EmailField()
    message=models.TextField()
    
class Statistique(models.Model):
    met = models.ForeignKey(Met, on_delete=models.CASCADE, related_name='stats')
    region = models.ForeignKey(Region, on_delete=models.CASCADE, related_name='stats')
    total_commandes = models.PositiveIntegerField(default=0)
    chiffre_affaires = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.met.nom} - {self.region.nom}"

        