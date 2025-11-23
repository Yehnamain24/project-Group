const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Base API Django
const API_BASE = 'http://localhost:8000/api';

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/views', express.static(path.join(__dirname, 'views')));

// Pages HTML
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')));
app.get('/mets', (req, res) => res.sendFile(path.join(__dirname, 'views', 'mets.html')));
app.get('/regions', (req, res) => res.sendFile(path.join(__dirname, 'views', 'regions.html')));
app.get('/commandes', (req, res) => res.sendFile(path.join(__dirname, 'views', 'commandes.html')));
app.get('/contacts', (req, res) => res.sendFile(path.join(__dirname, 'views', 'contact.html')));

// Helper fetch
async function fetchApi(method, url, data = null) {
  try {
    const res = await axios({ method, url: `${API_BASE}${url}`, data });
    return res.data;
  } catch (err) {
    console.error('API Error:', err.response?.data || err.message);
    throw err;
  }
}

// ----------------- ROUTES CRUD -----------------

// METS
app.get('/api/mets', async (req, res) => res.json(await fetchApi('get', '/mets/')));
app.post('/api/mets', async (req, res) => res.json(await fetchApi('post', '/mets/', req.body)));
app.put('/api/mets/:id', async (req, res) => res.json(await fetchApi('put', `/mets/${req.params.id}/`, req.body)));
app.delete('/api/mets/:id', async (req, res) => { await fetchApi('delete', `/mets/${req.params.id}/`); res.json({ ok: true }); });

// REGIONS
app.get('/api/region', async (req, res) => res.json(await fetchApi('get', '/region/')));
app.post('/api/region', async (req, res) => res.json(await fetchApi('post', '/region/', req.body)));
app.put('/api/region/:id', async (req, res) => res.json(await fetchApi('put', `/region/${req.params.id}/`, req.body)));
app.delete('/api/region/:id', async (req, res) => { await fetchApi('delete', `/region/${req.params.id}/`); res.json({ ok: true }); });

// COMMANDES
app.get('/api/commandes', async (req, res) => res.json(await fetchApi('get', '/commandes/')));
app.delete('/api/commandes/:id', async (req, res) => { await fetchApi('delete', `/commandes/${req.params.id}/`); res.json({ ok: true }); });

// CONTACTS
app.get('/api/contact', async (req, res) => res.json(await fetchApi('get', '/contact/')));
app.post('/api/contact', async (req, res) => res.json(await fetchApi('post', '/contact/', req.body)));
app.delete('/api/contact/:id', async (req, res) => { await fetchApi('delete', `/contact/${req.params.id}/`); res.json({ ok: true }); });

// STATISTIQUES
app.get('/api/statistiques', async (req, res) => res.json(await fetchApi('get', '/statistiques/')));

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
