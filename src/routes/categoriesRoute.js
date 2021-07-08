const express = require('express');
const router = express.Router();

const categoriesControllers = require('../controllers/categoriesControllers');

router.post('/category', categoriesControllers.createCategory);

module.exports = router;