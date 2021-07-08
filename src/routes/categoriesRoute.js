const express = require('express');
const router = express.Router();

const categoriesControllers = require('../controllers/categoriesControllers');

router.post('/category', categoriesControllers.createCategory);
router.get('/category', categoriesControllers.getAllcategories);
router.get('/category/:id', categoriesControllers.getCategoryById);

module.exports = router;