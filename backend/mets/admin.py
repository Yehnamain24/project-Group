from django.contrib import admin
from .models import Met,Region

@admin.register(Met)
class MetAdmin(admin.ModelAdmin):
    list_display = ("id", "nom", "prix",'region')   # colonnes affichées
    search_fields = ("nom",'region')               # barre de recherche
    list_filter = ("prix",)                # filtre par prix


@admin.register(Region)
class regionAdmin(admin.ModelAdmin):
    list_display = ("id", "nom")   # colonnes affichées
    search_fields = ("nom",)               # barre de recherche
    list_filter = ("nom",)

# Register your models here.
