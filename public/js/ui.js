// Icônes SVG
const icons = {
    cart: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>',
    user: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
    arrowLeft: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',
    card: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>',
    check: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>'
};

// Page d'accueil
function HomePage() {
    return `
        <div class="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 relative overflow-hidden">
            <!-- Fond décoratif -->
            <div class="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 float-animation"></div>
            <div class="absolute bottom-0 left-0 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 float-animation" style="animation-delay: 1s;"></div>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 float-animation" style="animation-delay: 2s;"></div>
            
            <div class="container mx-auto px-4 py-12 relative z-10">
                <header class="text-center mb-16">
                    <div class="inline-block glass-effect rounded-3xl shadow-2xl px-12 py-8 mb-8 border-4 border-white">
                        <div class="flex items-center justify-center mb-4">
                            <div class="w-16 h-12 mr-4 rounded overflow-hidden shadow-lg">
                                <div class="h-full flex">
                                    <div class="w-1/3 bg-green-600"></div>
                                    <div class="w-1/3 bg-red-600 flex items-center justify-center">
                                        <div class="text-yellow-400 text-2xl">★</div>
                                    </div>
                                    <div class="w-1/3 bg-yellow-400"></div>
                                </div>
                            </div>
                            <h1 class="text-6xl font-black">
                                <span class="text-green-600">Mets</span>
                                <span class="text-red-600"> du </span>
                                <span class="text-yellow-500">Cameroun</span>
                            </h1>
                        </div>
                        <p class="text-2xl font-bold bg-gradient-to-r from-green-600 via-red-600 to-yellow-500 bg-clip-text text-transparent">
                            Savourez l'authenticité des 10 régions
                        </p>
                    </div>
                    
                    <div class="flex justify-center gap-4 flex-wrap">
                        <button onclick="goToCart()" class="animated-gradient bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:shadow-2xl font-bold text-lg transform hover:scale-105 transition-all">
                            ${icons.cart}
                            Panier (${cart.length})
                        </button>
                        ${!user ? `
                            <button onclick="goToPage('register')" class="animated-gradient bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:shadow-2xl font-bold text-lg transform hover:scale-105 transition-all">
                                ${icons.user}
                                S'inscrire
                            </button>
                        ` : `
                            <button onclick="goToPage('account')" class="animated-gradient bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:shadow-2xl font-bold text-lg transform hover:scale-105 transition-all">
                                ${icons.user}
                                ${user.username}
                            </button>
                        `}
                    </div>
                </header>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${regions.map((region, index) => {
                        const gradients = [
                            'from-green-500 via-green-600 to-green-700',
                            'from-red-500 via-red-600 to-red-700',
                            'from-yellow-400 via-yellow-500 to-yellow-600'
                        ];
                        const borderColors = ['border-green-500', 'border-red-500', 'border-yellow-500'];
                        const shadowColors = ['shadow-green-200', 'shadow-red-200', 'shadow-yellow-200'];
                        return `
                            <div onclick="viewRegion(${region.id})" class="glass-effect rounded-2xl shadow-xl p-8 cursor-pointer card-hover border-l-8 ${borderColors[index % 3]} ${shadowColors[index % 3]}">
                                <div class="mb-4">
                                    <h2 class="text-3xl font-black mb-2 bg-gradient-to-r ${gradients[index % 3]} bg-clip-text text-transparent">
                                        ${region.name}
                                    </h2>
                                    <div class="h-1 w-20 bg-gradient-to-r ${gradients[index % 3]} rounded-full"></div>
                                </div>
                                <p class="text-gray-700 mb-6 font-semibold text-lg">
                                    🍽 ${region.plats.length} plats traditionnels
                                </p>
                                <button class="w-full bg-gradient-to-r ${gradients[index % 3]} text-white py-4 rounded-xl hover:shadow-xl font-bold text-lg transform hover:scale-105 transition-all">
                                    Découvrir →
                                </button>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </div>
    `;
}

// Page détail région
function DetailPage() {
    if (!selectedRegion) return '';
    
    return `
        <div class="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50">
            <div class="container mx-auto px-4 py-8">
                <button onclick="goToPage('home')" class="mb-8 flex items-center gap-3 text-green-700 hover:text-green-900 font-bold text-xl bg-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
                    ${icons.arrowLeft}
                    Retour
                </button>

                <div class="mb-12 glass-effect p-8 rounded-3xl shadow-2xl border-l-8 border-green-600">
                    <h1 class="text-5xl font-black mb-2">
                        <span class="bg-gradient-to-r from-green-600 via-red-600 to-yellow-500 bg-clip-text text-transparent">
                            Région ${selectedRegion.name}
                        </span>
                    </h1>
                    <p class="text-xl text-gray-600 font-semibold">Découvrez ${selectedRegion.plats.length} spécialités authentiques</p>
                </div>

                <div class="grid md:grid-cols-2 gap-8">
                    ${selectedRegion.plats.map((plat, index) => {
                        const gradients = [
                            'from-green-500 to-green-700',
                            'from-red-500 to-red-700',
                            'from-yellow-400 to-yellow-600'
                        ];
                        const textColors = ['text-green-700', 'text-red-700', 'text-yellow-600'];
                        const borderColors = ['border-green-500', 'border-red-500', 'border-yellow-500'];
                        return `
                            <div class="glass-effect rounded-2xl shadow-xl p-8 border-l-8 ${borderColors[index % 3]} card-hover">
                                <h3 class="text-3xl font-bold ${textColors[index % 3]} mb-3">${plat.nom}</h3>
                                <p class="text-gray-600 mb-6 text-lg leading-relaxed">${plat.description}</p>
                                <div class="flex justify-between items-center">
                                    <span class="text-3xl font-black text-yellow-600">${plat.prix} <span class="text-xl">FCFA</span></span>
                                    <button onclick='addToCartHandler(${JSON.stringify(plat)}, ${JSON.stringify(selectedRegion)})' class="bg-gradient-to-r ${gradients[index % 3]} text-white px-8 py-3 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                                        Ajouter +
                                    </button>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </div>
    `;
}

// Page panier
function CartPage() {
    return `
        <div class="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50">
            <div class="container mx-auto px-4 py-8">
                <button onclick="goToPage('home')" class="mb-8 flex items-center gap-3 text-green-700 hover:text-green-900 font-bold text-xl bg-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
                    ${icons.arrowLeft}
                    Retour
                </button>

                <h1 class="text-5xl font-black mb-12 text-center">
                    <span class="bg-gradient-to-r from-green-600 via-red-600 to-yellow-500 bg-clip-text text-transparent">
                        🛒 Mon Panier
                    </span>
                </h1>

                ${cart.length === 0 ? `
                    <div class="glass-effect rounded-3xl shadow-2xl p-16 text-center border-8 border-yellow-400">
                        <div class="text-8xl mb-6">🍽</div>
                        <p class="text-2xl text-gray-600 font-bold">Votre panier est vide</p>
                        <p class="text-lg text-gray-500 mt-2">Commencez à découvrir nos délices!</p>
                    </div>
                ` : `
                    <div class="glass-effect rounded-3xl shadow-2xl p-8 mb-8 border-l-8 border-green-600">
                        ${cart.map((item, index) => `
                            <div class="flex justify-between items-center py-6 border-b-2 border-gray-200 last:border-b-0">
                                <div>
                                    <h3 class="text-2xl font-bold text-green-700">${item.nom}</h3>
                                    <p class="text-red-600 font-bold text-lg">📍 ${item.region}</p>
                                </div>
                                <span class="text-2xl font-black text-yellow-600">${item.prix} FCFA</span>
                            </div>
                        `).join('')}
                        <div class="flex justify-between items-center pt-8 mt-4 border-t-4 border-gray-300">
                            <span class="text-3xl font-black text-green-800">Total:</span>
                            <span class="text-5xl font-black bg-gradient-to-r from-green-600 via-red-600 to-yellow-500 bg-clip-text text-transparent">${getTotalPrice()} FCFA</span>
                        </div>
                    </div>

                    <button onclick="goToPage(${user ? "'payment'" : "'register'"})" class="w-full animated-gradient bg-gradient-to-r from-green-500 via-red-500 to-yellow-500 text-white py-6 rounded-2xl text-2xl font-black hover:shadow-2xl transform hover:scale-105 transition-all">
                        ${user ? '💳 Procéder au paiement' : '✨ S\'inscrire pour acheter'}
                    </button>
                `}
            </div>
        </div>
    `;
}
// Page inscription
function RegisterPage() {
    return `
        <div class="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 flex items-center justify-center p-4">
            <div class="glass-effect rounded-3xl shadow-2xl p-10 max-w-md w-full border-t-8 border-green-600">
                <h2 class="text-4xl font-black mb-8 text-center">
                    <span class="bg-gradient-to-r from-green-600 via-red-600 to-yellow-500 bg-clip-text text-transparent">
                        ✨ Inscription
                    </span>
                </h2>
                <div class="space-y-5">
                    <input
                        type="text"
                        placeholder="👤 Nom d'utilisateur"
                        id="username"
                        onchange="updateFormData('username', this.value)"
                        class="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-green-600 text-lg font-semibold"
                    />
                    <input
                        type="email"
                        placeholder="📧 Email"
                        id="email"
                        onchange="updateFormData('email', this.value)"
                        class="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-red-600 text-lg font-semibold"
                    />
                    <input
                        type="password"
                        placeholder="🔒 Mot de passe"
                        id="password"
                        onchange="updateFormData('password', this.value)"
                        class="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-yellow-500 text-lg font-semibold"
                    />
                    <button
                        onclick="handleRegister()"
                        class="w-full animated-gradient bg-gradient-to-r from-green-500 via-red-500 to-yellow-500 text-white py-4 rounded-xl font-black text-xl hover:shadow-2xl transform hover:scale-105 transition-all"
                    >
                        S'inscrire
                    </button>
                    <button
                        onclick="goToPage('home')"
                        class="w-full bg-gray-300 text-gray-700 py-4 rounded-xl font-bold text-lg hover:bg-gray-400 transition-all"
                    >
                        Annuler
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Page compte utilisateur
function AccountPage() {
    return `
        <div class="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50">
            <div class="container mx-auto px-4 py-8">
                <button onclick="goToPage('home')" class="mb-8 flex items-center gap-3 text-green-700 hover:text-green-900 font-bold text-xl bg-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
                    ${icons.arrowLeft}
                    Retour
                </button>

                <div class="glass-effect rounded-3xl shadow-2xl p-10 max-w-3xl mx-auto border-t-8 border-green-600">
                    <h2 class="text-4xl font-black mb-10 text-center">
                        <span class="bg-gradient-to-r from-green-600 via-red-600 to-yellow-500 bg-clip-text text-transparent">
                            👤 Mon Compte
                        </span>
                    </h2>
                    <div class="space-y-6">
                        <div class="p-6 bg-gradient-to-r from-green-100 to-green-50 rounded-2xl border-l-8 border-green-600 shadow-lg">
                            <p class="text-gray-600 font-bold text-lg mb-2">👤 Nom d'utilisateur</p>
                            <p class="text-2xl font-black text-green-700">${user?.username}</p>
                        </div>
                        <div class="p-6 bg-gradient-to-r from-red-100 to-red-50 rounded-2xl border-l-8 border-red-600 shadow-lg">
                            <p class="text-gray-600 font-bold text-lg mb-2">📧 Email</p>
                            <p class="text-2xl font-black text-red-700">${user?.email}</p>
                        </div>
                        <div class="p-6 bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-2xl border-l-8 border-yellow-500 shadow-lg">
                            <p class="text-gray-600 font-bold text-lg mb-2">🆔 Identifiant</p>
                            <p class="text-2xl font-black text-yellow-700">${user?.id}</p>
                        </div>
                        <div class="p-6 bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-2xl border-l-8 border-yellow-500 shadow-lg">
                            <p class="text-gray-600 font-bold text-lg mb-2">🔒 Mot de passe</p>
                            <p class="text-2xl font-black text-yellow-700">••••••••</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Page paiement
function PaymentPage() {
    return `
        <div class="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 flex items-center justify-center p-4">
            <div class="glass-effect rounded-3xl shadow-2xl p-10 max-w-md w-full border-t-8 border-red-600">
                <h2 class="text-4xl font-black mb-6 text-center flex flex-col items-center gap-4">
                    <span class="text-red-600">${icons.card}</span>
                    <span class="bg-gradient-to-r from-green-600 via-red-600 to-yellow-500 bg-clip-text text-transparent">
                        💳 Paiement
                    </span>
                </h2>
                <div class="mb-8 p-6 bg-gradient-to-r from-green-100 via-red-50 to-yellow-100 rounded-2xl border-l-8 border-green-600 shadow-lg">
                    <p class="text-gray-600 font-bold text-lg mb-2">Montant à payer</p>
                    <p class="text-4xl font-black bg-gradient-to-r from-green-600 via-red-600 to-yellow-500 bg-clip-text text-transparent">${getTotalPrice()} FCFA</p>
                </div>
                <div class="space-y-5">
                    <input
                        type="text"
                        placeholder="💳 Numéro de carte prépayée"
                        id="cardNumber"
                        onchange="updateFormData('cardNumber', this.value)"
                        class="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-green-600 text-lg font-semibold"/>
                    <input
                        type="text"
                        placeholder="👤 Nom sur la carte"
                        id="cardName"
                        onchange="updateFormData('cardName', this.value)"
                        class="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-red-600 text-lg font-semibold"/>
                    <button
                        onclick="handlePayment()"
                        class="w-full animated-gradient bg-gradient-to-r from-green-500 via-red-500 to-yellow-500 text-white py-4 rounded-xl font-black text-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                        ✓ Confirmer le paiement
                    </button>
                    <button
                        onclick="goToPage('cart')"
                         class="w-full bg-gray-300 text-gray-700 py-4 rounded-xl font-bold text-lg hover:bg-gray-400 transition-all">
                        Retour au panier
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Page confirmation
function ConfirmationPage() {
    return `
        <div class="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 flex items-center justify-center p-4">
            <div class="glass-effect rounded-3xl shadow-2xl p-12 max-w-md w-full text-center border-t-8 border-yellow-500">
                <div class="w-28 h-28 animated-gradient bg-gradient-to-r from-green-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                    ${icons.check}
                </div>
                <h2 class="text-4xl font-black mb-4">
                    <span class="bg-gradient-to-r from-green-600 via-red-600 to-yellow-500 bg-clip-text text-transparent">
                        Commande confirmée! 🎉
                    </span>
                </h2>
                <p class="text-2xl text-gray-600 font-bold mb-8">Merci pour votre achat</p>
                <div class="bg-gradient-to-r from-green-100 via-red-50 to-yellow-100 p-6 rounded-2xl mb-8 border-l-8 border-green-600 shadow-lg">
                    <p class="text-gray-600 mb-3 font-bold text-lg">💰 Montant payé</p>
                    <p class="text-4xl font-black bg-gradient-to-r from-green-600 via-red-600 to-yellow-500 bg-clip-text text-transparent">${getTotalPrice()} FCFA</p>
                </div>
                <button
                    onclick="confirmAndGoHome()"
                    class="w-full animated-gradient bg-gradient-to-r from-green-500 via-red-500 to-yellow-500 text-white py-5 rounded-2xl font-black text-xl hover:shadow-2xl transform hover:scale-105 transition-all"
                >
                    🏠 Retour à l'accueil
                </button>
            </div>
        </div>
    `;
}