const {Router} = require('express');
const {createCategory, deleteCategory} = require("../controllers/categories.controllers");

const router = Router();

router.post('/user/:id/categories', createCategory);
router.delete('/user/:id/categories', deleteCategory);

module.exports = router;
