const express = require('express');
const router = express.Router();
const mockDB = require('./mockDB'); // Import the mock database

// API endpoint to insert a new translation record
router.post('/translations', (req, res) => {
  const { inputText, translation } = req.body;
  const newTranslation = mockDB.insertTranslation(inputText, translation);
  res.json(newTranslation);
});

// API endpoint to retrieve all translation records
router.get('/translations', (req, res) => {
  const translations = mockDB.getAllTranslations();
  res.json(translations);
});

module.exports = router;
