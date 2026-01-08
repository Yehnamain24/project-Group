from rest_framework.routers import DefaultRouter
from .views import MetViewSet,regionViewset,CommandeViewSet,StatistiqueViewSet,registerViewset,contactViewset

router = DefaultRouter()
router.register(r"mets", MetViewSet)
router.register(r"region", regionViewset)
router.register(r'commandes', CommandeViewSet, basename='commande')
router.register(r'statistiques', StatistiqueViewSet, basename='statistiques')
router.register(r'register',registerViewset,basename='register')
router.register(r'contact',contactViewset,basename='contact')
urlpatterns = router.urls
