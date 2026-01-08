const axios = require('axios');

const API_BASE = "http://localhost:8000/api";

async function testBackend() {
    try {
        const mets = await axios.get(`${API_BASE}/mets/`);
        console.log("✅ Mets :", mets.data);

        const regions = await axios.get(`${API_BASE}/region/`);
        console.log("✅ Régions :", regions.data);

        const commandes = await axios.get(`${API_BASE}/commandes/`);
        console.log("✅ Commandes :", commandes.data);

        const contacts = await axios.get(`${API_BASE}/contact/`);
        console.log("✅ Contacts :", contacts.data);

        console.log("🎉 Test réussi !");
    } catch (err) {
        console.error("❌ Erreur :", err.response?.data || err.message);
    }
}

testBackend();
