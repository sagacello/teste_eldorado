const express = require('express');
const router = express.Router();

const categoriesControllers = require('../controllers/categoriesControllers');

router.post('/category', categoriesControllers.createCategory);
router.get('/category', categoriesControllers.getAllcategories);
router.get('/category/:id', categoriesControllers.getCategoryById);
router.delete('/category/:id', categoriesControllers.deleteCategoryById);

module.exports = router;