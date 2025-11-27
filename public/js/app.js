// État de l'application
let currentPage = 'home';
let selectedRegion = null;
let cart = [];
let user = null;
let formData = {
    username: '',
    email: '',
    password: '',
    cardNumber: '',
    cardName: ''
};

// Fonctions utilitaires
function addToCart(plat, region) {
    cart.push({ ...plat, region: region.name });
    render();
}

function getTotalPrice() {
    return cart.reduce((total, item) => total + item.prix, 0);
}

function handleRegister() {
    if (formData.username && formData.email && formData.password) {
        user = {
            username: formData.username,
            email: formData.email,
            id: 'USER' + Math.random().toString(36).substr(2, 9).toUpperCase(),
            password: formData.password
        };
        currentPage = 'account';
        render();
    } else {
        alert('Veuillez remplir tous les champs');
    }
}

function handlePayment() {
    if (formData.cardNumber && formData.cardName) {
        currentPage = 'confirmation';
        render();
    } else {
        alert('Veuillez remplir les informations de paiement');
    }
}

// Fonctions de navigation
function goToPage(page) {
    currentPage = page;
    render();
}

function goToCart() {
    currentPage = 'cart';
    render();
}

function viewRegion(regionId) {
    selectedRegion = regions.find(r => r.id === regionId);
    currentPage = 'detail';
    render();
}

function addToCartHandler(plat, region) {
    addToCart(plat, region);
    alert('${plat.nom} ajouté au panier!');
}

function updateFormData(field, value) {
    formData[field] = value;
}

function confirmAndGoHome() {
    cart = [];
    currentPage = 'home';
    render();
}

// Fonction de rendu principal
function render() {
    const app = document.getElementById('app');
    let html = '';

    switch(currentPage) {
        case 'home':
            html = HomePage();
            break;
        case 'detail':
            html = DetailPage();
            break;
        case 'cart':
            html = CartPage();
            break;
        case 'register':
            html = RegisterPage();
            break;
        case 'account':
            html = AccountPage();
            break;
        case 'payment':
            html = PaymentPage();
            break;
        case 'confirmation':
            html = ConfirmationPage();
            break;
    }

    app.innerHTML = html;
    window.scrollTo(0, 0);
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    render();
});

// Charger et afficher les mets au démarrage de la page
async function init() {
    console.log('🚀 Démarrage de l\'application...');
    
    // Afficher un message de chargement
    showLoading();
    
    // Récupérer les mets depuis le backend
    const mets = await getMets();
    
    // Cacher le message de chargement
    hideLoading();
    
    // Afficher les mets sur la page
    if (mets && mets.length > 0) {
        afficherMets(mets);
    } else {
        showError('Aucun met trouvé ou erreur de connexion au backend.');
    }
}

// Afficher les mets dans l'interface
function afficherMets(mets) {
    const container = document.getElementById('mets-container');
    
    if (!container) {
        console.error('❌ Container #mets-container non trouvé dans le HTML !');
        return;
    }
    
    // Vider le container
    container.innerHTML = '';
    
    // Créer une carte pour chaque met
    mets.forEach(met => {
        const card = creerCarteMet(met);
        container.appendChild(card);
    });
    
    console.log('✅ ${mets.length} mets affichés');
}

// Créer une carte HTML pour un met
function creerCarteMet(met) {
    const card = document.createElement('div');
    card.className = 'met-card';
    card.setAttribute('data-id', met.id);
    
    // Adapter selon la structure de vos données backend
    card.innerHTML = `
        <div class="met-image">
            <img src="${met.image || 'images/placeholder.jpg'}" alt="${met.nom}" loading="lazy">
        </div>
        <div class="met-info">
            <h3>${met.nom}</h3>
            <p class="met-description">${met.description || 'Délicieux plat camerounais'}</p>
            <p class="met-prix">${met.prix} FCFA</p>
            ${met.region ? <span class="met-region">${met.region}</span> : ''}
        </div> 
        <button class="btn-details" onclick="voirDetails(${met.id})">
            Voir détails
        </button>
    `;
    
    return card;
}

// Afficher les détails d'un met
async function voirDetails(id) {
    const met = await getMetById(id);
    
    if (met) {
        // Afficher dans une modale ou rediriger vers une page de détails
        console.log('Détails du met:', met);
        // TODO: Implémenter l'affichage des détails (modal, page, etc.)
        alert('Détails de ${met.nom}\n\n${met.description}\n\nPrix: ${met.prix} FCFA');
    }
}

// Fonction de recherche
async function rechercherMets(event) {
    const query = event.target.value.trim();
    
    if (query.length > 2) {
        showLoading();
        const resultats = await searchMets(query);
        hideLoading();
        afficherMets(resultats);
    } else if (query.length === 0) {
        // Si la recherche est vide, afficher tous les mets
        init();
    }
}

// Afficher un message de chargement
function showLoading() {
    const container = document.getElementById('mets-container');
    if (container) {
        container.innerHTML = '<div class="loading">⏳ Chargement des mets...</div>';
    }
}

// Cacher le message de chargement
function hideLoading() {
    // Le container sera rempli avec les mets
}

// Afficher un message d'erreur
function showError(message) {
    const container = document.getElementById('mets-container');
    if (container) {
        container.innerHTML = <div class="error">❌ ${message}</div>;
    }
}

// Démarrer l'application quand la page est chargée
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Page chargée, initialisation...');
    init();
    
    // Ajouter l'écouteur de recherche si le champ existe
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', rechercherMets);
    }
});