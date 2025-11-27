const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`

       🇨🇲 METS DU CAMEROUN 🇨🇲               

   Serveur démarré avec succès!         
                                        
   📍 URL: http://localhost:${PORT}    
                                           
   Appuyez sur Ctrl+C pour arrêter      

    `);
});