const router = require("express").Router();
const categoryController = require("../Controllers/CategoryController");

router.post('/createCategory', categoryController.createCategory);
router.get("/getCategory", categoryController.getCategory);
router.get('/getCategoryById/:id', categoryController.getCategoryById);
router.put('/updateCategoryById/:id', categoryController.updateCategoryById);
router.delete('/deleteCategoryById/:id', categoryController.deleteCategoryById);

module.exports = router;