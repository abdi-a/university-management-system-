const express = require('express');
const router = express.Router();

// Basic instructor routes
router.get('/dashboard', (req, res) => {
  res.json({ message: 'Instructor dashboard' });
});

module.exports = router; 