const express = require('express');
const router = express.Router();
const db = require('./db');

// Get all templates
router.get('/templates', (req, res) => {
    db.query('SELECT * FROM templates', (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(results);
        }
    });
});

// Add a new template
router.post('/templates', (req, res) => {
    const { name, price, image_url, section } = req.body;
    const query = 'INSERT INTO templates (name, price, image_url, section) VALUES (?, ?, ?, ?)';
    db.query(query, [name, price, image_url, section], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json({ id: results.insertId, name, price, image_url, section });
        }
    });
});

// Update a template
router.put('/templates/:id', (req, res) => {
    const { id } = req.params;
    const { name, price, image_url, section } = req.body;
    const query = 'UPDATE templates SET name = ?, price = ?, image_url = ?, section = ? WHERE id = ?';
    db.query(query, [name, price, image_url, section, id], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json({ id, name, price, image_url, section });
        }
    });
});

// Delete a template
router.delete('/templates/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM templates WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(204).send();
        }
    });
});

module.exports = router;
