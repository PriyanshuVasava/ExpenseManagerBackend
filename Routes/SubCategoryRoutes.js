const router = require("express").Router();
const subCategoryController = require("../Controllers/SubCategoryController");

router.post('/createSubCategory', subCategoryController.createSubCategory);
router.get("/getSubCategory", subCategoryController.getSubCategory);
router.get('/getSubCategoryById/:id', subCategoryController.getSubCategoryById);
router.put('/updateSubCategoryById/:id', subCategoryController.updateSubCategoryById);
router.delete('/deleteSubCategoryById/:id', subCategoryController.deleteSubCategoryById);

module.exports = router;