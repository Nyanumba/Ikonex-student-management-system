const express = require('express');
const router = express.Router();

// Import Controller
const authController = require('../controllers/authController');

// Import Middleware - Make sure the path and export name are correct
const { protectAuth } = require('../middleware/authMiddleware');

console.log('protectAuth loaded:', typeof protectAuth); // Debugging line
console.log('getMe loaded:', typeof authController.getMe); // Debugging line

// Public routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Protected route
router.get('/me', protectAuth, authController.getMe);

module.exports = router;