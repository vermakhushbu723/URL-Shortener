// routes.js
const express = require('express');
const router = express.Router();
const urlController = require('./controllers/urlController');
const authController = require('./controllers/authController');

router.post('/shorten', authController.authenticate, urlController.shortenURL);
router.get('/:shortUrl', urlController.redirectURL);
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
