
from rest_framework import serializers
from .models import Met,Region,Commande,Statistique,contact
from django.contrib.auth.models import User

class registerSerializer(serializers.ModelSerializer):
    password=serializers.CharField(write_only=True,required=True)
    password2=serializers.CharField(write_only=True,required=True)
    class Meta:
        model=User
        fields=["username","password","password2","email","first_name","last_name"]
    def validate(self,data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError("mots de passe pas identiques")
        return data
    def create(self, validated_data):
        validated_data.pop('password2')
        user=User.objects.create_user(**validated_data)
        return user

class MetSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Met
        fields = ['id',"nom",'prix',"region","stock"]

class regionSerializer(serializers.ModelSerializer):
    class Meta:
        model=Region
        fields=['id','nom']

class CommandeSerializer(serializers.ModelSerializer):
    met_nom = serializers.CharField(source='met.nom', read_only=True)
    region_nom = serializers.CharField(source='met.region.nom', read_only=True)
    utilisateur_nom = serializers.CharField(source='utilisateur.username', read_only=True)

    class Meta:
        model = Commande
        fields = ['id', 'met', 'met_nom', 'region_nom', 'utilisateur', 'utilisateur_nom', 'quantite', 'total', 'date_commande']
        read_only_fields = ['total', 'date_commande', 'met_nom', 'region_nom', 'utilisateur_nom']
        
class contactSerializer(serializers.ModelSerializer):
    class Meta:
        model=contact
        fields=['id','nom','prenom','telephone','email','message']

class StatistiqueSerializer(serializers.ModelSerializer):
    met_nom = serializers.CharField(source='met.nom', read_only=True)
    region_nom = serializers.CharField(source='region.nom', read_only=True)

    class Meta:
        model = Statistique
        fields = ['id', 'met', 'met_nom', 'region', 'region_nom', 'total_commandes', 'chiffre_affaires']