from django.shortcuts import render
from rest_framework import viewsets
from .models import Met,Region,Commande,Statistique,contact
from .serializers import MetSerializer,regionSerializer,CommandeSerializer,StatistiqueSerializer,registerSerializer,contactSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly,AllowAny,IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework .decorators import action,api_view,permission_classes
from django .utils import timezone
from django.db.models import Count

class registerViewset(viewsets.ModelViewSet):
      queryset=User.objects.all()
      serializer_class=registerSerializer
      permission_classes=[AllowAny]


class MetViewSet(viewsets.ModelViewSet):
    queryset = Met.objects.all()
    serializer_class = MetSerializer
    permission_classes = [AllowAny]

class regionViewset(viewsets.ModelViewSet):
    queryset = Region.objects.all()
    serializer_class = regionSerializer
    permission_classes = [AllowAny]

class contactViewset(viewsets.ModelViewSet):
    queryset=contact.objects.all()
    serializer_class=contactSerializer
    permission_classes=[AllowAny]

class CommandeViewSet(viewsets.ModelViewSet):
    queryset = Commande.objects.all()
    serializer_class = CommandeSerializer
    permission_classes = [AllowAny]

    
    def create(self, request, *args, **kwargs):
        utilisateur = request.user
        met_id = request.data.get('met')
        quantite = int(request.data.get('quantite', 1))

        # Vérifier que le Met existe
        try:
            met = Met.objects.get(id=met_id)
        except Met.DoesNotExist:
            return Response({"error": "Met inexistant."}, status=404)

        # Vérifier le stock
        if met.stock < quantite:
            return Response({"error": "Stock insuffisant."}, status=400)

        # Vérifier si l'utilisateur a déjà commandé ce met
        if Commande.objects.filter(utilisateur=utilisateur, met=met).exists():
            return Response({"error": "Vous avez déjà commandé ce met."}, status=400)

        # Calcul total
        total = met.prix * quantite

        # Créer la commande
        commande = Commande.objects.create(
            met=met,
            utilisateur=utilisateur,
            quantite=quantite,
            total=total
        )

        # Mettre à jour le stock
        met.stock -= quantite
        met.save()

        # 🔹 Mettre à jour les statistiques
        stat, created = Statistique.objects.get_or_create(
            met=met,
            region=met.region,
            defaults={'total_commandes': 0, 'chiffre_affaires': 0}
        )
        stat.total_commandes += quantite
        stat.chiffre_affaires += total
        stat.save()

        serializer = CommandeSerializer(commande)
        return Response(serializer.data, status=201)
    
class StatistiqueViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Statistique.objects.all()
    serializer_class = StatistiqueSerializer
    permission_classes = [AllowAny]

    @action(detail=False, methods=['get'])
    def globales(self, request):
        stats = self.get_queryset()
        total_commandes = sum(s.total_commandes for s in stats)
        total_montant = sum(s.chiffre_affaires for s in stats)
        return Response({
            "total_commandes": total_commandes,
            "total_montant": total_montant
        })