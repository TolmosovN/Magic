const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');
const verifyAccessToken = require('../middlewares//verifyAccessToken');

router.post('/smart-search',verifyAccessToken, searchController.smartSearch);

module.exports = router;
