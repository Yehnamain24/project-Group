// Données des régions et plats du Cameroun
const regions = [
    {
        id: 1,
        name: 'Adamaoua',
        plats: [
            { id: 1, nom: 'Nyembwe', description: 'Sauce aux noix de palme avec viande', prix: 2500 },
            { id: 2, nom: 'Bouilli de bœuf', description: 'Bœuf bouilli avec légumes', prix: 3000 },
            { id: 3, nom: 'Kossam', description: 'Couscous de maïs avec sauce', prix: 1800 },
            { id: 4, nom: 'Bouillie de mil', description: 'Bouillie traditionnelle sucrée', prix: 1200 },
            { id: 5, nom: 'Kilichi', description: 'Viande séchée épicée', prix: 3500 },
            { id: 6, nom: 'Ndambe', description: 'Haricots sauce tomate', prix: 1500 },
            { id: 7, nom: 'Mbanga soup', description: 'Soupe de noix de palme', prix: 2200 },
            { id: 8, nom: 'Sauce gombo', description: 'Gombo avec viande ou poisson', prix: 2000 }
        ]
    },
    {
        id: 2,
        name: 'Centre',
        plats: [
            { id: 9, nom: 'Ndolé', description: 'Feuilles de ndolé avec arachides et viande', prix: 2500 },
            { id: 10, nom: 'Koki', description: 'Gâteau de haricots à la vapeur', prix: 1500 },
            { id: 11, nom: 'Kondré', description: 'Banane plantain pilée avec sauce', prix: 2000 },
            { id: 12, nom: 'Mbongo Tchobi', description: 'Sauce noire épicée avec poisson', prix: 3000 },
            { id: 13, nom: 'Kpem', description: 'Pâte de maïs fermentée', prix: 1000 },
            { id: 14, nom: 'Sanga', description: 'Maïs pilé avec haricots', prix: 1800 },
            { id: 15, nom: 'Kwacoco', description: 'Taro râpé cuit à la vapeur', prix: 2200 },
            { id: 16, nom: 'Poulet DG', description: 'Poulet Directeur Général', prix: 4500 },
            { id: 17, nom: 'Okok', description: 'Feuilles de Gnetum avec arachides', prix: 2500 }
        ]
    },
    {
        id: 3,
        name: 'Est',
        plats: [
            { id: 18, nom: 'Kwem', description: 'Feuilles de kwem avec poisson fumé', prix: 2200 },
            { id: 19, nom: 'Bobolo', description: 'Bâton de manioc fermenté', prix: 800 },
            { id: 20, nom: 'Miondo', description: 'Bâton de manioc cuit', prix: 1000 },
            { id: 21, nom: 'Sala sala', description: 'Feuilles de manioc pilées', prix: 2000 },
            { id: 22, nom: 'Kpwem', description: 'Sauce aux feuilles avec viande de brousse', prix: 3500 },
            { id: 23, nom: 'Poisson fumé braisé', description: 'Poisson fumé grillé aux épices', prix: 3000 },
            { id: 24, nom: 'Sangue', description: 'Chenilles grillées', prix: 2500 },
            { id: 25, nom: 'Folong', description: 'Feuilles d\'amarante en sauce', prix: 1800 }
        ]
    },
    {
        id: 4,
        name: 'Extrême-Nord',
        plats: [
            { id: 26, nom: 'Pâte de mil', description: 'Pâte accompagnée de sauce gombo', prix: 1500 },
            { id: 27, nom: 'Tchobi', description: 'Viande grillée épicée', prix: 3500 },
            { id: 28, nom: 'Koki beans', description: 'Haricots cuits à la vapeur', prix: 1200 },
            { id: 29, nom: 'Boule de maïs', description: 'Boule avec sauce arachide', prix: 1800 },
            { id: 30, nom: 'Brochettes', description: 'Viande de bœuf grillée', prix: 2500 },
            { id: 31, nom: 'Kilishi', description: 'Viande séchée au soleil', prix: 4000 },
            { id: 32, nom: 'Abara', description: 'Haricots enveloppés', prix: 1500 },
            { id: 33, nom: 'Couscous', description: 'Couscous traditionnel', prix: 2000 },
            { id: 34, nom: 'Fura', description: 'Boules de mil avec lait caillé', prix: 1000 }
        ]
    },
    {
        id: 5,
        name: 'Littoral',
        plats: [
            { id: 35, nom: 'Mbongo Tchobi', description: 'Poisson en sauce noire épicée', prix: 3500 },
            { id: 36, nom: 'Ekwang', description: 'Taro râpé dans feuilles', prix: 2800 },
            { id: 37, nom: 'Ndolé', description: 'Plat national aux arachides', prix: 2500 },
            { id: 38, nom: 'Koki corn', description: 'Maïs cuit à la vapeur', prix: 1500 },
            { id: 39, nom: 'Kwacoco pistache', description: 'Taro avec arachides', prix: 2200 },
            { id: 40, nom: 'Poisson braisé', description: 'Poisson grillé sauce pimentée', prix: 4000 },
            { id: 41, nom: 'Miondo', description: 'Bâton de manioc', prix: 1000 },
            { id: 42, nom: 'Sauce jaune', description: 'Sauce tomate aux légumes', prix: 2000 },
            { id: 43, nom: 'Crabe sauce', description: 'Crabes en sauce pimentée', prix: 5000 },
            { id: 44, nom: 'Crevettes grillées', description: 'Crevettes épicées', prix: 4500 }
        ]
    },
    {
        id: 6,
        name: 'Nord',
        plats: [
            { id: 45, nom: 'Kossam', description: 'Boule de maïs avec sauce', prix: 1500 },
            { id: 46, nom: 'Sangha', description: 'Viande séchée épicée', prix: 4000 },
            { id: 47, nom: 'Bidia', description: 'Pâte de maïs fermentée', prix: 1200 },
            { id: 48, nom: 'Bouillie de mil sucré', description: 'Bouillie traditionnelle', prix: 1000 },
            { id: 49, nom: 'Sauce gombo', description: 'Gombo frais avec viande', prix: 2000 },
            { id: 50, nom: 'Tchoukou', description: 'Viande grillée du Nord', prix: 3000 },
            { id: 51, nom: 'Ndambe', description: 'Haricots en sauce', prix: 1800 }
        ]
    },
    {
        id: 7,
        name: 'Nord-Ouest',
        plats: [
            { id: 52, nom: 'Achu soup', description: 'Soupe jaune avec viande', prix: 2800 },
            { id: 53, nom: 'Fufu corn', description: 'Fufu de maïs', prix: 1200 },
            { id: 54, nom: 'Njama Njama', description: 'Légumes huckleberry', prix: 2000 },
            { id: 55, nom: 'Kati Kati', description: 'Poulet grillé épicé', prix: 4000 },
            { id: 56, nom: 'Eru', description: 'Feuilles Eru avec viande', prix: 2500 },
            { id: 57, nom: 'Plantain frit', description: 'Banane plantain frite', prix: 1500 },
            { id: 58, nom: 'Pepper soup', description: 'Soupe pimentée', prix: 2200 },
            { id: 59, nom: 'Kwacoco', description: 'Taro avec coco yam', prix: 2000 },
            { id: 60, nom: 'Corn fufu with okra', description: 'Fufu maïs et gombo', prix: 1800 }
        ]
    },
    {
        id: 8,
        name: 'Ouest',
        plats: [
            { id: 61, nom: 'Taro', description: 'Taro pilé avec sauce jaune', prix: 2000 },
            { id: 62, nom: 'Nkui', description: 'Sauce aux feuilles nkui', prix: 2500 },
            { id: 63, nom: 'Koki beans', description: 'Haricots à la vapeur', prix: 1500 },
            { id: 64, nom: 'Sauce arachide', description: 'Sauce aux cacahuètes', prix: 2200 },
            { id: 65, nom: 'Folon', description: 'Feuilles vertes en sauce', prix: 1800 },
            { id: 66, nom: 'Macabo', description: 'Tubercule cuit', prix: 1200 },
            { id: 67, nom: 'Kondre', description: 'Banane plantain pilée', prix: 2000 },
            { id: 68, nom: 'Haricot sauce tomate', description: 'Haricots rouges', prix: 1600 },
            { id: 69, nom: 'Poulet braisé', description: 'Poulet grillé bamiléké', prix: 3500 },
            { id: 70, nom: 'Sauce gombo frais', description: 'Gombo traditionnel', prix: 1800 }
        ]
    },
    {
        id: 9,
        name: 'Sud',
        plats: [
            { id: 71, nom: 'Bâton de manioc', description: 'Miondo avec sauce', prix: 1000 },
            { id: 72, nom: 'Poisson braisé', description: 'Poisson grillé épicé', prix: 3500 },
            { id: 73, nom: 'Bobolo', description: 'Manioc fermenté', prix: 800 },
            { id: 74, nom: 'Kwem', description: 'Feuilles en sauce', prix: 2200 },
            { id: 75, nom: 'Okok', description: 'Feuilles Gnetum', prix: 2500 },
            { id: 76, nom: 'Kpwem', description: 'Sauce feuilles épicées', prix: 2300 },
            { id: 77, nom: 'Poisson fumé', description: 'Poisson fumé traditionnel', prix: 3000 },
            { id: 78, nom: 'Nyembe', description: 'Légumes forestiers', prix: 2000 },
            { id: 79, nom: 'Sala-sala', description: 'Feuilles de manioc', prix: 1800 },
            { id: 80, nom: 'Viande de brousse', description: 'Gibier en sauce', prix: 4500 }
        ]
    },
    {
        id: 10,
        name: 'Sud-Ouest',
        plats: [
            { id: 81, nom: 'Eru', description: 'Feuilles Eru avec viande', prix: 2800 },
            { id: 82, nom: 'Water fufu', description: 'Fufu de manioc', prix: 1500 },
            { id: 83, nom: 'Ekwang', description: 'Coco yam râpé', prix: 2500 },
            { id: 84, nom: 'Ndole', description: 'Plat aux arachides', prix: 2500 },
            { id: 85, nom: 'Koki corn', description: 'Maïs à la vapeur', prix: 1200 },
            { id: 86, nom: 'Kwacoco pistache', description: 'Taro aux arachides', prix: 2200 },
            { id: 87, nom: 'Achu soup', description: 'Soupe jaune camerounaise', prix: 2800 },
            { id: 88, nom: 'Plantain ripe', description: 'Banane plantain mûre bouillie', prix: 1000 },
            { id: 89, nom: 'Pepper soup', description: 'Soupe très épicée', prix: 2500 },
            { id: 90, nom: 'Poisson pepper soup', description: 'Poisson dans soupe pimentée', prix: 3200 }
        ]
    }
];